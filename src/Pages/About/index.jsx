import styles from "./about.module.scss";
import shoes from "../../assets/images/About/shoes.png";
import Card1 from "./components/Card-1";
import Advertising from "../components/advertising";
import Card2 from "../components/Card-2";

import water from "../../assets/images/About/water.png";
import { CardOne, Meet } from "../Js/db";
import video from "../../assets/images/About/Video.png";
const index = () => {
  return (
    <div className={styles.AboutContainer}>
      <div className={styles.AboutHeader}>
        <div className={styles.Text}>
          {" "}
          <h5>ABOUT COMPANY</h5>
          <h1>ABOUT US</h1>
          <h4>
            We know how large objects will act, but things on a small scale
          </h4>
          <button>Get Quote Now</button>
        </div>
        <div className={styles.img}>
          <img src={shoes} alt="" />
        </div>
      </div>

      <div className={styles.aboutProblems}>
        <div className={styles.Title}>
          <p>Problems trying</p>
          <h2>
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          </h2>
        </div>
        <div className={styles.paragraph}>
          <p>
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>
        </div>
      </div>

      <div className={styles.cardContent}>
        {CardOne.map((CardOne) => {
          return (
            <Card1 key={CardOne.id} num={CardOne.num} text={CardOne.text} />
          );
        })}
      </div>
      <div className={styles.imgVideo}>
        <img src={video} alt="" />
      </div>

      <div className={styles.meet}>
        <div className={styles.meetTitle}>
          <h2>Meet Our Team</h2>
          <p>
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>
        </div>
        <div className={styles.meetTeam}>
          {Meet.map((Meet) => {
            return (
              <Card2
                key={Meet.id}
                img={Meet.img}
                name={Meet.name}
                descr={Meet.descr}
                facebook={Meet.facebook}
                insta={Meet.insta}
                twit={Meet.twit}
              />
            );
          })}
        </div>
      </div>

      <div className={styles.advertising}>
        <div className={styles.AdText}>
          <h2>Big Companies Are Here</h2>
          <p>
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>
        </div>
        <Advertising />
      </div>
      <div className={styles.workContent}>
        <div className={styles.work}>
          <h5>WORK WITH US</h5>
          <h2>Now Let’s grow Yours</h2>
          <p>
            The gradual accumulation of information about atomic and small-scale
            behavior during the first quarter of the 20th{" "}
          </p>
          <button>Button</button>
        </div>
        <div className={styles.imgs}>
          <img src={water} alt="" />
        </div>
      </div>
    </div>
  );
};

export default index;
