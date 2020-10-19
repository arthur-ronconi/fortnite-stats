import styles from "../styles/Home.module.scss";
export default function HomeContent({ news, dailyItems, upcomingItems }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          {news && <h2>News</h2>}
          <ul className={styles.ul}>
            {news.news.slice(0, 5).map((item) => {
              if (item.image) {
                return (
                  <li
                    key={Math.random() * 100}
                    className="card p-0 border-0 mb-3"
                  >
                    <img src={item.image} alt="" className="card-img" />
                    <div className="card-body">
                      <p className="card-title primary h4">{item.title}</p>
                      <p className="card-text">{item.body}</p>
                    </div>
                  </li>
                );
              }
            })}
          </ul>
        </div>
        <div className="col-lg-4">
          <div className="daily mb-5">
            {dailyItems && <h2>Daily Shop</h2>}

            <ul className={styles.ul + " row"}>
              {dailyItems.daily.map((item) => {
                return (
                  <li key={item.id} className="col-6 p-0">
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
                  <li key={item.id} className="col-4 p-0">
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
  );
}
