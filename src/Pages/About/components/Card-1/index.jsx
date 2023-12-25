 import styles from "./card.module.scss";
const Card1 = ({ num,text}) => {
  return (
 
<div className={styles.Card}>
        <h1>{num}</h1>
        <h5>{text}</h5>
     </div>
   
  )
}

export default Card1