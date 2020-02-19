import React from "react";
import { Link } from "react-router-dom";
import HeaderWrapper from "./styles/HeaderWrapper";
import AuthContext from "../context/auth";

const Header = () => {
  console.log("header");
  return (
    <AuthContext.Consumer>
      {context => (
        <HeaderWrapper>
          <div className="header-container">
            <div className="logo-container">
              <Link to="/" className="logo-link">
                <h1>Issue Tracker 2.0</h1>
              </Link>
            </div>
            <div className="primary-nav">
              {context.isAuth ? (
                <ul className="primary-nav-list">
                  <li
                    onClick={() => context.updateIsAuth(false)}
                    className="primary-nav-item"
                  >
                    <Link to="/">Log Out</Link>
                  </li>
                </ul>
              ) : (
                <ul className="primary-nav-list">
                  <li className="primary-nav-item">
                    <Link to="/login">Sign In</Link>
                  </li>
                  <li className="primary-nav-item">
                    <Link to="/signup">Sign Up</Link>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </HeaderWrapper>
      )}
    </AuthContext.Consumer>
  );
};

export default Header;
