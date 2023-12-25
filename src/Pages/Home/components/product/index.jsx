 import styles from "./product.module.scss"
const Product = ({ img, shoesType, Link, priceOutdated, priceNew }) => {
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
    </div>
  </div>

      
  )
}

export default Product