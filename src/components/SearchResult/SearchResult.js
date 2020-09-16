import React from "react";
import "./SearchResult.css";

function SearchResult({ image, id, title, description, rating, price }) {
  return (
    <div className="searchResult">
      <img src={image} alt="" />

      <div className="searchResult__info">
        <h2>Light bright airy stylish apt & safe peaceful stay</h2>
        <p>4 guests 2 bedrooms 2 beds 2 baths</p>
        <p>Wifi Air conditioning Kitchen</p>
        <p>Cancellation fexibility availiable</p>
        <div className="searchResult__infoPrice">
          <p>⭐4.9 (20)</p>
          <p>$34/night</p>
          <p>$167 total</p>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
