import React from "react";
import "./Header2.css";
import logo from "../../images/Logo.png";
import SearchIcon from "@material-ui/icons/Search";
function Header2() {
  return (
    <div className="header2">
      <div className="header2__left">
        <img src={logo} alt="" />
        <div className="header2__searchInput">
          <input type="text" placeholder="Search your Destination..."></input>
        </div>
      </div>
      <div className="header2__right">
        <button className="header2__button">News</button>
        <button className="header2__button">Destination</button>
        <button className="header2__button">Blog</button>
        <button className="header2__button">Contact</button>
        <button className="header2__button--login">Login</button>
      </div>
    </div>
  );
}

export default Header2;
