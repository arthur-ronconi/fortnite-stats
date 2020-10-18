import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Api from "../utils/api";
import Navbar from "../sections/navbar";
import Hero from "../sections/hero";
import HomeContent from "../sections/homecontent";

export default function Home({ news, dailyItems, upcomingItems }) {
  return (
    <div className={styles.body}>
      <Head>
        <title>Fortnite Stats</title>
      </Head>
      {/* <Navbar /> */}
      <Hero link={false} />
      <HomeContent
        news={news}
        dailyItems={dailyItems}
        upcomingItems={upcomingItems}
      />
    </div>
  );
}
export const getStaticProps = async () => {
  const news = await Api().getNews({ lang: "en" });
  const dailyItems = await Api().getDailyShop({ lang: "en" });
  const upcomingItems = await Api().listUpcomingItems({ lang: "en" });
  return {
    props: { news, dailyItems, upcomingItems },
    revalidate: 1800,
  };
};
