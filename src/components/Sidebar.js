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
              <button className="btn nav-button">Open Issues</button>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/closed-issues">
              <button className="btn nav-button">Closed Issues</button>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/create-new-issue">
              <button className="btn nav-button">New Issue</button>
            </NavLink>
          </li>
        </ul>
      </nav>
    </SidebarWrapper>
  );
};

export default Sidebar;
