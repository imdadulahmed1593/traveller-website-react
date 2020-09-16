import React from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../Header/Header";
import "./Destination.css";
function Destination() {
  return (
    <div className="destination">
      <Header />
      <div className="destination__info">
        <div className="destination__infoLeft">
          <h1>Cox's Bazar</h1>
          <p>
            Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s
            known for its very long, sandy beachfront, stretching from Sea Beach
            in the north to Kolatoli Beach in the south. Aggameda Khyang
            monastery is home to bronze statues and centuries-old Buddhist
            manuscripts. South of town, the tropical rainforest of Himchari
            National Park has waterfalls and many birds. North, sea turtles
            breed on nearby Sonadia Island.
          </p>
        </div>
        <div className="destination__infoRight">
          <form action="">
            <label htmlFor="">Origin</label>
            <br />
            <input type="text" />
            <br />
            <label htmlFor="">Destination</label>
            <br />
            <input type="text" />
            <br />
            <div className="form__calendar">
              <div className="form__calendarLeft">
                <label htmlFor="">From</label>

                <input type="text" />
              </div>
              <div className="form__calendarRight">
                <label htmlFor="">To</label>

                <input type="text" />
              </div>
            </div>
            <Link to="/search">
              <button className="destination__formButton">Start Booking</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Destination;
