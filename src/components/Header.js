import React from "react";
import { Link } from "react-router-dom";
import HeaderWrapper from "./styles/HeaderWrapper";

const Header = () => {
  return (
    <HeaderWrapper>
      <div className="header-container">
        <div className="logo-container">
          <Link to="/" className="logo-link">
            <h1>Issue Tracker 2.0</h1>
          </Link>
        </div>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
