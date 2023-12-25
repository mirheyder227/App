 
import styles from "./advertising.module.scss";
import Holi from "../../../assets/images/icons/HomePageIcon/advertising/hooli.svg";
import Lyft from "../../../assets/images/icons/HomePageIcon/advertising/lyft.svg";
import Hat from "../../../assets/images/icons/HomePageIcon/advertising/hat.svg";
import Stripe from "../../../assets/images/icons/HomePageIcon/advertising/stripe.svg";
import Aws from "../../../assets/images/icons/HomePageIcon/advertising/aws.svg";
import Reddit from "../../../assets/images/icons/HomePageIcon/advertising/reddit-alien.svg";
 
const index = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContent}>
      <img src={Holi} alt="" />
      <img src={Lyft} alt="" />
      <img src={Hat} alt="" />
      <img src={Stripe} alt="" />
      <img src={Aws} alt="" />
      <img src={Reddit} alt="" />
    </div>
    </div>
  );
};

export default index;
