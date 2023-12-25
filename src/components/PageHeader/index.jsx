import styles from "./pageHeader.module.scss";
import telephone from "../../assets/images/icons/HomePageIcon/Header-Icon/telephone.svg"
import mail from "../../assets/images/icons/HomePageIcon/Header-Icon/mail.svg"
import instagram from "../../assets/images/icons/HomePageIcon/Header-Icon/instagram.svg"
import youtube from "../../assets/images/icons/HomePageIcon/Header-Icon/youtube.svg"
import facebook from "../../assets/images/icons/HomePageIcon/Header-Icon/facebook.svg"
import twiter from "../../assets/images/icons/HomePageIcon/Header-Icon/twiter.svg"



const PageHeader = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.Contact}>
        <div className={styles.telephone}>
          <img src={telephone} alt="" />
          <h6>(225) 555-0118</h6>
        </div>
        <div className={styles.Mail}>
          <img src={mail} alt="" />
          <h6>michelle.rivera@example.com</h6>
        </div>
      </div>
      <div className={styles.Text}>
        <h6>Follow Us and get a chance to win 80% off</h6>
      </div>
      <div className={styles.Media}>
<div className={styles.Follow}>
<h6>Follow Us :</h6>

</div>
        <div className={styles.Img}>
        <img src={instagram} alt="" />
        <img src={youtube} alt="" />
        <img src={facebook} alt="" />
        <img src={twiter} alt="" />
      </div>
      </div>
  
    </div>
  );
};

export default PageHeader;
