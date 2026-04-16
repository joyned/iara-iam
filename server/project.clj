(defproject server "1.0.0"
  :description "FIXME: write description"
  :url "https://example.com/FIXME"
  :license {:name "EPL-2.0 OR GPL-2.0-or-later WITH Classpath-exception-2.0"
            :url "https://www.eclipse.org/legal/epl-2.0/"}
  :dependencies [[org.clojure/clojure               "1.12.2"]
                 [io.pedestal/pedestal.service      "0.5.8"]
                 [io.pedestal/pedestal.jetty        "0.5.9"]
                 [org.clojure/data.json             "2.4.0"]
                 [org.slf4j/slf4j-simple            "2.0.9"]
                 [com.stuartsierra/component        "1.2.0"]
                 [clj-http                          "3.13.1"]
                 [cheshire                          "5.9.0"]
                 [org.postgresql/postgresql         "42.2.10"]
                 [com.github.seancorfield/next.jdbc "1.3.834"]
                 [org.mindrot/jbcrypt               "0.3m"]
                 [prismatic/schema                  "1.4.1"]
                 [com.draines/postal                "2.0.5"]
                 [com.h2database/h2                 "2.2.224"]]
  :main ^:skip-aot core
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all
                       :jvm-opts ["-Dclojure.compiler.direct-linking=true"]}})
