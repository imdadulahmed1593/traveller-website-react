import React from "react";
import Header from "../Header/Header";
import "./Home.css";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import HomeCard from "../HomeCard/HomeCard";
import img1 from "../../images/Image/Rectangle1.png";
import img2 from "../../images/Image/Sreemongol.png";
import img3 from "../../images/Image/sundorbon.png";

import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <Header />
      <div className="home__info">
        <div className="home__infoLeft">
          <h1>Travel Guru</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
            laudantium, provident architecto repudiandae assumenda neque non
            sed, vitae minima atque possimus sapiente corporis sint. Quidem ab,
            explicabo sapiente dolorum cum perspiciatis, labore dolore
            voluptates eius nobis ratione, at sint praesentium....
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
