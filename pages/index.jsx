import styles from "../styles/Home.module.scss";
import Api from "../utils/api";
import Hero from "../sections/hero";
import HomeContent from "../sections/homecontent";
import Seo from "../sections/seo";
import Footer from "../sections/footer";

export default function Home({ news, dailyItems, upcomingItems }) {
  return (
    <div className={styles.body}>
      <Seo />
      <Hero link={false} />
      <HomeContent
        news={news}
        dailyItems={dailyItems}
        upcomingItems={upcomingItems}
      />
      <Footer />
    </div>
  );
}
export const getStaticProps = async () => {
  const news = await Api().getNews({ lang: "en" });
  const dailyItems = await Api().getDailyShop({ lang: "en" });
  const upcomingItems = await Api().listUpcomingItems({ lang: "en" });
  return {
    props: { news, dailyItems, upcomingItems },
    revalidate: 300,
  };
};
