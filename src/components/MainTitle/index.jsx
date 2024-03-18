import React from "react";
import styles from "./index.module.css";

function index({ title }) {
  return (
    <div className={styles.title_container}>
      <div className={styles.header}>
        <h1>{title}</h1>
      </div>
    </div>
  );
}

export default index;
