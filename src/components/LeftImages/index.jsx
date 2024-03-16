import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./index.module.css";

function HeroCard({
  nav,
  image,
  cardHeadertitle,
  cardHerotitle,
  description,
  Button,
}) {
  const navigate = useNavigate();
  function hendalClick(e) {
    navigate(`${e}`);
  }

  return (
    <div className="headphones-hero">
      <div className="img-section">
        <img src={image} alt="hero image" />
      </div>
      <div className="tex-section">
        <p>{cardHeadertitle}</p>
        <h2>{cardHerotitle}</h2>
        <h3>{description}</h3>
        <button
          onClick={() => {
            hendalClick(nav);
          }}
        >
          {Button}
        </button>
      </div>
    </div>
  );
}

export default HeroCard;
