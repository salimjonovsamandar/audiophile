import React from "react";
import styles from "./index.module.css";
import { Link } from "react-router-dom";
import headphon from "../../assets/Headphon.png";
import earphone from "../../assets/earphone.png";
import speaker from "../../assets/speaker.png";
import stein from "../../assets/stein.png";
import earphones from "../../assets/earphones.png";
import Bitmap from "../../assets/Bitmap.png";

function Home() {
  return (
    <div className={styles.content__wrapper}>
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.title}>
            <h5>NEW PRODUCT</h5>
            <h2>XX99 Mark II Headphones</h2>
            <p>
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <Link to="/seeProduct">
              <button>See Product</button>
            </Link>
          </div>
        </div>
      </div>

      {/* cards component */}
      <div className={styles.wrapper_container}>
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

        {/* STEIN component */}
        <div className={styles.stein}>
          <div className={styles.stein_img}>
            <img src={stein} alt="" />
          </div>
          <div className={styles.stein_title}>
            <h3>ZX9 SPEAKER</h3>
            <p>
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <Link to="/seeProduct">
              <button>See Product</button>
            </Link>
          </div>
        </div>

        {/* SPEAK component */}
        <div className={styles.speak}>
          <div className={styles.speak__title}>
            <h4>ZX7 SPEAKER</h4>
            <Link to="/seeProduct">
              <button>See Product</button>
            </Link>
          </div>
        </div>

        {/* EARPHONES component */}
        <div className={styles.earphones}>
          <div className={styles.earphones_img}>
            <img src={earphones} alt="earphones" />
          </div>
          <div className={styles.earphones_title}>
            <h4>YX1 EARPHONES</h4>
            <Link to="/seeProduct">
              <button>See Product</button>
            </Link>
          </div>
        </div>

        {/* AUDIO component */}
        <div className={styles.audio}>
          <div className={styles.audio_img}></div>
          <div className={styles.audio_title}>
            <h2>
              BRINGING YOU THE <span>BEST</span> AUDIO GEAR
            </h2>
            <p>
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
