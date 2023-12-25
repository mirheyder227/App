import  { useState } from "react";
import styles from "./Footer.module.scss";
import facebook from "../../assets/images/icons/HomePageIcon/Footer-icon/facebook.svg";
import Instagram from "../../assets/images/icons/HomePageIcon/Footer-icon/instagram.svg";
import Twiter from "../../assets/images/icons/HomePageIcon/Footer-icon/twiter.svg";

function Footer() {
    const [email, setEmail] = useState("");
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubmit = (e) => {
     e.preventDefault();
      if (validateEmail(email)) {
       // TODO: Add logic for handling the subscription (e.g., sending to a server)
        console.log("Subscribed email:", email);
        setEmail("");
       setIsSubscribed(true);
     } else {
        console.error("Invalid email address");
     }
   };
 
    const validateEmail = (email) => {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     return regex.test(email);
   };
  return (
    <section className={styles.footerContainer}>
      <div className={styles.containerSecond}>
        <div className={styles.footerStart}>
          <h6>FOURHANG</h6>
          <div className={styles.footerImg}>
            <a href="">
              <img src={facebook} alt="" />
            </a>
            <a href="">
              <img src={Instagram} alt="" />
            </a>
            <a href="">
              <img src={Twiter} alt="" />
            </a>
          </div>
        </div>
        <div className={styles.footerContent}>
          <div className={styles.footerCard}>
            <h6>Company Info</h6>
            <a href="">About Us</a>
            <a href="">Carrier</a>
            <a href="">We are hiring</a>
            <a href="">Blog</a>
          </div>
          <div className={styles.footerCard}>
            <h6>Legal</h6>
            <a href="">About Us</a>
            <a href="">Carrier</a>
            <a href="">We are hiring</a>
            <a href="">Blog</a>
          </div>
          <div className={styles.footerCard}>
            <h6>Features</h6>
            <a href="">Business Marketing</a>
            <a href="">User Analytic</a>
            <a href="">Live Chat</a>
            <a href="">Unlimited Support</a>
          </div>
          <div className={styles.footerCard}>
            <h6> Resources</h6>
            <a href=""> IOS & Android</a>
            <a href=""> Watch a Demo</a>
            <a href="">Customers</a>
            <a href="">API</a>
          </div>
          <div className={styles.footerCard}>
            <h6> Get In Touch</h6>
            <form onSubmit={handleSubmit}>
            <div className={styles.footerInput}>
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit">Subscribe</button>
            </div>
          </form>

          {isSubscribed && <p>Thank you for subscribing!</p>}
          </div>
        </div>
       
      </div>
      <div className={styles.footerLastext}>
      <h4>Made With Love By Finland All Right Reserved</h4>
        </div>
    </section>
  );
}

export default Footer;
