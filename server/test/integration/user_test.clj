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

(deftest user-creation-test
  (with-test-server-auto
    (let [response (http-request-auto :post "/api/v1/user"
                                      {:body {:email "test@email.com"
                                              :full-name "John Doe"
                                              :password "123456789"
                                              :password-confirmation "123456789"}})]
      (is (= 201 (:status response)))
      (println (:body response))
      (is (= "test@email.com" (:email (:body response)))))))
