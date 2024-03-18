import { useParams } from "react-router-dom";
import React from "react";
import styles from "./index.module.css";
import Cards from "../../components/Cards";
import Audio from "../../components/Audio";
import MainTitle from "../../components/MainTitle";
import LeftImages from "../../components/LeftImages";

function Headphones() {
  const { page } = useParams();

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  return (
    <>
      <MainTitle title={page}>HEADPHONES</MainTitle>
      <div className={styles.contain}>
        <LeftImages></LeftImages>
        <Cards></Cards>
        <Audio></Audio>
      </div>
    </>
  );
}

export default Headphones;
