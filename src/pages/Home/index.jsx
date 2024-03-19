import { Link } from "react-router-dom";
import React from "react";
import styles from "./index.module.css";
import stein from "../../assets/stein.png";
import earphones from "../../assets/earphones.png";
import Cards from "../../components/Cards";
import Audio from "../../components/Audio";

function Home() {
  window.scrollTo({
    top:0,
    behavior: "smooth",
  });
  
  return (
    <>
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.title}>
            <h5>NEW PRODUCT</h5>
            <h2>XX99 Mark II Headphones</h2>
            <p>
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <Link to="/pages/HEADPHONES/4">
              <button>See Product</button>
            </Link>
          </div>
        </div>
      </div>

      {/* cards component */}
      <div className={styles.wrapper_container}>
        <Cards></Cards>

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
            <Link to="/pages/SPEAKERS/6">
              <button>See Product</button>
            </Link>
          </div>
        </div>

        {/* SPEAK component */}
        <div className={styles.speak}>
          <div className={styles.speak__title}>
            <h4>ZX7 SPEAKER</h4>
            <Link to="/pages/SPEAKERS/5">
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
            <Link to="/pages/EARPHONES/1">
              <button>See Product</button>
            </Link>
          </div>
        </div>

        {/* AUDIO component */}
        <Audio></Audio>
      </div>
    </>
  );
}

export default Home;
