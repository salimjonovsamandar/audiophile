import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MainLayout({ children }) {
  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <div className="content">{children}</div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default MainLayout;
