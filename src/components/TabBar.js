import styles from "../styles/tabBar.module.css";
import home from "../assets/Home.svg";
import homeOne from "../assets/home-one.svg";
import scanOne from "../assets/scan-one.svg";
import historyOne from "../assets/history-one.svg";
import menuOne from "../assets/menu-one.svg";
import history from "../assets/History.svg";
import menu from "../assets/Menu.svg";
import scan from "../assets/Scan.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const TabBar = () => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const images = [home, scan, history, menu];
  const icons = [homeOne, scanOne, historyOne, menuOne];

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
            {ind === index ? <img src={icons[ind]} /> : <img src={icon} />}
          </div>
        );
      })}
    </div>
  );
};
export default TabBar;
