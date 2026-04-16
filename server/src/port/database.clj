(ns port.database
  (:require
   [next.jdbc :as jdbc]))

(defn health-check [db]
  (jdbc/execute! db ["SELECT 1 as healthy"]))