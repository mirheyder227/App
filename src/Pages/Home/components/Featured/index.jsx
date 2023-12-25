 import styles from "./Featured.module.scss";

const Featured = ({text,title,images}) => {
  return (
    <div className={styles.CardContent}>
        <img src={images} alt="" />
     <div className={styles.Content}>
     <h6 className={styles.Title}>{title}</h6>
        <p className={styles.Text}>{text} </p>
     </div>
    </div>
  )
}

export default Featured