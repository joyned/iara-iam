(ns adapters.user
  (:require
   [domain.dto.user]
   [domain.entity.user]
   [domain.model.user]
   [schema.core :as s]))

(s/defn database->model :- domain.model.user/User
  [{:user/keys [id email full-name password picture otp-key is-blocked]} :- domain.entity.user/User]
  {:id id
   :email email
   :full-name full-name
   :password password
   :picture picture
   :otp-key otp-key
   :is-blocked is-blocked})

(s/defn model->dto :- domain.dto.user/User
  [{:keys [id email full-name picture is-blocked]} :- domain.model.user/User]
  {:id id
   :email email
   :full-name full-name
   :picture picture
   :is-blocked is-blocked})
