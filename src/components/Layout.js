import React from "react";
import LayoutWrapper from "./styles/LayoutWrapper";
import Sidebar from "./Sidebar";
const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <main className="main">
        <div className="header">
          <h1>Header</h1>
        </div>
        <div className="page-body">
          <div className="sidebar">
            <Sidebar />
          </div>
          <div> {children}</div>
        </div>
      </main>
    </LayoutWrapper>
  );
};

export default Layout;
