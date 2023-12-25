 
import styles from "./card.module.scss";
const Cards = ({img,title,descr}) => {
  return (
    
       
        <div className={styles.card}>
          <div className={styles.cardImg}>
            <img src={img} alt="" />
         
          </div>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.descr}>{descr}</p>
        </div>

    
  );
};

export default Cards;
