(ns domain.dto.user-request
  (:require [schema.core :as s]))

(s/defschema User {(s/required-key :email) s/Str
                   (s/required-key :full-name) s/Str
                   (s/required-key :password) s/Str
                   (s/required-key :password-confirmation) s/Str
                   (s/optional-key :picture) s/Str})
