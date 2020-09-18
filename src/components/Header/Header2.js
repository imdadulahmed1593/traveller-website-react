import React, { useContext } from "react";
import "./Header2.css";
import logo from "../../images/Logo.png";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import { userContext } from "../../App";
function Header2() {
  const [user, setUser] = useContext(userContext);
  return (
    <div className="header2">
      <div className="header2__left">
        <Link to="/">
          <img className="header2__logo" src={logo} alt="" />
        </Link>
        <div className="header2__searchInput">
          <input type="text" placeholder="Search your Destination..."></input>
        </div>
      </div>
      <div className="header2__right">
        <button className="header2__button">News</button>
        <button className="header2__button">Destination</button>
        <button className="header2__button">Blog</button>
        <button className="header2__button">Contact</button>
        {user.email ? (
          <p
            style={{ margin: "auto 0px", fontWeight: "bold", color: "#f9a51a" }}
          >
            {user.fName || user.name || user.email}
          </p>
        ) : (
          <Link to="/login">
            <button className="header2__button--login">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header2;
