(ns port.database.user
  (:require [next.jdbc :as jdbc]))

(defn find-all [db]
  (jdbc/execute! db ["SELECT * FROM iam.\"user\""]))
