(ns core
  (:require [com.stuartsierra.component :as component]
            [components.server :as server]
            [components.database :as db]
            [config]
            [schema.core :as schema]))

(schema/set-fn-validation! true)

(defn system []
  (let [config-data config/load-config
        db-config (config/db-config config-data)
        db-component (db/new-database db-config)]
    (component/system-map
     :config config-data
     :db db-component
     :app (component/using
           (server/map->Server {:components {}})
           {:config :config
            :db-conn :db}))))

(defn test-system []
  (let [config-data config/test-config
        db-config (config/db-config config-data)
        db-component (db/new-database db-config)]
    (component/system-map
     :config config-data
     :db db-component
     :app (component/using
           (server/map->Server {})
           {:config :config
            :db-conn :db}))))

(defn -main [& _]
  (component/start (system)))