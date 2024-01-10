import React from "react";
import styles from "../styles/catalogue.module.css";
import catalogueOne from "../assets/catalogue-one.svg";
import catalogueTwo from "../assets/catalogue-two.svg";
import catalogueThree from "../assets/catalogue-three.svg";
import catalogueFour from "../assets/catalogue-four.svg";
import catalogueFive from "../assets/catalogue-five.svg";
import CatalogueCard from "./CatalogueCard";
import ellipse from "../assets/ellipse-one.svg";

const Catalogue = () => {
  // move this to mock data
  const catalogueItems = [
    {
      icon: catalogueFive,
      name: "Utility payment",
      debt: "The debt is",
      price: "$442.00",
      id: 1,
    },
    {
      icon: catalogueOne,
      name: "Moble",
      debt: "The debt is",
      price: "$34.00",
      id: 2,
    },
    {
      icon: catalogueTwo,
      name: "Internet and TV",
      debt: "The debt is",
      price: "$21.00",
      id: 3,
    },
    {
      icon: catalogueThree,
      name: "Traffic fines",
      debt: "The debt is",
      price: "$1,221.00",
      id: 4,
    },
    {
      icon: catalogueFour,
      name: "Housing services",
      debt: "The debt is",
      price: "$0.00",
      id: 5,
    },
    {
      icon: catalogueFive,
      name: "Utility payment",
      debt: "The debt is",
      price: "$442.00",
      id: 6,
    },
    {
      icon: catalogueOne,
      name: "Moble",
      debt: "The debt is",
      price: "$34.00",
      id: 7,
    },
    {
      icon: catalogueTwo,
      name: "Internet and TV",
      debt: "The debt is",
      price: "$21.00",
      id: 8,
    },
  ];

  return (
    <div className={styles.catalogue}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h1>Catalogue</h1>
        <div style={{ marginRight: "1.5rem" }}>
          <img src={ellipse} />
        </div>
      </div>
      {catalogueItems.map((item) => {
        return (
          <CatalogueCard
            key={item.id}
            icon={item.icon}
            name={item.name}
            debt={item.debt}
            price={item.price}
          />
        );
      })}
    </div>
  );
};

export default Catalogue;
