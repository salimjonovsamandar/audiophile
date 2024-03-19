import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import styles from "./index.module.css";
import shape from "../assets/shape.svg";
import hamburger from "../assets/hamburger.svg";
import logo from "../assets/logo.svg";
import Modal from "../components/Modal";

function Header() {
  const [show, setShow] = useState(false);
  const [modal, setModal] = useState(false);

  function showNav() {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  }

  useEffect(() => {
    if (modal) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [modal]);

  function handleClick() {
    setModal(!modal);
  }

  return (
    <div>
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
                    <Link to="/pages/HEADPHONES">
                      <li>HEADPHONES</li>
                    </Link>
                    <Link to="/pages/SPEAKERS">
                      <li>SPEAKERS</li>
                    </Link>
                    <Link to="/pages/EARPHONES">
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
                <Link to="/pages/HEADPHONES">
                  <li>HEADPHONES</li>
                </Link>
                <Link to="/pages/SPEAKERS">
                  <li>SPEAKERS</li>
                </Link>
                <Link to="/pages/EARPHONES">
                  <li>EARPHONES</li>
                </Link>
              </ul>
            </div>

            <div onClick={handleClick} className={styles.basket}>
              <img style={{ cursor: "pointer" }} src={shape} />
            </div>
          </div>
          <div className={styles.border}></div>
        </header>
      </div>
      {modal && <Modal setModal={setModal} />}
    </div>
  );
}

export default Header;
