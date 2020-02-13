import React from "react";

import SidebarWrapper from "./styles/SidebarWrapper";

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <nav className="sidebar-nav">
        <ul className="nav-list">
          <li className="nav-item">
            <button className="btn nav-button">Open Issues</button>
          </li>
          <li className="nav-item">
            <button className="btn nav-button">Closed Issues</button>
          </li>
          <li className="nav-item">
            <button className="btn nav-button">New Issue</button>
          </li>
        </ul>
      </nav>
    </SidebarWrapper>
  );
};

export default Sidebar;
