import React from "react";
import TransactionCard from "./TransactionCard";
import share from "../assets/share.svg";
import music from "../assets/music.svg";
import car from "../assets/car.svg";
import ellipse from "../assets/ellipse-one.svg";

const History = () => {
  return (
    <div style={{ color: "white", marginTop: "3rem" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h1 style={{ marginLeft: "1.5rem" }}>History</h1>
        <div style={{ marginRight: "1.5rem" }}>
          <img src={ellipse} />
        </div>
      </div>
      <h3 style={{ paddingTop: "2rem", marginLeft: "1.5rem" }}>20 April</h3>
      <TransactionCard icon={share} type="Card to card" name="Maria" />
      <TransactionCard icon={music} type="Apple Music" name="Online" />
      <TransactionCard icon={car} type="Uber" name="Service" />
      <TransactionCard icon={share} type="Card to card" name="Maria" />
      <TransactionCard icon={music} type="Apple Music" name="Online" />
      <TransactionCard icon={car} type="Uber" name="Service" />
    </div>
  );
};

export default History;
