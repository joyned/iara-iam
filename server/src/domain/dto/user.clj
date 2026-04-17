(ns domain.dto.user
  (:require [schema.core :as s]))

(s/defschema User {(s/required-key :id) s/Uuid
                   (s/required-key :email) s/Str
                   (s/required-key :full-name) s/Str
                   (s/optional-key :picture) s/Str
                   (s/optional-key :is-blocked) s/Bool})
