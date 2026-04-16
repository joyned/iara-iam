(ns integration.util.aux
  (:require
   [clj-http.client :as client]
   [clojure.data.json :as json]
   [com.stuartsierra.component :as component]
   [core :refer [test-system]]))

(defn get-server-port
  [system]
  (-> system :app :config :port))

(def ^:dynamic *test-system* nil)

(defn http-request-auto
  "Usa o *test-system* global para fazer requisições"
  [method path & {:keys [body headers]}]
  (if (nil? *test-system*)
    {:status 500 :body "Test system not available"}
    (let [app (:app *test-system*)]
      (if (nil? app)
        {:status 500 :body "Server component not started"}
        (let [port (get-server-port *test-system*)
              url (str "http://localhost:" port path)]
          (try
            (let [base-params {:request-method method
                               :url url
                               :headers (or headers {})
                               :accept :json
                               :as :json
                               :socket-timeout 5000
                               :conn-timeout 5000
                               :throw-exceptions false}
                  params (cond
                           (and body (not (string? body)))
                           (assoc base-params
                                  :body (json/write-str body)
                                  :content-type :json)
                           (string? body)
                           (assoc base-params
                                  :body body
                                  :content-type :json)
                           :else
                           base-params)]
              (client/request params))
            (catch Exception e
              {:status 500
               :body {:error "Request failed"
                      :message (.getMessage e)
                      :type (str (class e))}})))))))

(defmacro with-test-server-auto
  [& body]
  `(do
     (let [system# (component/start (test-system))]
       (try
         (binding [*test-system* system#]
           ~@body)
         (finally
           (component/stop system#))))))

(defmacro with-db
  [& body]
  `(do
     (~@body (get-in *test-system* [:app :db-conn]))))