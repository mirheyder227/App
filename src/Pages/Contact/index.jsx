import styles from "./contact.module.scss";
import shoes from "../../assets/images/About/shoes.png";
import facebook from "../../assets/images/Contact/face.svg";
import twit from "../../assets/images/Contact/twit.svg";
import insta from "../../assets/images/Contact/insta.svg";
import linked from "../../assets/images/Contact/linked.svg";
import Card from "./components/card";
import arrow from "../../assets/images/Contact/Arrow 2.svg";
import { Cards } from "../Js/db";
const index = () => {
  return (
    <div className={styles.ContactContainer}>
      <div className={styles.ContactHero}>
     <div className={styles.Title}>
     <h5>CONTACT US</h5>
        <h1>Get in touch today!</h1>
        <h4>
          We know how large objects will act, but things on a small scale just
          do not act that way.
        </h4>
        <h3>Phone ; +451 215 215 </h3>
        <h3>Fax : +451 215 215</h3>
        <div className={styles.img}>
          <img src={twit} alt="" />
          <img src={facebook} alt="" />
          <img src={insta} alt="" />
          <img src={linked} alt="" />{" "}
        </div>
     </div>
        <div className={styles.image}>
          <img src={shoes} alt="" />
        </div>
      </div>
      <div className={styles.CardContent}>
        <div className={styles.cardHeader}>
          <h6>VISIT OUR OFFICE</h6>
          <h2>We help small businesses with big ideas</h2>
        </div>
        <div className={styles.Card}>
          {Cards.map((Cards) => {
            return (
              <Card
                key={Cards.id}
                imgs={Cards.imgs}
                email={Cards.email}
                mail={Cards.mail}
                support={Cards.support}
                btn={Cards.btn}
              />
            );
          })}
        </div>

        <div className={styles.Talk}>
          <img src={arrow} alt="" />
          <h6>WE Can`t WAIT TO MEET YOU</h6>
          <h2>Let’s Talk</h2>
          <button>Try it free now</button>
        </div>
      </div>
    </div>
  );
};

export default index;
