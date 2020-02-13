import React from "react";
import LayoutWrapper from "./styles/layout";
const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <main className="main">
        <div className="header">
          <h1>Header</h1>
        </div>
        <div className="page-body">
          <div className="sitebar">
            <h2>SiteBar</h2>
          </div>
          <div> {children}</div>
        </div>
      </main>
    </LayoutWrapper>
  );
};

export default Layout;
