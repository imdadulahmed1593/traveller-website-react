import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Datepicker from "../Datepicker";
import Header from "../Header/Header";
import "./Destination.css";

function Destination() {
  const { destination } = useParams();
  let destinationDetails = "";
  if (destination === "Cox’s Bazar") {
    destinationDetails =
      "Cox's Bazar is a town on the southeast coast of Bangladesh. It's known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.";
  } else if (destination === "Sreemangal") {
    destinationDetails =
      "Madhobpur Lake is one of the main tourist attractions in the area,and is home to the Great White-Bellied Heron, the only confirmed site in Bangladesh. The Baikka beel is also a nearby body of water and home to the Large-billed reed warbler. Sreemangal has been nicknamed the tea capital of Bangladesh, due to the number of tea gardens in the area, and is the place of origin of the Seven Color Tea. The Bangladesh Tea Research Institute in Sreemangal has made a number of contributions in evolving and standardising the quality of tea, and introducing its research findings to the tea industry of Bangladesh. Pineapples from the Sreemangal area are known for their flavour and natural sweetness.In 2010, the Hum Hum waterfall was discovered and has attracted visitors from all over Bangladesh to Razkandi forest.";
  } else if (destination === "Sundarbans") {
    destinationDetails =
      "The Sundarbans is a mangrove area in the delta formed by the confluence of the Ganges, Brahmaputra and Meghna Rivers in the Bay of Bengal. It spans from the Hooghly River in India's state of West Bengal to the Baleswar River in Bangladesh. It comprises closed and open mangrove forests, agriculturally used land, mudflats and barren land, and is intersected by multiple tidal streams and channels. Four protected areas in the Sundarbans are enlisted as UNESCO World Heritage Sites, viz. Sundarbans National Park, Sundarbans West, Sundarbans South and Sundarbans East Wildlife Sanctuaries. Despite these protections, the Indian Sundarbans were considered endangered in a 2020 assessment under the IUCN Red List of Ecosystems framework.";
  } else {
    destinationDetails =
      "Please select a destination from the home page to go further.";
  }
  return (
    <div className="destination">
      <Header />
      <div className="destination__info">
        <div className="destination__infoLeft">
          <h1>{destination}</h1>
          <p>{destinationDetails}</p>
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

// {destination === "Cox’s Bazar" ? (
//   <p>
//     {" "}
//     Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s
//     known for its very long, sandy beachfront, stretching from Sea
//     Beach in the north to Kolatoli Beach in the south. Aggameda Khyang
//     monastery is home to bronze statues and centuries-old Buddhist
//     manuscripts. South of town, the tropical rainforest of Himchari
//     National Park has waterfalls and many birds. North, sea turtles
//     breed on nearby Sonadia Island.
//   </p>
// ) : (
//   <p>
//     {destination} is a small island (area only 36 km2) in the
//     northeastern part of the Bay of Bengal, about 9 km south of the
//     tip of the Cox's Bazar-Teknaf peninsula, and forming the
//     southernmost part of Bangladesh. There is a small adjoining island
//     that is separated at high tide, called Chera Dwip. It is about 8
//     kilometres (5 miles) west of the northwest coast of Myanmar, at
//     the mouth of the Naf River.
//   </p>
// )}
