import React from "react";
import { Link } from "react-router-dom";
import SidebarWrapper from "./styles/SidebarWrapper";

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <nav className="sidebar-nav">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/open-issues">
              <button className="btn nav-button">Open Issues</button>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/closed-issues">
              <button className="btn nav-button">Closed Issues</button>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/create-new-issue">
              <button className="btn nav-button">New Issue</button>
            </Link>
          </li>
        </ul>
      </nav>
    </SidebarWrapper>
  );
};

export default Sidebar;
