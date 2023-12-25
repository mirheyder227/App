import styles from "./carusel.module.scss"
const index = ({img}) => {
  return (
    <div className={styles.CaruselCard}>
<img src={img} alt="" />
    </div>
  )
}

export default index