import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import styles from "./index.module.css";

function Checkout() {
  const [show, setShow] = useState(false);
  let total = 0;
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  function getData() {
    let data = [];
    if (localStorage.getItem("products")) {
      data = JSON.parse(localStorage.getItem("products"));
    }
    return data;
  }

  useEffect(() => {
    let data = getData();
    data.forEach((el) => {
      total = total + Number(el.price * el.number_of_product);
    });
    setProducts(data);
  }, []);

  function openModal(e) {
    e.stopPropagation();
    setShow(!show);
  }

  useEffect(() => {
    if (show) {
      document.addEventListener("click", handleCloseModal);
    } else {
      document.removeEventListener("click", handleCloseModal);
    }
  }, [show]);

  const handleCloseModal = (event) => {
    if (!event.target.classList.contains(styles.modal)) {
      setShow(false);
    }
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div
        style={show ? { backgroundColor: "black", opacity: "0.2" } : {}}
        className={styles.checkout__wrapper}
      >
        <button onClick={goBack} className={styles.Back}>
          Go Back
        </button>
        <div className={styles.form__wrapper}>
          <form className={styles.form}>
            <h2>CHECKOUT</h2>
            <div className={styles.build}>
              <p>Payment Details</p>
              <div className={styles.DETAILS}>
                <label>
                  <p>Name</p>
                  <input type="text" placeholder="Alexei Ward" />
                </label>
                <label>
                  <p>Email</p>
                  <input type="email" placeholder="alexei@mail.com" />
                </label>
              </div>
              <label>
                <p>Phone Number</p>
                <input type="text" placeholder="+1 202-555-0136" />
              </label>
            </div>
            <div className={styles.shipping}>
              <p>Shipping Information</p>
              <label>
                <p>Address</p>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="1137 Williams Avenue"
                />
              </label>
              <div className={styles.code__city}>
                <label>
                  <p>ZIP Code</p>
                  <input type="number" name="" id="" placeholder="10001" />
                </label>
                <label>
                  <p>City</p>
                  <input type="text" name="" id="" placeholder="New York" />
                </label>
              </div>
              <label className={styles.country}>
                <p>Country</p>
                <input type="text" name="" id="" placeholder="United States" />
              </label>
            </div>
            <div className={styles.payments}>
              <p>Payment Information</p>
              <div className={styles.method}>
                <p>Payment Method</p>
                <div className={styles.select}>
                  <div className={styles.money}>
                    <input type="radio" name="cost" id="" />
                    <h3>e-money</h3>
                  </div>
                  <div className={styles.card}>
                    <input type="radio" name="cost" id="" />
                    <h3>Cash Payment</h3>
                  </div>
                </div>
              </div>
              <div className={styles.payment__order}>
                <label>
                  <p>e-money Number</p>
                  <input type="text" name="" id="" placeholder="238521993" />
                </label>
                <label>
                  <p>e-money PIN-code</p>
                  <input type="text" name="" id="" placeholder="6891" />
                </label>
              </div>
            </div>
          </form>

          <div className={styles.details}>
            <h2>SUMMARY</h2>
            <div className={styles.cards__summary}>
              {products.map((product, index) => {
                total += Number(product.count * product.price);

                return (
                  <div key={index} className={styles.card}>
                    <div className={styles.img__cost}>
                      <div className={styles.card__img}>
                        <img src={product.image} alt={product.name} />
                      </div>
                      <div className={styles.info}>
                        <h3>{product.title}</h3>
                        <p>{product.price}</p>
                      </div>
                    </div>
                    <div className={styles.num}>
                      <span>{`x${product.count}`}</span>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className={styles.info1}>
              <div className={styles.price}>
                <h4>TOTAL</h4>
                <span>{total}</span>
              </div>
              <div className={styles.price}>
                <h4>SHIPPING</h4>
                <span>$ 50</span>
              </div>
              <div className={styles.price}>
                <h4>TOTAL ADDITIONAL (ADDED)</h4>
                <span>$ 1,079</span>
              </div>
              <div className={styles.garond__total}>
                <h4>TOTAL SUM</h4>
                <span>$ {(total += 50)}</span>
              </div>
            </div>
            <button onClick={(e) => openModal(e)}>CONTINUE & PAY</button>
          </div>
        </div>
      </div>
      {show && (
        <div className={styles.modal}>
          <h2>THANK YOU FOR YOUR PURCHASE</h2>
          <p>Please confirm your email shortly.</p>
          <div className={styles.modal__info}>
            <div className={styles.card__info}>
              {products.map((product, index) => (
                <div key={index} className={styles.card__modal}>
                  <div className={styles.card__img}>
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div className={styles.modal__text__card}>
                    <h5>{product.name}</h5>
                    <h4>{product.price}</h4>
                  </div>
                  <span>X{product.count}</span>
                </div>
              ))}
              <p>and 2 more product(s)</p>
            </div>
            <div className={styles.black__info}>
              <p>TOTAL SUM</p>
              <h3>{total}</h3>
            </div>
          </div>
          <Link style={{ textDecoration: "none" }} to="/home">
            <button>RETURN TO HOMEPAGE</button>
          </Link>
        </div>
      )}
    </>
  );
}

export default Checkout;
