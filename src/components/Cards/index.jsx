import { Link } from "react-router-dom";
import React from "react";
import styles from "./index.module.css";
import headphon from "../../assets/Headphon.png";
import earphone from "../../assets/earphone.png";
import speaker from "../../assets/speaker.png";

function index() {
  return (
    <div>
      <div className={styles.products}>
        <div className={styles.headphones}>
          <div className={styles.images}>
            <img src={headphon} alt="Heardphones" />
          </div>
          <div className={styles.cards}>
            <h3>HEADPHONES</h3>
            <p>
              <Link>
                SHOP{" "}
                <span>
                  <b>→</b>
                </span>
              </Link>
            </p>
          </div>
        </div>

        <div className={styles.headphones}>
          <div className={styles.images}>
            <img src={speaker} alt="Heardphones" />
          </div>
          <div className={styles.cards}>
            <h3>SPEAKERS</h3>
            <p>
              <Link>
                SHOP{" "}
                <span>
                  <b>→</b>
                </span>
              </Link>
            </p>
          </div>
        </div>

        <div className={styles.headphones}>
          <div className={styles.images}>
            <img src={earphone} alt="Heardphones" />
          </div>
          <div className={styles.cards}>
            <h3>EARPHONES</h3>
            <p>
              <Link>
                SHOP{" "}
                <span>
                  <b>→</b>
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
