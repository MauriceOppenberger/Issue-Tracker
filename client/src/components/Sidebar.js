import React from "react";
import { NavLink } from "react-router-dom";
import SidebarWrapper from "./styles/SidebarWrapper";

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <nav className="sidebar-nav">
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink to="/open-issues" activeClassName="active">
              <div className="btn nav-button">Open Issues</div>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/closed-issues">
              <div className="btn nav-button">Closed Issues</div>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/create-new-issue">
              <div className="btn nav-button">New Issue</div>
            </NavLink>
          </li>
        </ul>
      </nav>
    </SidebarWrapper>
  );
};

export default Sidebar;
