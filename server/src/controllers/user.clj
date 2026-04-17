(ns controllers.user
  (:require
   [domain.model.user]
   [port.database.user]
   [schema.core :as s]))

(s/defn find-all :- [domain.model.user/User]
  [db]
  (port.database.user/find-all db))

(s/defn create-user :- domain.model.user/User
  [data :- domain.model.user/User
   db]
  (port.database.user/create-user data db))
