import React from "react";
import "./SearchResult.css";

function SearchResult({ image, id, title, description, rating, price }) {
  return (
    <div className="searchResult">
      <img src={image} alt="" />

      <div className="searchResult__info">
        <h2>{title}</h2>
        <p>{description}</p>
        <p>Wifi Air conditioning Kitchen</p>
        <p>Cancellation fexibility availiable</p>
        <div className="searchResult__infoPrice">
          <p>⭐{rating}</p>
          <p>{price}</p>
          <p>$167 total</p>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
