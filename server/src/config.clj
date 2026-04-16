(ns config
  (:require
   [clojure.data.json :as json]
   [clojure.java.io :as io]))

(defn read-json-from-resources [filename]
  (let [resource-url (io/resource filename)]
    (if resource-url
      (json/read-str (slurp resource-url) :key-fn keyword)
      (throw (Exception. (str "Resource not found: " filename))))))

(def load-config
  (read-json-from-resources "config.json"))

(def test-config
  (read-json-from-resources "test-config.json"))

(defn db-config [config]
  (let [db-type (get-in config [:database :type])]
    {:dbtype db-type
     :dbname (get-in config [:database :name])
     :host (when (= db-type "postgresql") (get-in config [:database :host]))
     :port (when (= db-type "postgresql") (get-in config [:database :port] 5432))
     :user (get-in config [:database :username])
     :password (get-in config [:database :password])}))