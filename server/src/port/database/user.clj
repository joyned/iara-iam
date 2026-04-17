(ns port.database.user
  (:require
   [adapters.user]
   [domain.model.user]
   [next.jdbc :as jdbc]
   [schema.core :as s]))

(s/defn find-all :- [domain.model.user/User]
  [db]
  (mapv adapters.user/database->model (jdbc/execute! db ["select * from iam.\"user\""])))
