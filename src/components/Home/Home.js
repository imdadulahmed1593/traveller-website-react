import React, { useState } from "react";
import Header from "../Header/Header";
import "./Home.css";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import HomeCard from "../HomeCard/HomeCard";
import img1 from "../../images/Image/Rectangle1.png";
import img2 from "../../images/Image/Sreemongol.png";
import img3 from "../../images/Image/sundorbon.png";
import img4 from "../../images/Image/Sajek.png";
import { Link } from "react-router-dom";
import Header3 from "../Header3";

function Home() {
  return (
    <div className="home">
      <Header />
      <div className="home__info">
        <div className="home__infoLeft">
          <h1>Cox's Bazar</h1>
          <p>
            Cox's Bazar is a city, fishing port, tourism centre and district
            headquarters in southeastern Bangladesh. It is famous mostly for its
            long natural sandy beach, and it ...
          </p>
          <Link to="/destinations/none">
            <button className="booking__btn">
              Booking <ArrowForwardIcon />
            </button>
          </Link>
        </div>
        <div className="home__infoRight">
          <HomeCard title="Cox’s Bazar" imgUrl={img1} />
          <HomeCard title="Sreemangal" imgUrl={img2} />
          <HomeCard title="Sundarbans" imgUrl={img3} />
        </div>
      </div>
      <div className="home__navigatorIcons">
        <NavigateBeforeIcon />
        <NavigateNextIcon />
      </div>
    </div>
  );
}

export default Home;
