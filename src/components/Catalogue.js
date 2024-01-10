import React from "react";
import styles from "../styles/catalogue.module.css";
import CatalogueCard from "./CatalogueCard";
import ellipse from "../assets/ellipse-one.svg";
import { catalogueItems } from "../utils/mockData";

const Catalogue = () => {
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
          <div
            key={item.id}
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <CatalogueCard
              icon={item.icon}
              name={item.name}
              debt={item.debt}
              price={item.price}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Catalogue;
