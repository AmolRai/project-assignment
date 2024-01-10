import styles from "../styles/tabBar.module.css";
import home from "../assets/Home.svg";
import history from "../assets/History.svg";
import menu from "../assets/Menu.svg";
import scan from "../assets/Scan.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const TabBar = () => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const images = [home, scan, history, menu];

  const handleClick = (ind) => {
    if (images[ind] == scan) {
      navigate("/catalogue");
    } else if (images[ind] == history) {
      navigate("/history");
    } else if (images[ind] === home) {
      navigate("/");
    }
  };

  return (
    <div className={styles.tabBar}>
      {images.map((icon, ind) => {
        return (
          <div
            key={ind}
            alt={icon}
            className={ind === index ? styles.customBackground : ""}
            onClick={() => {
              setIndex(ind);
              handleClick(ind);
            }}
          >
            {<img src={icon} />}
          </div>
        );
      })}
    </div>
  );
};
export default TabBar;
