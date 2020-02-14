import React from "react";
import { Link } from "react-router-dom";
import HeaderWrapper from "./styles/HeaderWrapper";

const Header = () => {
  return (
    <HeaderWrapper>
      <div className="header-container">
        <Link to="/">
          <h1>Issue Tracker 2.0</h1>
        </Link>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
