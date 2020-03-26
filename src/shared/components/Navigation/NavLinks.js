import React from "react";
import "./NavLinks.css";
import { NavLink } from "react-router-dom";

const NavLinks = props => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          All Trekkers
        </NavLink>
      </li>
      <li>
        <NavLink to="/u1/destinations">My Destinations</NavLink>
      </li>
      <li>
        <NavLink to="/destinations/new">New Destination</NavLink>
      </li>
      <li>
        <NavLink to="/auth">Authenticate</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
