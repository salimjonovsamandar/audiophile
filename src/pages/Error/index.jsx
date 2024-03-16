import React from "react";
import styles from "../Error/index.module.css";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className={styles.content}>
      <h1 className={styles.title}>Page Not Found</h1>
      <Link className={styles.button} to="/home">
        Back to Home
      </Link>
    </div>
  );
}

export default Error;
