(ns components.server
  (:require
   [com.stuartsierra.component :as component]
   [io.pedestal.http :as http]
   [port.http-server :as http-server]))


(defn service [components]
  {:env                 :prod
   ::http/routes        (http-server/server-routers components)
   ::http/resource-path "/public"
   ::http/type          :jetty
   ::http/port          (get-in components [:config :port])
   ::http/join?         false})

(defn start-server! [components]
  (-> (service components)
      http/create-server
      http/start))

(defn stop-server! [server]
  (when server
    (http/stop server)))


(defrecord Server [config db-conn app]
  component/Lifecycle
  (start [this]
    (let [datasource (:datasource db-conn)
          started-server (start-server! {:config config
                                         :db datasource})]
      (assoc this :app started-server)))
  (stop [this]
    (when app
      (stop-server! app))
    (assoc this :app nil)))