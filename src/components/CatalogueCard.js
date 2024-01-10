import React from "react";

const CatalogueCard = ({ icon, name, debt, price }) => {
  return (
    <div
      className="calalogueCard"
      style={{ display: "flex", flexDirection: "column", width: "100vw" }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "1rem",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "7px",
          }}
        >
          <img src={icon} />
          <div>
            <p className="customText" style={{ fontSize: "14px" }}>
              {name}
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
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
        <button
          style={{
            color: "#7295FB",
            lineHeight: "26px",
            marginRight: "2rem",
            border: "0.5px solid #7295FB",
            background: "none",
            padding: "4px 18px",
            borderRadius: "8px",
            fontSize: "16px",
          }}
        >
          Pay
        </button>
      </div>
      <div className="line"></div>
    </div>
  );
};

export default CatalogueCard;
