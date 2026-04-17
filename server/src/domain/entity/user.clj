(ns domain.entity.user
  (:require [schema.core :as s]))

(s/defschema User {(s/required-key :user/id) s/Uuid
                   (s/required-key :user/email) s/Str
                   (s/required-key :user/full-name) s/Str
                   (s/required-key :user/password) s/Str
                   (s/optional-key :user/picture) s/Str
                   (s/optional-key :user/otp-key) s/Str
                   (s/optional-key :user/is-blocked) s/Bool})
