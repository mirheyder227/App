import styles from "./hero.module.scss";
import shoesCricle from "../../../../assets/images/icons/HomePageIcon/hero-icon/shoesCricle.png";


const Hero = () => {
  return (
    <section className={styles.mainContainer}>
      <div className={styles.container}>
        <div className={styles.hero}>
        <div className={styles.content}>
        <h5>SUMMER 2022</h5>
          <h3>Just run like the wind</h3>
          <p>
            We know how large objects will act, but things on a small scale.
          </p>
          <button>SEE SALE PRODUCTS</button>
        </div>
         
         <div className={styles.image}>
        <img src={shoesCricle} alt="" />
         </div>
         </div>
      </div>
    </section>
  );
};

export default Hero;
