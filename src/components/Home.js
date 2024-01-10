import { useState } from "react";
import styles from "../styles/home.module.css";
import ellipse from "../assets/ellipse-one.svg";
import firstCard from "../assets/card-one.svg";
import secondCard from "../assets/card-two.svg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.home}>
      <div>
        <div className={styles.bankDetails}>
          <div className={styles.bankCardTitle}>
            <h1>Bank Cards</h1>
            <h2>Balance</h2>
            <p>$2,748.00</p>
          </div>
          <div style={{ marginRight: "1.5rem" }}>
            <img src={ellipse} />
          </div>
        </div>
        <div className={styles.cards}>
          <img
            src={firstCard}
            onClick={() => navigate("/cardDetail")}
            style={{ marginRight: "1rem", cursor: "pointer" }}
          />
          <img src={secondCard} />
        </div>
      </div>
    </div>
  );
};

export default Home;
