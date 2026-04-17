(ns integration.user-test
  (:require
   [clojure.test :refer [deftest is]]
   [integration.util.aux :refer [http-request-auto with-test-server-auto]]))

(deftest user-fetch-test
  (with-test-server-auto
    (let [response (http-request-auto :get "/api/v1/user")
          user (first (:body response))]
      (is (= 200 (:status response)))
      (is (= "luke.skywalker@rebeliao.com" (:email user)))
      (is (= nil (:password user)))
      (is (= nil (:otp-key user))))))
