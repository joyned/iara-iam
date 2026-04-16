(ns controllers.health-check
  (:require
   [port.database]
   [clojure.tools.logging :as logging]))

(defn health-check [db]
  (try
    (port.database/health-check db)
    {:healthy true}
    (catch Exception e
      (logging/error {:error :health-check-failed :cause e})
      {:healthy false
       :error (.getMessage e)})))