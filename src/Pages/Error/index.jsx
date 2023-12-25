import styles from "./error.module.scss";
import arrow from "../../assets/images/HomePage/Last-Content/arrow-next.svg";
import error from "../../assets/images/Error/error.svg";
import left from "../../assets/images/Error/arrowLeft.svg";
const index = () => {
  return (
    <div className={styles.errorContainer}>
      <div className={styles.errorHead}>
        <h2>404</h2>
        <div className={styles.links}>
          <a href="/">Home</a> <img src={arrow} alt="" />{" "}
          <a href="/Error">404</a>
        </div>
    
        <div className={styles.oops}>
          <h2>Oops...</h2>
          <p>We can’t seem to find the page you’re looking for.</p>
          <button>
            <img src={left} alt="" /> <a href="/">Back to Home</a>
          </button>
        </div>
      </div>
    <div className={styles.Container}>
    <div className={styles.img}>
          {" "}
          <img src={error} alt="" />
        </div>
       <div className={styles.Text}>
        <h2>Are you looking for...</h2>
      </div>
      <div className={styles.content}>
        <ul>
          <li>
            <img src={arrow} alt="" /> <a href="/">Home</a>
          </li>
          <li>
            <img src={arrow} alt="" /> <a href="/TheBlog">Blog</a>
          </li>
          <li>
            <img src={arrow} alt="" /> <a href="/Contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default index;
