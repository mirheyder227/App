 import styles from "./card.module.scss";

const Card = ({ imgs, email, mail, support, btn }) => {
  return (
    <div className={styles.cards}>
      <img src={imgs} alt="" />
      <h6>{email}</h6>
      <h6>{mail}</h6>
      <h5>{support}</h5>
      <button>{btn}</button>
    </div>
  );
};

export default Card;
