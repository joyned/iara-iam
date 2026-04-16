(ns controllers.user
  (:require [port.database.user :as database.user]))

(defn find-all [db]
  (database.user/find-all db))
