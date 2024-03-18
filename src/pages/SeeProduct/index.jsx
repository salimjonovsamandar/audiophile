import React from "react";
import styles from "./index.module.css";
import Cards from "../../components/Cards";
import Audio from "../../components/Audio";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SeeProduct() {
  const [count, setCount] = useState(1);
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const { page } = useParams();
  const { id } = useParams();
  const [gallery, setGallery] = useState({});
  const [includes, setInclude] = useState([]);
  const [others, setOthers] = useState([]);
  const selectRef = useRef(0);
  const dispatch = useDispatch();

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    fetch(`http://localhost:3004/${page}/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setInclude(data.includes);
        setGallery(data.gallery);
        setOthers(data.others);
        setData(data);
      });
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [id]);

  function getData() {
    let data = [];
    if (localStorage.getItem("products")) {
      data = JSON.parse(localStorage.getItem("products"));
    }
    return data;
  }

  useEffect(() => {
    selectRef.current = count;
  }, [count]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const audio = {
      id,
      count: selectRef.current,
      price: Number(data.price),
      title: data.name,
      image: data.image,
    };
    console.log(audio);

    let product = getData();

    if (product.length) {
      let exsist = product.find((el) => {
        return el.id == audio.id;
      });
      if (exsist) {
        let copied = JSON.parse(JSON.stringify(product));
        copied.map((el) => {
          if (el.id == audio.id) {
            el.count = Number(el.count) + Number(audio.count);
          }
          return el;
        });
        localStorage.setItem("products", JSON.stringify(copied));
        dispatch({ type: "Add_cards", payload: audio.count });
      } else {
        product.push(audio);
        localStorage.setItem("products", JSON.stringify(product));
        dispatch({ type: "Add_cards", payload: audio.count });
      }
    } else {
      product.push(audio);
      localStorage.setItem("products", JSON.stringify(product));
      dispatch({ type: "Add_cards", payload: audio.count });
    }
    toast.success("Mahsulot savatchaga qo'shildi");
    setTimeout(() => {}, 2000);
  };

  let price = Number(data.price);
  const formattedNumber = price.toLocaleString("en-US");

  return (
    <div className={styles.content__wrapper}>
      <button onClick={goBack} className={styles.Back}>
        Go Back
      </button>
      <div className={styles.container}>
        <>
          <div className={styles.products}>
            <div className={styles.images}>
              <img className={styles.imgtop} src={data.image} alt="" />
            </div>
            <div className={styles.text}>
              <h5>NEW PRODUCT</h5>
              <h2>{data.name}</h2>
              <p>{data.description}</p>
              <h3>{formattedNumber}</h3>
              <div onSubmit={handleSubmit} className={styles.counter}>
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
                <div onClick={handleSubmit} className={styles.button}>
                  <button type="submit">ADD TO CART</button>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.description}>
            <div className={styles.features}>
              <h3>FEATURES</h3>
              <p>{data.features}</p>
            </div>
            <div className={styles.box}>
              <h3>IN THE BOX</h3>
              {includes.map((el, index) => {
                return (
                  <p key={index}>
                    {el.quantity}X <span>{el.item}</span>
                  </p>
                );
              })}
            </div>
          </div>

          <div className={styles.groupImages}>
            <div className={styles.leftImg}>
              <div className={styles.top}>
                <img src={gallery.first} alt="" />
              </div>
              <div className={styles.bottom}>
                <img src={gallery.second} alt="" />
              </div>
            </div>
            <div className={styles.rightImg}>
              <img src={gallery.third} alt="" />
            </div>
          </div>

          <div className={styles.card__product}>
            <h3>YOU MAY ALSO LIKE</h3>
            <div className={styles.card__wrapper}>
              {others.map((el, index) => {
                return (
                  <div key={index} className={styles.card}>
                    <div className={styles.img}>
                      <img src={el.image} alt="" />
                    </div>
                    <h4>{el.name}</h4>
                    <button
                      onClick={() => {
                        navigate(`/pages/ALL/${el.id}`);
                      }}
                      className={styles.but}
                    >
                      See Product
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      </div>
      <Cards></Cards>
      <Audio></Audio>
      <ToastContainer />
    </div>
  );
}

export default SeeProduct;
