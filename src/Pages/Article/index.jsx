import styles from "./Article.module.scss";
import arrow from "../../assets/images/HomePage/Last-Content/arrow-next.svg";
import atlt from "../../assets/images/TheBlog/atlt.png";
import Gym from "../components/Gym";
import { sports } from "../Js/db";
import GetStarted from "../components/getStarted";
import cricle from "../../assets/images/Article/circle.png";
const Article = () => {
  return (
    <div className={styles.ArticleContainer}>
      <div className={styles.ArticleHeader}>
        <div className={styles.Link}>
          <a href="">Home</a> <img src={arrow} alt="" /> <a href="">Blog</a>
        </div>
        <h5>TUTORIAL</h5>
        <h2>Why is Figma crashing?</h2>
        <p>
          We focus on ergonomics and meeting you where you work. It`s only a
          keystroke away.
        </p>
      </div>
      <div className={styles.faq}>
        <img src={atlt} alt="" />
        <div className={styles.faqSection}>
          <h2>1 - Temper ENIM consequent</h2>
          <p>
            Temper ENIM consequent excitation dolor et else desert labor painter
            excitation venial consequent ex temper. Null labors Lore acute labor
            Nisei labrum do sent. Labrum elite quiet sent Lore quit. Eu occaecat
            EU liquid sent Fiat door magma official. ET minim excitation painter
            dolor Dolores. Dolor ad else acute dolor nostrum quit also met
            Mollie Fiat elite official. Cilium ENIM dolor labor venial labor in
            desert sit venial inure ex official.
          </p>
        </div>

        <div className={styles.faqSection}>
          <h2>2 - Temper ENIM consequent</h2>
          <p>
            Temper ENIM consequent excitation dolor et else desert labor painter
            excitation venial consequent ex temper. Null labors Lore acute labor
            Nisei labrum do sent. Labrum elite quiet sent Lore quit. Eu occaecat
            EU liquid sent Fiat door magma official. ET minim excitation painter
            dolor Dolores. Dolor ad else acute dolor nostrum quit also met
            Mollie Fiat elite official. Cilium ENIM dolor labor venial labor in
            desert sit venial inure ex official.
          </p>
        </div>

        <div className={styles.faqSection}>
          <h2>3 - ENIM null voltage liquid door et ConnectEDU cilium est</h2>
          <p>
            ENIM null voltage liquid door et ConnectEDU cilium est. Cuppa
            nostrum Nisei sent voltage ID. Else ConnectEDU sit UT reprehended
            desert labrum minim null et. Duis consequent met labors non acute
            elite ad cilium dolor inure ex ENIM excitation. Painter labors
            occaecat elite ex liquid quit Nisei official minim labor liquid
            official sit UT. Ali quip Nisei commodo door met cupidity UT magma
            venial magma door adipisicing painter.
          </p>
        </div>
      </div>
      <div className={styles.Circle}>
        <div className={styles.img}>
          <img src={cricle} alt="" />
        </div>

        <div className={styles.text}>
          <h5>Kevin William</h5>
          <p>
            Ali qua id Fiat nostrum inure ex door ea quit id quit ad et. Sent
            quit else painter door desert Mollie Dolores cilium minim temper
            ENIM. Elite acute inure temper cupidity incident sent desert UT
            voltage acute id desert Nisei. Ali qua id Fiat nostrum inure ex door
            ea quit id quit ad et. Sent quit else painter door desert Mollie
            Dolores cilium minim temper ENIM. Elite acute inure temper cupidity
            incident sent desert UT voltage acute id desert Nisei.
          </p>
        </div>
      </div>

      <div className={styles.Featured}>
        <div className={styles.featuredText}>
          <h2>Featured Posts</h2>
        </div>

        <div className={styles.gym}>
          {sports.map((item) => {
            return <Gym key={item.id} gymImg={item.gymImg} />;
          })}
        </div>
      </div>
      <div className={styles.Get}>
        <GetStarted />
      </div>
    </div>
  );
};

export default Article;
