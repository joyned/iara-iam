(ns interceptors
  (:require
   [clojure.data.json :as json]
   [io.pedestal.http.body-params :as body-params]
   [io.pedestal.http.content-negotiation :as content-negotiation]
   [io.pedestal.interceptor :as interceptor]))

(def supported-types ["application/json"
                      "application/edn"
                      "text/plain"
                      "text/html"])

(defn components-interceptor [components]
  (interceptor/interceptor
   {:name ::components
    :enter (fn [context]
             (assoc-in context [:request :components] components))}))

(def content-negotiation-interceptor (content-negotiation/negotiate-content supported-types))

(defn accepted-type
  [context]
  (get-in context [:request :accept :field] "text/plain"))
(defn transform-content
  [body content-type]
  (case content-type
    "text/html" body
    "text/plain" body
    "application/edn" (pr-str body)
    "application/json" (json/write-str body)))

(defn coerce-to
  [response content-type]
  (-> response
      (update :body transform-content content-type)
      (assoc-in [:headers "Content-Type"] content-type)))

(def coerce-body-response
  {:name ::coerce-body-response
   :leave
   (fn [context]
     (if (get-in context [:response :headers "Content-Type"])
       context
       (update-in context [:response] coerce-to (accepted-type context))))})

(defn common-interceptors [components]
  [(components-interceptor components)
   coerce-body-response
   content-negotiation-interceptor
   (body-params/body-params)])