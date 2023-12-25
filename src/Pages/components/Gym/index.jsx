import styles from "./gym.module.scss";
 import date from "../../../assets/images/HomePage/Last-Content/clock.svg"
 import arrow from "../../../assets/images/HomePage/Last-Content/arrow-next.svg"
 import commentIcn from "../../../assets/images/HomePage/Last-Content/comment.svg"
 



const Gym = ({gymImg}) => {
  return (
<div className={styles.container}>
 
 
      <div className={styles.gym}>
      <img src={gymImg} alt="" />
      <div className={styles.Link}>
        <a href="" >google</a>
        <a href="">trending</a>
        <a href="">news</a>
      </div>
      <div className={styles.gymContent}>
      <h4>Loudest à la Madison #1 
(L integral)</h4>
        <p >We focus on ergonomics and meeting 
you where you work. Its only a 
keystroke away.</p>
    <div className={styles.dateAndComments}>
    <p className={styles.date}><img src={date} alt="" />22 April 2021</p>
        <p className={styles.comment}><img src={commentIcn} alt="" />10 comments</p>
    </div>
        <h6 className={styles.Learn}>Learn More  <img src={arrow} alt="" /></h6>
      </div>

      </div>
 
</div>
  );
};

export default Gym;
