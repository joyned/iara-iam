(ns domain.model.user
  (:require [schema.core :as s]))

(s/defschema User {(s/optional-key :id) s/Uuid
                   (s/required-key :email) s/Str
                   (s/required-key :full-name) s/Str
                   (s/required-key :password) s/Str
                   (s/optional-key :picture) (s/maybe s/Str)
                   (s/optional-key :otp-key) (s/maybe s/Str)
                   (s/optional-key :is-blocked) (s/maybe s/Bool)
                   s/Any s/Any})
