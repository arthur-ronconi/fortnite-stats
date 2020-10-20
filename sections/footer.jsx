import styles from "../styles/Footer.module.scss";
export default function Footer() {
  return (
    <footer className={`row ${styles.footer}`}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="text-center text-md-left">
              <h4>Fortnite Stats</h4>
              <p>Arthur Ronconi - 2020</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="text-center text-md-right">
              <a
                href="https://bit.ly/arthurronconi"
                rel="noopener noreferrer"
                target="blank"
              >
                Hire Me :)
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
