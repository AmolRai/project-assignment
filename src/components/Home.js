import styles from "../styles/home.module.css";
import ellipse from "../assets/ellipse-one.svg";
import firstCard from "../assets/card-one.svg";
import secondCard from "../assets/card-two.svg";
import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { useSpring, animated } from "react-spring";

const Home = () => {
  const navigate = useNavigate();

  const cardContainerRef = useRef(null);
  const [direction, setDirection] = useState("left");

  const handleScroll = (direction) => {
    const container = cardContainerRef.current;

    if (container) {
      const cardWidth = container.offsetWidth;

      if (direction === "left") {
        setDirection("left");
        container.scrollBy({
          left: -cardWidth,
          behavior: "smooth",
        });
      } else if (direction === "right") {
        setDirection("right");
        container.scrollBy({
          left: cardWidth,
          behavior: "smooth",
        });
      }
    }
  };

  const props = useSpring({
    transform: "rotate(0deg)",
    from: { transform: "rotate(90deg)" },
  });

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
        <div className={styles.card} ref={cardContainerRef}>
          <div className={styles.cards}>
            <animated.img
              onClick={() => navigate("/cardDetail")}
              style={props}
              src={firstCard}
              alt="First Card"
            />
          </div>
          <div className={styles.cards}>
            <img
              src={secondCard}
              onClick={() => navigate("/cardDetail")}
              alt="Second Card"
            />
          </div>
        </div>
        <div className={styles.lines}>
          <div
            onClick={() => handleScroll("left")}
            style={{
              backgroundColor: direction === "left" ? "white" : "#2D3757",
            }}
          ></div>
          <div
            onClick={() => handleScroll("right")}
            style={{
              backgroundColor: direction === "right" ? "white" : "#2D3757",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
