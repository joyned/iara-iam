(ns port.database.user
  (:require
   [adapters.user]
   [domain.entity.user]
   [domain.model.user]
   [next.jdbc :as jdbc]
   [schema.core :as s]))

(s/defn find-all :- [domain.model.user/User]
  [db]
  (mapv adapters.user/database->model (jdbc/execute! db ["select * from iam.\"user\""])))

(s/defn create-user :- domain.model.user/User
  [data :- domain.model.user/User
   db]
  (let [{:user/keys [id email full-name password picture]} (adapters.user/model->database data)]
    (-> (jdbc/execute-one! db
                           ["INSERT INTO iam.\"user\" (id, email, full_name, \"password\", picture) VALUES(?, ?, ?, ?, ?)"
                            id email full-name password picture] {:return-keys ["id" "email" "full_name" "password" "picture" "is_blocked"]})
        (adapters.user/database->model))))
