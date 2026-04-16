(ns integration.user-test
  (:require
   [clojure.test :refer [deftest is]]
   [integration.util.aux :refer [http-request-auto with-test-server-auto]]))

(deftest user-fetch-test
  (with-test-server-auto
    (let [response (http-request-auto :get "/api/v1/user")]
      (is (= 200 (:status response)))
      (is (= "clark.kent@dailyplanet.com" (:EMAIL (first (:body response))))))))
