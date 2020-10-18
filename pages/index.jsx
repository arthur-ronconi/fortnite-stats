import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Api from "../utils/api";
import Navbar from "../sections/navbar";
import Hero from "../sections/hero";

export default function Home({ news, dailyItems, upcomingItems }) {
  return (
    <div className={styles.body}>
      {/* <Navbar /> */}
      <Hero />
      <div className="container">
        <div className="row">
          <div className="col-8">
            {news && <h2>News</h2>}
            <ul className={styles.ul}>
              {news.news.slice(0, 10).map((item) => {
                if (item.image) {
                  return (
                    <li
                      key={Math.random() * 100}
                      className="card p-0 border-0 mb-3"
                    >
                      <img src={item.image} alt="" className="card-img" />
                      <div className="card-body">
                        <h4 className="card-title primary">{item.title}</h4>
                        <p className="card-text">{item.body}</p>
                      </div>
                    </li>
                  );
                }
              })}
            </ul>
          </div>
          <div className="col-4">
            <div className="daily mb-5">
              {dailyItems && <h2>Daily Shop</h2>}

              <ul className={styles.ul + " row"}>
                {dailyItems.daily.map((item) => {
                  return (
                    <li key={item.id} className="col-6">
                      <img
                        src={item.full_background}
                        alt=""
                        className="img-fluid w-100"
                      />
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="upcoming">
              {upcomingItems && <h2>Upcoming Items</h2>}

              <ul className={styles.ul + " row"}>
                {upcomingItems.items.slice(0, 9).map((item) => {
                  return (
                    <li key={item.id} className="col-4">
                      <img
                        src={item.images.full_background}
                        alt=""
                        className="img-fluid"
                      />
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export const getStaticProps = async () => {
  const news = await Api().getNews({ lang: "en" });
  const dailyItems = await Api().getDailyShop({ lang: "en" });
  const upcomingItems = await Api().listUpcomingItems({ lang: "en" });

  console.log(news);
  return {
    props: { news, dailyItems, upcomingItems },
    revalidate: 1800,
  };
};
