import React from "react";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Routes from "../routes/Routes.jsx";
import "./layout.css";

const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <Routes />
      <Footer />
    </div>
  );
};

export default Layout;
