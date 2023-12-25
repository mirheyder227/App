import styles from "./Header.module.scss";
import menuIcon from "../../assets/images/icons/HomePageIcon/Header-Icon/menu-mobile.svg";
import person from "../../assets/images/icons/HomePageIcon/Header-Icon/login-person.svg";
import Hearth from "../../assets/images/icons/HomePageIcon/Header-Icon/hearth-icn.svg";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/reducers/auth";
import React from "react";
import Search from "../Search/index";
import Basket from "../../assets/images/icons/HomePageIcon/Header-Icon/shopping-mobile.svg"
 
function Header( ) {
   
  const [showLinks, setShowLinks] = React.useState(false);

  const toggleLinks = (e) => {
    e.preventDefault();
    setShowLinks(!showLinks);
  };

  const { token, userData } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    const answer = window.confirm("Are you sure to logout?");
    if (answer) {
      dispatch(logout());
    }
  };

  return (
    <section className={styles.HeaderContainer}>
      <div className={styles.containerFirst}>
        <div className={styles.mobileHeader}>
          <h3>FOURHANG</h3>
        </div>
        <nav  className={`${styles.navBar} ${showLinks ? `${styles.navBarActive}` : ''}`}>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="../../Pages/Product">Product</a>
            </li>
            <li>
              <a href="../../Pages/Pricing">Pricing</a>
            </li>
            <li>
              <a href="/Product">Shop</a>
            </li>
            <li>
              <a href="/About">About</a>
            </li>
            <li>
              <a href="/TheBlog">Blog</a>
            </li>
            <li>
              <a href="/Contact">Contact</a>
            </li>
            <li className={styles.pageslink}>
          <a href="#">Pages</a>
          <div className={styles.dropdown}>
             <a href="/productList">ProductList</a>
            <a href="/Pricing">Pricing</a>
            <a href="/Article">Article</a>
     

          </div>
        </li>
          </ul>
          {!token && (
          <div className={styles.login}>
            {token && ` Welcome ${userData.username}`}
            <img src={person} alt="Person Icon" />
            <h6>
              <a href="/Login"> Login </a>
            </h6>
            <p>/</p>
            <h6>
              <a href="/SignUp"> Register </a>
            </h6>
          </div>
        )}
        {token && (
          <button className={styles.Btn} onClick={handleLogout}>
            <a href="/Login"> Logout </a>
          </button>
        )}
        </nav>
        <div className={styles.mobileImage}>
      <Search/>
          <img src={Basket} alt="" />
          <img onClick={toggleLinks} src={menuIcon} alt="Menu Icon" />
          <img src={Hearth} alt="Hearth Icon" />
        </div>
      </div>
    </section>
  );
}

export default Header;