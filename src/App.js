import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import History from "./components/History";
import Catalogue from "./components/Catalogue";
import TabBar from "./components/TabBar";
import CardDetail from "./components/CardDetail";
import Splash from "./components/Splash";

const App = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowSplash(false);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="app">
      {showSplash ? (
        <Splash />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/history" element={<History />} />
          <Route path="/cardDetail" element={<CardDetail />} />
          <Route path="*" element={<h1>Error Return</h1>} />
        </Routes>
      )}
      {pathname !== "/cardDetail" && !showSplash && <TabBar />}
    </div>
  );
};

export default App;
