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
    <header>
      <div className={styles.header__content}>
        <div className={styles.responsive}>
          <div className={styles.hamburger}>
            <img onClick={showNav} src={hamburger} alt="" />
          </div>
          {show && (
            <div className={styles.column__links}>
              <ul>
                <li>HOME</li>
                <li>HEADPHONES</li>
                <li>SPEAKERS</li>
                <li>EARPHONES</li>
              </ul>
            </div>
          )}
        </div>
        <div className={styles.header__logo}>
          <Link to="/">
            <img src={logo} />
          </Link>
        </div>
        <div className={styles.links}>
          <ul>
            <li>HOME</li>
            <li>HEADPHONES</li>
            <li>SPEAKERS</li>
            <li>EARPHONES</li>
          </ul>
        </div>
        <div className={styles.basket}>
          <img src={shape} />
        </div>
      </div>
      <div className={styles.border}></div>
    </header>
  );
}

export default Header;
