import styles from './card.module.scss'

const Card2 = ({img,name,descr,facebook,insta,twit}) => {
  return (
    <div className={styles.Card}>
       <img src={img} alt="" /> 
       <h5>{name}</h5>
       <h6>{descr}</h6>
       <div className={styles.images}>
        <img src={facebook} alt="" />
        <img src={insta} alt="" />
        <img src={twit} alt="" />
       </div>
    </div>
  )
}

export default Card2