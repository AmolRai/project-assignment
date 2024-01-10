import styles from "../styles/catalogueCard.module.css";

const CatalogueCard = ({ icon, name, debt, price }) => {
  return (
    <div className={styles.calalogueCard}>
      <div className={styles.cal} style={{ marginTop: "1rem" }}>
        <div
          className={styles.cal}
          style={{
            gap: "7px",
          }}
        >
          <img src={icon} />
          <div>
            <p className="customText" style={{ fontSize: "14px" }}>
              {name}
            </p>
            <div
              className={styles.cal}
              style={{
                gap: "5px",
              }}
            >
              <p
                className="customText"
                style={{ color: "#94A3D3", fontSize: "14px" }}
              >
                {debt}
              </p>
              <p
                className="customText"
                style={{
                  color: "#94A3D3",
                  fontWeight: "bold",
                  fontSize: "14px",
                }}
              >
                {price}
              </p>
            </div>
          </div>
        </div>
        <button className={styles.customPay}>Pay</button>
      </div>
      <div className="line"></div>
    </div>
  );
};

export default CatalogueCard;
