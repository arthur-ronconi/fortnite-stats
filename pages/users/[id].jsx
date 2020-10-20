import { useRouter } from "next/router";
import Hero from "../../sections/hero";
import Api from "../../utils/api";
import styles from "../../styles/User.module.scss";
import Footer from "../../sections/footer";

export default function User({ response }) {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <Hero link={true} />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="display-4 ">{response.name}</h2>
            <h3>
              Account level:
              <span className={styles.accountLevel}>
                {response.account.level
                  ? ` ${response.account.level}`
                  : " Unavailable"}
              </span>
            </h3>
          </div>
        </div>
        <div className={`row ${styles.stats}`}>
          <div className="col-lg-4">
            <h3>Solo</h3>
            <ul>
              <li>
                K/D ratio:
                <span className={styles.stat}>
                  {response.global_stats
                    ? ` ${response.global_stats.solo.kd}`
                    : " Unavailable"}
                </span>
              </li>
              <li>
                Kills:
                <span className={styles.stat}>
                  {response.global_stats
                    ? ` ${response.global_stats.solo.kills}`
                    : "Unavailable"}
                </span>
              </li>
              <li>
                Wins:
                <span className={styles.stat}>
                  {response.global_stats
                    ? ` ${response.global_stats.solo.placetop1}`
                    : "Unavailable"}
                </span>
              </li>
              <li>
                Matches played:
                <span className={styles.stat}>
                  {response.global_stats
                    ? ` ${response.global_stats.solo.matchesplayed}`
                    : "Unavailable"}
                </span>
              </li>
              <li>
                Players outlived:
                <span className={styles.stat}>
                  {response.global_stats
                    ? ` ${response.global_stats.solo.playersoutlived}`
                    : "Unavailable"}
                </span>
              </li>
            </ul>
          </div>
          <div className="col-lg-4">
            <h3>Duo</h3>
            <ul>
              <li>
                K/D ratio:
                <span className={styles.stat}>
                  {response.global_stats
                    ? ` ${response.global_stats.duo.kd}`
                    : " Unavailable"}
                </span>
              </li>
              <li>
                Kills:
                <span className={styles.stat}>
                  {response.global_stats
                    ? ` ${response.global_stats.duo.kills}`
                    : "Unavailable"}
                </span>
              </li>
              <li>
                Wins:
                <span className={styles.stat}>
                  {response.global_stats
                    ? ` ${response.global_stats.duo.placetop1}`
                    : "Unavailable"}
                </span>
              </li>
              <li>
                Matches played:
                <span className={styles.stat}>
                  {response.global_stats
                    ? ` ${response.global_stats.duo.matchesplayed}`
                    : "Unavailable"}
                </span>
              </li>
              <li>
                Players outlived:
                <span className={styles.stat}>
                  {response.global_stats
                    ? ` ${response.global_stats.duo.playersoutlived}`
                    : "Unavailable"}
                </span>
              </li>
            </ul>
          </div>
          <div className="col-lg-4">
            <h3>Squad</h3>
            <ul>
              <li>
                K/D ratio:
                <span className={styles.stat}>
                  {response.global_stats
                    ? ` ${response.global_stats.squad.kd}`
                    : " Unavailable"}
                </span>
              </li>
              <li>
                Kills:
                <span className={styles.stat}>
                  {response.global_stats
                    ? ` ${response.global_stats.squad.kills}`
                    : "Unavailable"}
                </span>
              </li>
              <li>
                Wins:
                <span className={styles.stat}>
                  {response.global_stats
                    ? ` ${response.global_stats.squad.placetop1}`
                    : "Unavailable"}
                </span>
              </li>
              <li>
                Matches played:
                <span className={styles.stat}>
                  {response.global_stats
                    ? ` ${response.global_stats.squad.matchesplayed}`
                    : "Unavailable"}
                </span>
              </li>
              <li>
                Players outlived:
                <span className={styles.stat}>
                  {response.global_stats
                    ? ` ${response.global_stats.squad.playersoutlived}`
                    : "Unavailable"}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.query;
  const response = await Api().getGlobalPlayerStats(id);
  // console.log(await response);
  return {
    props: { response },
  };
}
