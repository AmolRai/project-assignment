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
import { useSpring, animated } from "react-spring";

const CardDetail = () => {
  const [cardClick, setCardClick] = useState(true);

  const props = useSpring({
    transform: "rotate(0deg)",
    from: { transform: "rotate(90deg)" },
  });

  const cardDetailData = [
    {
      icon: share,
      type: "Card to Card",
      name: "Maria",
    },
    {
      icon: music,
      type: "Apply Music",
      name: "Online",
    },
    {
      icon: car,
      type: "Uber",
      name: "Service",
    },
    {
      icon: share,
      type: "Card to Card",
      name: "Maria",
    },
    {
      icon: music,
      type: "Apply Music",
      name: "Online",
    },
    {
      icon: car,
      type: "Uber",
      name: "Service",
    },
  ];

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
            {/* <img
              onClick={() => setCardClick(false)}
              className={styles.card}
              src={card}
            /> */}
            <animated.img
              style={props}
              className={styles.card}
              src={card}
              onClick={() => setCardClick(false)}
              alt="Back Credit Card Image"
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
        {cardDetailData.map((data) => {
          return (
            <div>
              <TransactionCard
                icon={data.icon}
                type={data.type}
                name={data.name}
                detail={true}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardDetail;
