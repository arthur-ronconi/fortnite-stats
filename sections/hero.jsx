import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../styles/Hero.module.scss";
import Api from "../utils/api";
export default function Hero({ link }) {
  const router = useRouter();

  const [search, setSearch] = useState("");
  const [accountId, setAccountId] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const FortniteAPI = require("fortnite-api-io");
  const fortniteAPI = new FortniteAPI("d4b0c477-a3bd4895-cf0dd77a-6d169cb7");

  const handleClick = async () => {
    setIsLoading(true);
    const response = await fortniteAPI.getAccountIdByUsername(search);
    const id = await response.account_id;
    setAccountId(await id);
    router.push("/users/" + (await id));
    return setIsLoading(false);
  };

  return (
    <div>
      <header className={`jumbotron jumbotron-fluid ${styles.jumbotron}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className={styles.content}>
                {link && (
                  <Link href="/">
                    <a className="text-light">{`<  Back`}</a>
                  </Link>
                )}

                <h1 className="display-4 main-heading text-center text-md-left">
                  Fortnite Stats
                </h1>
                <form>
                  <div className="form-group">
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className={`form-control ${styles.input}`}
                        placeholder="Search username"
                        aria-label="Search username"
                        aria-describedby="button-addon2"
                        onChange={(e) => {
                          setSearch(e.target.value);
                        }}
                      />
                      <div className="input-group-append">
                        <button
                          className={`btn ${styles.btn} ${styles.btnWhite}`}
                          type="button"
                          id="button-addon2"
                          onClick={handleClick}
                        >
                          {isLoading ? (
                            <div
                              className="spinner-border text-primary"
                              role="status"
                            >
                              <span className="sr-only">Loading...</span>
                            </div>
                          ) : (
                            "Search"
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-6 d-none d-lg-block">
              <img src="/img/fortnite.png" alt="" />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
