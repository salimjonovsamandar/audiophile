import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import styles from "./index.module.css";

function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const usernameRef = useRef("");
  const passwordRef = useRef("");

  function validate() {
    if (!usernameRef.current.value.trim().length) {
      alert("username kiritilishi shart !!!");
      usernameRef.current.focus();
      usernameRef.current.value = "";
      return false;
    }
    if (!passwordRef.current.value.trim().length) {
      alert("password kiritilishi shart !!!");
      passwordRef.current.focus();
      passwordRef.current.value = "";
      return false;
    }
    return true;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const isValid = validate();

    if (isValid) {
      let data = {
        username: `${usernameRef.current.value}`,
        email: "",
        password: `${passwordRef.current.value}`,
      };
      fetch(`${"https://auth-rg69.onrender.com/api/auth/signin"}`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          localStorage.setItem("token", data.accessToken);
          localStorage.setItem("user", JSON.stringify(data));
          navigate("/home");
        })
        .catch((error) => {
          alert("Bunday foydalanuvchi mavjud emas");
        });
    }
  }

  return (
    <div className={styles.bgcontainer}>
      <div className={styles.containerLogin}>
        <div className={styles.registerLogo}>
          <img src={Logo} alt="Logo icon" />
        </div>
        <div className={styles.formWrapper}>
          <h3>Login</h3>
          <div className="form__wrap">
            <input
              className={styles.input}
              ref={usernameRef}
              type="text"
              placeholder="Username"
            />
            <input
              className={styles.input}
              ref={passwordRef}
              type="password"
              placeholder="Password"
            />
            <button
              className={styles.button}
              onClick={handleSubmit}
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Login to your account"}
            </button>
            <p className={styles.p}>
              Already have an account?{" "}
              <Link className={styles.a} to="/register">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
