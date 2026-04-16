(ns core
  (:require [com.stuartsierra.component :as component]
            [components.server :as s]
            [components.database :as db]
            [config]))

(defn system []
  (let [config-data config/load-config
        db-config (config/db-config config-data)
        db-component (db/new-database db-config)]
    (component/system-map
     :config config-data
     :db db-component
     :app (component/using
           (s/map->Server {:components {}})
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
           (s/map->Server {})
           {:config :config
            :db-conn :db}))))

(defn -main [& _]
  (component/start (system)))