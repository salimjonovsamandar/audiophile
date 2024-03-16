import React from "react";
import styles from "./index.module.css";

function index({ title }) {
  return (
    <div className={styles.title_container}>
      <header>
        <h1>{title}</h1>
      </header>
    </div>
  );
}

export default index;
