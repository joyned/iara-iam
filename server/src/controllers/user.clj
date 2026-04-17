(ns controllers.user
  (:require
   [domain.model.user]
   [port.database.user]
   [schema.core :as s]))

(s/defn find-all :- [domain.model.user/User]
  [db]
  (port.database.user/find-all db))
