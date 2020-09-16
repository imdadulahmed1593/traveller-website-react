import React from "react";
import { Link } from "react-router-dom";
import "./HomeCard.css";
function HomeCard({ title, imgUrl }) {
  return (
    <Link to={`/destinations/${title}`}>
      <div style={{ backgroundImage: `url(${imgUrl})` }} className="homecard">
        <h2>{title}</h2>
      </div>
    </Link>
  );
}

export default HomeCard;
