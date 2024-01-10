import splash from "../assets/splash-img.svg";
import styles from "../styles/splash.module.css";

const Splash = () => {
  return (
    <div className={styles.splash}>
      <img src={splash} />
    </div>
  );
};

export default Splash;
