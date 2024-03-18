import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import styles from "./index.module.css";

function Register() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const usernameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const repasswordRef = useRef("");

  function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  function validate() {
    if (!usernameRef.current.value.trim().length) {
      alert("Username kiritilishi shart !!!");
      usernameRef.current.focus();
      usernameRef.current.value = "";
      return false;
    }
    if (!emailRef.current.value.trim().length) {
      alert("Email kiritilishi shart !!!");
      emailRef.current.focus();
      emailRef.current.value = "";
      return false;
    }

    const email = emailRef.current.value;
    if (!validateEmail(email)) {
      alert("Emailning to'g'ri formatda kiritilishi shart!!!");
      emailRef.current.focus();
      emailRef.current.value = "";
      return false;
    }
    if (!passwordRef.current.value.trim().length) {
      alert("Password kiritilishi shart !!!");
      passwordRef.current.focus();
      passwordRef.current.value = "";
      return false;
    }
    if (!repasswordRef.current.value.trim().length) {
      alert("Passwordni takrorlash kiritilishi shart !!!");
      repasswordRef.current.focus();
      repasswordRef.current.value = "";
      return false;
    }
    if (passwordRef.current.value !== repasswordRef.current.value) {
      alert("Parollar bir biriga mos kelmayapti!!");
      passwordRef.current.focus();
      repasswordRef.current.value = "";
      return false;
    }
    return true;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const isValid = validate();

    if (isValid) {
      setIsLoading(true);
      let data = {
        username: usernameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
      };

      fetch("https://auth-rg69.onrender.com/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          navigate("/login");
        })
        .catch((error) => {
          console.error("Ma'lumotlarni olishda xatolik yuz berdi:", error);
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
          <h3>Register</h3>
          <div className="form__wrap" onSubmit={handleSubmit}>
            <input
              ref={usernameRef}
              type="text"
              placeholder="Username"
              className={styles.input}
            />
            <input
              ref={emailRef}
              type="email"
              placeholder="Email"
              className={styles.input}
            />
            <input
              ref={passwordRef}
              type="password"
              placeholder="Password"
              className={styles.input}
            />
            <input
              ref={repasswordRef}
              type="password"
              placeholder="Confirm Password"
              className={styles.input}
            />
            <button
              className={styles.button}
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Register"}
            </button>
            <p className={styles.p}>
              Already have an account?{" "}
              <Link className={styles.a} to="/login">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
