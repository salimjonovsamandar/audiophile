import React from "react";
import styles from "./index.module.css";
import Cards from "../../components/Cards";
import Audio from "../../components/Audio";
import MainTitle from "../../components/MainTitle";
import LeftImages from "../../components/LeftImages";

function Headphones() {
  return (
    <>
      <MainTitle title="HEADPHONES"></MainTitle>
      <div className={styles.container}>
        <Cards></Cards>
        <Audio></Audio>
      </div>
    </>
  );
}

export default Headphones;
