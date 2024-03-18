import React from "react";
import styles from "./index.module.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Loader from "../Loader";

function HeroCard() {
  const { page } = useParams();
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    fetch(`http://localhost:3004/${page}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoader(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page]);

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <div>
          {data.map((el, index) => {
            let flexDirection = "";
            if (index % 2 == 1) {
              flexDirection = "row-reverse";
            } else {
              flexDirection = "reverse";
            }
            return (
              <div
                key={index}
                status={(index + 1) % 2 == 0 ? "right" : "left"}
                className={styles.card__wrapper}
                style={{ flexDirection: `${flexDirection}` }}
              >
                <div className={styles.card__img}>
                  <img src={el.image} />
                </div>
                <div className={styles.card__title}>
                  <h4>NEW PRODUCT</h4>
                  <h2>{el.name}</h2>
                  <p>{el.description}</p>
                  <Link to={`/pages/${page}/${el.id}`}>
                    <button>See Product</button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

export default HeroCard;
