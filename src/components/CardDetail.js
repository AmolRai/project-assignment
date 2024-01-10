import { useState } from "react";
import TransactionCard from "../components/TransactionCard";
import styles from "../styles/cardDetail.module.css";
import arrow from "../assets/arrow.svg";
import card from "../assets/card-three.svg";
import shareOne from "../assets/share-one.svg";
import shareTwo from "../assets/share-two.svg";
import share from "../assets/share.svg";
import music from "../assets/music.svg";
import car from "../assets/car.svg";
import backSideCard from "../assets/backSideCard.svg";

const CardDetail = () => {
  const [cardClick, setCardClick] = useState(true);

  return (
    <div className={styles.cardDetail}>
      <div>
        <img
          style={{ marginLeft: "1.5rem" }}
          className={styles.arrow}
          src={arrow}
          onClick={() => window.history.back()}
        />
        <h1 style={{ marginLeft: "1.5rem" }}>Salary Card</h1>
        {cardClick && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              onClick={() => setCardClick(false)}
              className={styles.card}
              src={card}
            />
          </div>
        )}
        {!cardClick && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              onClick={() => setCardClick(true)}
              className={styles.card}
              src={backSideCard}
            />
          </div>
        )}
        <div className={styles.share}>
          <div style={{ marginLeft: "1.5rem" }}>
            <h2>Balance</h2>
            <p>$2,748.00</p>
          </div>
          <div style={{ display: "flex", marginRight: "1.5rem", gap: "10px" }}>
            <div className={styles.imgBg}>
              <img src={shareTwo} />
            </div>
            <div className={styles.imgBg}>
              <img src={shareOne} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.transactions}>
        <div
          style={{
            backgroundColor: "#2D3757",
            width: "45px",
            height: "4px",
            margin: "auto",
            marginTop: "1rem",
            borderRadius: "1rem",
          }}
        ></div>
        <h3 style={{ paddingTop: "2rem" }}>Today</h3>
        <TransactionCard icon={share} type="Card to card" name="Maria" />
        <TransactionCard icon={music} type="Apple Music" name="Online" />
        <TransactionCard icon={car} type="Uber" name="Service" />
        <TransactionCard icon={share} type="Card to card" name="Maria" />
        <TransactionCard icon={music} type="Apple Music" name="Online" />
        <TransactionCard icon={car} type="Uber" name="Service" />
      </div>
    </div>
  );
};

export default CardDetail;
