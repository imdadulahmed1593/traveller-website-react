import React, { useContext } from "react";
import "./Header3.css";
import logo from "../images/Logo.png";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import { userContext } from "../App";
function Header3() {
  const [user, setUser] = useContext(userContext);
  return (
    <div className="header3">
      <div className="header3__left">
        <Link to="/">
          <img className="header3__logo" src={logo} alt="" />
        </Link>
        <div className="header3__searchInput">
          <input type="text" placeholder="Search your Destination..."></input>
        </div>
      </div>
      <div className="header3__right">
        <Link to="/">
          <button className="header3__button">Home</button>
        </Link>
        <button className="header3__button">Destination</button>
        <button className="header3__button">Blog</button>
        <button className="header3__button">Contact</button>

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
      <div className="header__down">
        <ul>
          <li>Home</li>
          <li>Destination</li>
          <li>Blog</li>
          <li>Contact</li>
          <li>Login</li>
        </ul>
      </div>
    </div>
  );
}

export default Header3;
// header3__button--login
