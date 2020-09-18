import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Datepicker from "../Datepicker";
import Header from "../Header/Header";
import "./Destination.css";

function Destination() {
  const { destination } = useParams();
  return (
    <div className="destination">
      <Header />
      <div className="destination__info">
        <div className="destination__infoLeft">
          <h1>{destination}</h1>

          {destination === "Cox’s Bazar" ? (
            <p>
              {" "}
              Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s
              known for its very long, sandy beachfront, stretching from Sea
              Beach in the north to Kolatoli Beach in the south. Aggameda Khyang
              monastery is home to bronze statues and centuries-old Buddhist
              manuscripts. South of town, the tropical rainforest of Himchari
              National Park has waterfalls and many birds. North, sea turtles
              breed on nearby Sonadia Island.
            </p>
          ) : (
            <p>
              {destination} is a small island (area only 36 km2) in the
              northeastern part of the Bay of Bengal, about 9 km south of the
              tip of the Cox's Bazar-Teknaf peninsula, and forming the
              southernmost part of Bangladesh. There is a small adjoining island
              that is separated at high tide, called Chera Dwip. It is about 8
              kilometres (5 miles) west of the northwest coast of Myanmar, at
              the mouth of the Naf River.
            </p>
          )}
        </div>
        <div className="destination__infoRight">
          <form action="">
            <label htmlFor="">Origin</label>
            <br />
            <input type="text" required />
            <br />
            <label htmlFor="">Destination</label>
            <br />
            <input type="text" required />
            <br />

            <div className="form__calendar">
              <div className="form__calendarLeft">
                <label htmlFor="">From</label>
                <Datepicker />
              </div>
              <div className="form__calendarRight">
                <label htmlFor="">To</label>

                <Datepicker />
              </div>
            </div>
            <Link to="/search">
              <input
                type="submit"
                value="Start Booking"
                className="destination__formButton"
              />
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Destination;
// <label htmlFor="">From</label>

// <input type="text" />
