(ns port.http-server
  (:require
   [controllers.health-check]
   [controllers.user]
   [interceptors :refer [common-interceptors]]
   [io.pedestal.http.route :as route]))

(defn find-all-users [{components :components}]
  (let [users (controllers.user/find-all (:db components))]
    {:status 200
     :body users}))

(defn health-check [{components :components}]
  (let [result (controllers.health-check/health-check (:db components))]
    (if (:healthy result)
      {:status 200
       :body result}
      {:status 500
       :body result})))

(defn routes [components]
  #{["/api/health" :get (conj (common-interceptors components)
                              health-check)
     :route-name :health-check]
    ["/api/v1/user" :get (conj (common-interceptors components)
                               find-all-users)
     :route-name :find-all-user]})

(defn server-routers [components]
  (route/expand-routes (routes components)))
