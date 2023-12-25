import  { useState } from "react";   
import { useNavigate } from "react-router-dom";
import styles from "./login.module.scss";
import facebook from "../../../assets/images/LoginandSignUp/facebook.svg";
import { useDispatch } from "react-redux";
import hr from "../../../assets/images/LoginandSignUp/hr.png";
import { login } from "../../../api/auth";
import { getUserInfo } from "../../../store/reducers/auth";
import { roots } from "../../Routes/constans";   

function LoginPage() {
  console.log(import.meta.env.VITE_API_TOKEN);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [logData, setLogData] = useState({   
    identifier: "",
    password: "",
  });

  const handleChange = (e) => {   
    setLogData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,   
    }));

  };

  const handleSubmit = async (e) => {
 
    e.preventDefault();
    const loginUser = await login(logData);

    if (loginUser) {
      dispatch(getUserInfo(loginUser));
      navigate(roots.Home);
  

    }
  };

  return (
    <div className={styles.LoginContent}>
      <h2>Welcome Back</h2>
      <form onSubmit={handleSubmit}>  
        <button className={styles.btn1}>
          <img src={facebook} alt="" /> Facebook
        </button>

        <div className={styles.rightLeftLine}>
          <img src={hr} alt="" /> OR <img src={hr} alt="" />
        </div>

        <div className={styles.email}>
          <label htmlFor="identifier">Email address *</label>
          <input
            type="text"
            name="identifier"
            value={logData.identifier}
            onChange={handleChange}
            placeholder="example@gmail.com"
          />
        </div>
        <div className={styles.Password}>
          <label htmlFor="password">Password *</label>
          <input
            type="password"
            name="password"
            value={logData.password}
            onChange={handleChange}
            placeholder="Password"
          />
        </div>

        <button  className={styles.btn2} type="submit">
          <a href="/">Get Started</a>
        </button>
      </form>

      <div className={styles.Login}>
        <h3>Already have an account?</h3>
        <a href="/SignUp">Sign Up</a>
      </div>
    </div>
  );
}

export default LoginPage;
