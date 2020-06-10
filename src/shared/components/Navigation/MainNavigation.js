import React, { useState } from "react";
import { Link } from "react-router-dom";

import MainHeader from "./MainHeader";
import SideDrawer from "./SideDrawer";
import NavLinks from "./NavLinks";
import "./MainNavigation.css";
import Backdrop from "../UIElements/Backdrop";

const MainNavigation = (props) => {
  const [drawerIsOpen, setdrawerIsOpen] = useState(false);

  const openDrawer = () => {
    setdrawerIsOpen(true);
  };

  const closeDrawer = () => {
    setdrawerIsOpen(false);
  };

  return (
    <React.Fragment>
      {drawerIsOpen ? <Backdrop onClick={closeDrawer} /> : null}
      {drawerIsOpen ? (
        <SideDrawer>
          <nav className="main-navigation__drawer-nav">
            <NavLinks />
          </nav>
        </SideDrawer>
      ) : null}

      <MainHeader>
        <button className="main-navigation__menu-btn" onClick={openDrawer}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">St@r Trekkers</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;
