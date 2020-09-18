import React, { useContext } from "react";
import "./Header.css";
import logo from "../../images/Logo.png";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import { userContext } from "../../App";
function Header() {
  const [user, setUser] = useContext(userContext);
  return (
    <div className="header">
      <div className="header__left">
        <Link to="/">
          <img className="header__logo" src={logo} alt="" />
        </Link>
        <div className="header__searchInput">
          <input type="text" placeholder="Search your Destination..."></input>
        </div>
      </div>
      <div className="header__right">
        <Link to="/">
          <button className="header__button">Home</button>
        </Link>
        <button className="header__button">Destination</button>
        <button className="header__button">Blog</button>
        <button className="header__button">Contact</button>

        {user.email ? (
          <p style={{ fontWeight: "bold", color: "#f9a51a" }}>
            {user.fName || user.name || user.email}
          </p>
        ) : (
          <Link to="/login">
            <button className="btn btn-success">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;
// header__button--login
