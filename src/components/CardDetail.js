import { useEffect, useState } from "react";
import TransactionCard from "../components/TransactionCard";
import styles from "../styles/cardDetail.module.css";
import arrow from "../assets/arrow.svg";
import card from "../assets/card-three.svg";
import shareOne from "../assets/share-one.svg";
import shareTwo from "../assets/share-two.svg";
import backSideCard from "../assets/backSideCard.svg";
import { useSpring, animated } from "react-spring";
import { data } from "../utils/mockData";
import { useNavigate } from "react-router-dom";

const CardDetail = () => {
  const [cardClick, setCardClick] = useState(true);
  const navigate = useNavigate();
  const [rotated, setRotated] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setRotated(true);
    }, 0);

    return () => clearTimeout(timeout);
  }, [rotated]);

  const props = useSpring({
    transform: "rotate(180deg)",
    from: { transform: "rotate(-0deg)" },
  });

  return (
    <div className={styles.cardDetail}>
      <div>
        <img
          style={{ marginLeft: "1.5rem" }}
          className={styles.arrow}
          src={arrow}
          onClick={() => navigate("/")}
        />
        <h1 style={{ marginLeft: "1.5rem" }}>Salary Card</h1>
        {cardClick && (
          <div className={styles.cal} style={{ transform: "rotate(270deg)" }}>
            <animated.img
              // style={props}
              style={{
                transform: rotated ? "rotate(90deg)" : "",
                transition: "transform 1s ease",
              }}
              className={styles.card}
              src={card}
              onClick={() => {
                setCardClick(false);
              }}
              alt="Back Credit Card Image"
            />
          </div>
        )}
        {!cardClick && (
          <div className={styles.cal}>
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
        <div className={styles.tool}></div>
        <h3 style={{ paddingTop: "2rem" }}>Today</h3>
        {data.map((data) => {
          return (
            <div key={data.id}>
              <TransactionCard
                icon={data.icon}
                type={data.type}
                name={data.name}
                price={data.price}
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
