import styles from "./card.module.scss";
import eyes from "../../../../assets/images/Product/eyes.svg"
import Basket from "../../../../assets/images/Product/basket.svg"
import hearth from "../../../../assets/images/Product/hearth.svg"
import raiting from "../../../../assets/images/Product/stars.png"
import blue from "../../../../assets/images/Product/blue.svg"
import yellow from "../../../../assets/images/Product/yellow.svg"
import black from "../../../../assets/images/Product/black.svg"
import orange from "../../../../assets/images/Product/orange.svg"

const index = ({images,title,  price}) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imgWrapper}>
        <img src={images} alt="" />
      
    
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.raiting}>
          <img src={raiting} alt="" />
          <h6 className={styles.number}>10 Reviews</h6>
        </div>
        <div className={styles.Price}>
          <h5>${price}</h5>
       
          <h6 className={styles.stock}>availability:In stock</h6>
        </div>
        <p className={styles.text}>Met minim Mollie non desert Alamo est sit cliquey dolor 
do met sent. RELIT official consequent door ENIM RELIT Mollie. 
Excitation venial consequent sent nostrum met.</p>
        <hr />
        <div className={styles.color}>
          <img src={blue} alt="" />
          <img src={yellow} alt="" />
          <img src={orange} alt="" />
          <img src={black} alt="" />
        </div>
        <div className={styles.btnWrapper}>
          <button>
            <a href="">Select Options</a>
          </button>
         <div className={styles.Image}>
         <img src={hearth} alt="" />
          <img src={Basket} alt="" />
          <img src={eyes} alt="" />
         </div>
        </div>
      </div>
    </div>
  );
};

export default index;
