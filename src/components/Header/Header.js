import React from "react";
import "./Header.css";
import logo from "../../images/Logo.png";
import SearchIcon from "@material-ui/icons/Search";
function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img src={logo} alt="" />
        <div className="header__searchInput">
          <input type="text" placeholder="Search your Destination..."></input>
        </div>
      </div>
      <div className="header__right">
        <button className="header__button">News</button>
        <button className="header__button">Destination</button>
        <button className="header__button">Blog</button>
        <button className="header__button">Contact</button>
        <button className="header__button--login">Login</button>
      </div>
    </div>
  );
}

export default Header;
