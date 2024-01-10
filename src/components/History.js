import React from "react";
import TransactionCard from "./TransactionCard";
import ellipse from "../assets/ellipse-one.svg";
import { useNavigate } from "react-router-dom";
import { data } from "../utils/mockData";

const History = () => {
  const navigate = useNavigate();

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
      {data.map((data) => {
        return (
          <div key={data.id} onClick={() => navigate("/cardDetail")}>
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
