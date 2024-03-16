import React from "react";
import styles from "./index.module.css";
import Cards from "../../components/Cards";
import Audio from "../../components/Audio";
import MainTitle from "../../components/MainTitle";

function Speakers() {
  return (
    <>
      <MainTitle title="SPEACERS"></MainTitle>
      <div className={styles.container}>
        <Cards></Cards>
        <Audio></Audio>
      </div>
    </>
  );
}

export default Speakers;
