import React from "react";
import "./Navbar.css";

import User from "../users/User";

import Logo from "../../assets/Logo.svg";
import Boards from "../../assets/boards.svg";
import pluscircle from "../../assets/plus-circle-outline.svg";
import alertcircle from "../../assets/alert-circle-outline.svg";
import bell from "../../assets/bell-outline.svg";
import user1Path from "../../assets/User.svg";

const Navbar = () => {
  return (
    <>
      <div className="header">
        <div className="right-nav">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="boards">
          <img src={Boards} alt="" />
          Boards
        </div>
        <div className="search">
          <input class="search" type="search" placeholder="" />
        </div>
        </div>
        <div className="left-nav">
          <img src={pluscircle} alt="" />
          <img src={alertcircle} alt=" " />
          <img src={bell} alt=" " />
        <div className="users">
          <User src={user1Path} />
        </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
