(ns components.database
  (:require
   [clojure.tools.logging :as logging]
   [com.stuartsierra.component :as component]
   [next.jdbc :as jdbc]
   [next.jdbc.result-set :as rs]))

(def default-opts {:builder-fn rs/as-kebab-maps})

(defrecord Database [config datasource]
  component/Lifecycle
  (start [this]
    (logging/info "Starting database component")
    (let [db-spec (if (= "h2:mem" (:dbtype config))
                    {:dbtype "h2:mem"
                     :dbname (:dbname config)}
                    {:dbtype "postgresql"
                     :dbname (:dbname config)
                     :host (:host config)
                     :port (or (:port config) 5432)
                     :user (:user config)
                     :password (:password config)})]
     (assoc this :datasource (jdbc/with-options (jdbc/get-datasource db-spec) default-opts))))

  (stop [this]
    (logging/info "Stopping database component")
    (assoc this :datasource nil)))

(defn new-database [config]
  (map->Database {:config config}))