import { useState } from "react";
import styles from "../styles/transaction.module.css";

const TransactionCard = ({ icon, type, name }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div
      className={styles.transaction}
      onClick={() => {
        setShowInfo(!showInfo);
      }}
    >
      <div className={styles.transactionCard}>
        <div className={styles.transactionDetails}>
          <img src={icon} />
          <div>
            <p className={styles.transactionType}>{type}</p>
            <span>{name}</span>
            {showInfo && (
              <div className={styles.transaction}>
                <span>xxxxxxxxxxx4586</span>
                <span>21/09/2023 10:12 A.M.</span>
              </div>
            )}
          </div>
        </div>
        <div className={styles.transactionType}>
          <h3 style={{ marginRight: "2rem", marginBottom: "1rem" }}>
            + $143.00
          </h3>
        </div>
      </div>
      <div className={styles.line}></div>
    </div>
  );
};

export default TransactionCard;
