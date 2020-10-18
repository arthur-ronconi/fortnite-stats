import styles from "../styles/Navbar.module.scss";

export default function Navbar() {
  return (
    <nav className={`navbar navbar-expand-lg ${styles.navbar}`}>
      <div className="container">
        <a className={`navbar-brand ${styles.brand}`} href="/">
          Fortnite Stats
        </a>
      </div>
    </nav>
  );
}
