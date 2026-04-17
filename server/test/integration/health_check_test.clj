(ns integration.health-check-test
  (:require
   [clojure.test :refer [deftest is]]
   [integration.util.aux :refer [http-request-auto with-test-server-auto]]))

(deftest test-simple
  (with-test-server-auto
    (let [response (http-request-auto :get "/api/health")]
      (is (= 200 (:status response)))
      (is (= {:healthy true} (:body response))))))
