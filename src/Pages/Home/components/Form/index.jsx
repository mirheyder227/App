import  { useState } from "react";
import styles from "./form.module.scss";

const Form = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = () => {
    console.log("Subscribed with email:", email);
    setSubscribed(true);
    setEmail("");
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.formContent}>
        {!subscribed ? (
          <>
            <h3>Subscribe For Latest Newsletter</h3>
            <div className={styles.sbs}>
              <div className={styles.btn}>
                <input
                  type="text"
                  placeholder="Your Email"
                  value={email}
                  onChange={handleEmailChange}
                />
                <button onClick={handleSubscribe}>Subscribe</button>
              </div>
              <p>The gradual accumulation of information</p>
            </div>
          </>
        ) : (
          <>
            <h3>Thank You for Subscribing!</h3>
            <p>You will receive our latest newsletter soon.</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Form;
