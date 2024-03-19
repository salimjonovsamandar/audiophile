import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import styles from "../Modal/index.module.css";

function index({ setModal }) {
  const [count, setCount] = useState(1);
  const selectRef = useRef(0);
  const navigate = useNavigate();
  let total = Number(0);
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  useEffect(() => {
    selectRef.current = count;
  }, [count]);

  function handleClik() {
    navigate(`/pages/checkout`);
  }

  function getData() {
    let data = [];
    if (localStorage.getItem("products")) {
      data = JSON.parse(localStorage.getItem("products"));
    }
    return data;
  }

  function handleDelete() {
    dispatch({ type: "Remove__all", payload: "" });
    localStorage.removeItem("products");
  }

  useEffect(() => {
    let data = getData();
    data.forEach((el) => {
      total = total + Number(el.price * el.number_of_product);
    });
    setProducts(data);
  }, []);

  return (
    <div className={styles.bg}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h1>CART (3)</h1>
          <button onClick={handleDelete}>Remove all</button>
          <p
            onClick={() => {
              setModal(false);
            }}
            className={styles.exit}
          >
            X
          </p>
        </div>
        {products.map((product, index) => {
          total += Number(product.count * product.price);
          return (
            <div key={index} className={styles.card}>
              <div className={styles.images}>
                <img src={product.image} alt="" />
              </div>

              <div className={styles.name}>
                <h3>{product.title}</h3>
                <h6>$ {product.price}</h6>
              </div>
              <div className={styles.count}>
                <button className={styles.decrement} onClick={decrement}>
                  -
                </button>
                <div ref={selectRef} className={styles.raqam}>
                  {count}
                </div>
                <button className={styles.increment} onClick={increment}>
                  +
                </button>
              </div>
            </div>
          );
        })}
        <div className={styles.total}>
          <h2>TOTAL</h2>
          <p>$ {total}</p>
        </div>
        <button onClick={handleClik} className={styles.button}>
          CHECKOUT
        </button>
      </div>
    </div>
  );
}

export default index;
