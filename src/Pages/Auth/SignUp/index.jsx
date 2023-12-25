import styles from "./signUp.module.scss";
import facebook from "../../../assets/images/LoginandSignUp/facebook.svg";
import hr from "../../../assets/images/LoginandSignUp/hr.png";
import React from "react";
import { register } from "../../../api/auth";
import { useNavigate } from "react-router-dom";
import { roots } from "../../Routes/constans";

function SignUp() {
  const navigation = useNavigate();
 
  const [regData, setRegData] = React.useState({
    email: "",
    password: "",
    username: "",
  });
  const handleCahnge = (e) => {
    setRegData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
      
    }));

  };

  const handleSubmit = async (e) => {
 
    
    e.preventDefault();
     

    const registerUser = await register(regData);

    if (registerUser) {
      navigation(roots.Login);
    }

  };
  return (
    <div className={styles.signUpContent}>
      <div className={styles.container}>
        <div className={styles.signHeader}>
          <h2>Sign up for free</h2>
          <h5>Try everything free for 30 days, no payment details required</h5>
        </div>
        <form onSubmit={handleSubmit}>
          <button className={styles.btn1}>
            <img src={facebook} alt="Facebook" />
            Facebook
          </button>
          <div className={styles.Or}>
            <img src={hr} alt="" /> OR <img src={hr} alt="" />
          </div>
          <div className={styles.Name}>
            <label htmlFor="username">Name *</label>
            <input
              type="text"
              name="username"
              value={regData.username}
              onChange={handleCahnge}
              placeholder="Full Name * "
            />
          </div>
          <div className={styles.Email}>
            <label htmlFor="email">Email address *</label>
            <input
              type="text"
              name="email"
              value={regData.email}
              onChange={handleCahnge}
              placeholder="example@gmail.com"
            />
          </div>
          <div className={styles.Password}>
            <label htmlFor="password">Password *</label>
            <input
              type="password"
              name="password"
              value={regData.password}
              onChange={handleCahnge}
              placeholder="Password"
            />
          </div>
          <button  className={styles.btn2}>Get Started</button>
          <h3>
            By filling in the form above and clicking the “Get Started” button,
            you accept and agree to Terms of Service and Privacy Policy.
          </h3>
          <div className={styles.text}>
            <h4>Already have an account?</h4>
            <a href="/Login">Sign in</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
