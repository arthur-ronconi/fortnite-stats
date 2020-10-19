import { useRouter } from "next/router";
import Hero from "../../sections/hero";
import Api from "../../utils/api";

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
              {response.account.level
                ? `Account level ${response.account.level}`
                : "Account Level: Unavailable"}
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <h3>Solo</h3>
            <ul>
              <li>
                {response.global_stats
                  ? `K/D ratio: ${response.global_stats.solo.kd}`
                  : "Unavailable"}
              </li>
              <li>
                {response.global_stats
                  ? `Kills: ${response.global_stats.solo.kills}`
                  : "Unavailable"}
              </li>
              <li>
                {response.global_stats
                  ? `Wins: ${response.global_stats.solo.placetop1}`
                  : "Unavailable"}
              </li>
              <li>
                {response.global_stats
                  ? `Matches played: ${response.global_stats.solo.matchesplayed}`
                  : "Unavailable"}
              </li>
              <li>
                {response.global_stats
                  ? `Players outlived: ${response.global_stats.solo.playersoutlived}`
                  : "Unavailable"}
              </li>
            </ul>
          </div>
          <div className="col-lg-4">
            <h3>Duo</h3>
            <ul>
              <li>
                {response.global_stats
                  ? `K/D ratio: ${response.global_stats.duo.kd}`
                  : "Unavailable"}
              </li>
              <li>
                {response.global_stats
                  ? `Kills: ${response.global_stats.duo.kills}`
                  : "Unavailable"}
              </li>
              <li>
                {response.global_stats
                  ? `Wins: ${response.global_stats.duo.placetop1}`
                  : "Unavailable"}
              </li>
              <li>
                {response.global_stats
                  ? `Matches played: ${response.global_stats.duo.matchesplayed}`
                  : "Unavailable"}
              </li>
              <li>
                {response.global_stats
                  ? `Players outlived: ${response.global_stats.duo.playersoutlived}`
                  : "Unavailable"}
              </li>
            </ul>
          </div>
          <div className="col-lg-4">
            <h3>Squad</h3>
            <ul>
              <li>
                {response.global_stats
                  ? `K/D ratio: ${response.global_stats.squad.kd}`
                  : "Unavailable"}
              </li>
              <li>
                {response.global_stats
                  ? `Kills: ${response.global_stats.squad.kills}`
                  : "Unavailable"}
              </li>
              <li>
                {response.global_stats
                  ? `Wins: ${response.global_stats.squad.placetop1}`
                  : "Unavailable"}
              </li>
              <li>
                {response.global_stats
                  ? `Matches played: ${response.global_stats.squad.matchesplayed}`
                  : "Unavailable"}
              </li>
              <li>
                {response.global_stats
                  ? `Players outlived: ${response.global_stats.squad.playersoutlived}`
                  : "Unavailable"}
              </li>
            </ul>
          </div>
        </div>
      </div>
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
