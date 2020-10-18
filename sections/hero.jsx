import styles from "../styles/Hero.module.scss";
export default function Hero() {
  return (
    <div>
      <header className={`jumbotron jumbotron-fluid ${styles.jumbotron}`}>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className={styles.content}>
                <h1 className="display-4 main-heading">Fortnite Stats</h1>
                <form>
                  <div className="form-group">
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className={`form-control ${styles.input}`}
                        placeholder="Recipient's username"
                        aria-label="Recipient's username"
                        aria-describedby="button-addon2"
                      />
                      <div className="input-group-append">
                        <button
                          className={`btn ${styles.btn} ${styles.btnWhite}`}
                          type="button"
                          id="button-addon2"
                        >
                          Search
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-6">
              <img src="img/fortnite.png" alt="" />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
