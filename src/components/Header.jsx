import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.css";
import shape from "../assets/shape.svg";
import hamburger from "../assets/hamburger.svg";
import logo from "../assets/logo.svg";

function Header() {
  const [show, setShow] = useState(false);

  function showNav() {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  }

  return (
    <div className={styles.bg__container}>
      <header>
        <div className={styles.header__content}>
          <div className={styles.responsive}>
            <div className={styles.hamburger}>
              <img onClick={showNav} src={hamburger} alt="" />
            </div>
            {show && (
              <div className={styles.column__links}>
                <ul>
                  <Link to="/">
                    <li>HOME</li>
                  </Link>
                  <Link to="/headphones">
                    <li>HEADPHONES</li>
                  </Link>
                  <Link to="/speakers">
                    <li>SPEAKERS</li>
                  </Link>
                  <Link to="/earphones">
                    <li>EARPHONES</li>
                  </Link>
                </ul>
              </div>
            )}
          </div>
          <div className={styles.header__logo}>
            <Link to="/home">
              <img src={logo} />
            </Link>
          </div>
          <div className={styles.links}>
            <ul>
              <Link to="/home">
                <li>HOME</li>
              </Link>
              <Link to="/headphones">
                <li>HEADPHONES</li>
              </Link>
              <Link to="/speakers">
                <li>SPEAKERS</li>
              </Link>
              <Link to="/earphones">
                <li>EARPHONES</li>
              </Link>
            </ul>
          </div>
          <div className={styles.basket}>
            <img src={shape} />
          </div>
        </div>
        <div className={styles.border}></div>
      </header>
    </div>
  );
}

export default Header;
