import styles from "./pricing.module.scss";
import arrow from "../../assets/images/HomePage/Last-Content/arrow-next.svg";
import men from "../../assets/images/Pricing/men.png";
import women from "../../assets/images/Pricing/women.png";
import gyms from "../../assets/images/Pricing/gyms.png";
import gyms2 from "../../assets/images/Pricing/gyms2.png";
import atletizm from "../../assets/images/Pricing/atletizm.png";
import facebook from "../../assets/images/icons/HomePageIcon/Footer-icon/facebook.svg";
import twit from "../../assets/images/icons/HomePageIcon/Footer-icon/twiter.svg";
import insta from "../../assets/images/icons/HomePageIcon/Footer-icon/instagram.svg";
import linked from "../../assets/images/Pricing/linkedin.svg";
import Card2 from "../components/Card-2";
import { Price } from "../Js/db";
const Pricing = () => {
  return (
    <div className={styles.PricingContent}>
      <div className={styles.PricingHeader}>
        <h5>WHAT WE DO</h5>
        <h2>Innovation tailored for you</h2>
        <div className={styles.Link}>
          <a href="">Home</a> <img src={arrow} alt="" /> <a href="">Team</a>{" "}
        </div>
      </div>

      <div className={styles.Images}>
        <img src={men} alt="" />
        <img src={women} alt="" />
        <img src={gyms} alt="" />
        <img src={gyms2} alt="" />
        <img src={atletizm} alt="" />
      </div>

      <div className={styles.priceMeet}>
        <h2>Meet Our Team</h2>

        <div className={styles.meetTeam}>
          {Price.map((Price) => {
            return (
              <Card2
                key={Price.id}
                img={Price.img}
                name={Price.name}
                descr={Price.descr}
                facebook={Price.facebook}
                insta={Price.insta}
                twit={Price.twit}
              />
            );
          })}
        </div>
      </div>

      <div className={styles.tryNow}>
        <h2>Start your 14 days free trial</h2>
        <h6>
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent.
        </h6>
        <button>Try it free now</button>
        <div className={styles.img}>
          <img src={twit} alt="" />
          <img src={facebook} alt="" />
          <img src={insta} alt="" />
          <img src={linked} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
