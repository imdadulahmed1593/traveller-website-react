import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../../App";
import "./HomeCard.css";
function HomeCard({ title, imgUrl }) {
  const [user, setUser] = useContext(userContext);

  return (
    <Link to={`/destinations/${title}`}>
      <div
        onClick={() => setUser({ ...user, destination: title })}
        style={{ backgroundImage: `url(${imgUrl})` }}
        className="homecard"
      >
        <h2>{title}</h2>
      </div>
    </Link>
  );
}

export default HomeCard;
