import React from "react";
import TransactionCard from "./TransactionCard";
import share from "../assets/share.svg";
import music from "../assets/music.svg";
import car from "../assets/car.svg";
import ellipse from "../assets/ellipse-one.svg";
import { useNavigate } from "react-router-dom";

const History = () => {
  const navigate = useNavigate();
  const historyData = [
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
      {historyData.map((data) => {
        return (
          <div onClick={() => navigate("/cardDetail")}>
            <TransactionCard
              icon={data.icon}
              type={data.type}
              name={data.name}
              detail={false}
            />
          </div>
        );
      })}
    </div>
  );
};

export default History;
