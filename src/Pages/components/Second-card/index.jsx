import styles from "./card.module.scss";
import raiting from "../../../assets/images/Product/stars.png"
const Card2 = ({ img, shoesType, Link, priceOutdated, priceNew ,Reviews,color}) => {
  return (
    
   
        <div className={styles.card}>
          <img src={img} alt="" />
          <div className={styles.text}>
            <h4 className={styles.shoesType}>{shoesType}</h4>
            <p className={styles.Link}>
              <a href="">{Link}</a>
            </p>
            <div className={styles.priceContainer}>
              <h5 className={styles.price}>
                <span className={styles.priceOutdated}>{priceOutdated}</span>
                <span className={styles.priceNew}>{priceNew}</span> </h5>
            </div>
       <div>
             <img src={raiting} alt="" />
            {  Reviews? <div> </div>: <></>}
       </div>
       <div className="">
        {color? <div></div> :<></>}
       </div>
          </div>
        </div>
  
    
    
  );
};

export default Card2;
