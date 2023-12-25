import styles from "./blog.module.scss";
import arrow from "../../assets/images/HomePage/Last-Content/arrow-next.svg";
import Gym from "../components/Gym";
import GetStarted from "../components/getStarted";
import { sport } from "../Js/db";

const TheBlog = () => {
  return (
    <div className={styles.blogContent}>
      <div className={styles.blogHeader}>
        <h5>LEARN WITH US</h5>
        <h2>The Blog</h2>
        <div className={styles.link}>
          <a href="../Home">Home</a> <img src={arrow} alt="" />{" "}
          <a href="./index.jsx">Blog</a>
        </div>
      </div>

      <div className={styles.gymContainer}>
        {sport.map((item) => {
          return <Gym key={item.id} gymImg={item.gymImg} />;
        })}
      </div>

      <GetStarted />
    </div>
  );
};

export default TheBlog;
