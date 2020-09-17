import React, { useContext } from "react";
import Header2 from "../Header/Header2";
import SearchResult from "../SearchResult/SearchResult";
import "./Search.css";
import img1 from "../../images/Image/Rectangle 26.png";
import img2 from "../../images/Image/Rectangle 27.png";
import img3 from "../../images/Image/Rectangle 28.png";
import { userContext } from "../../App";

function Search() {
  const [user, setUser] = useContext(userContext);
  return (
    <div className="search">
      <Header2 />
      <div className="search__info">
        <hr />
        <p>252 stays Apr 13-17 3 guests</p>
        <h2>Stay in {user.destination}</h2>
        <div className="search__results">
          <div className="search__resultsInfo">
            <SearchResult image={img1} />
            <SearchResult image={img2} />
            <SearchResult image={img3} />
          </div>
          <div className="search__resultsImg">
            <div class="mapouter">
              <div class="gmap_canvas">
                <iframe
                  style={{ width: "100%", height: "100%" }}
                  title="map"
                  width="433"
                  height="508"
                  id="gmap_canvas"
                  src={`https://maps.google.com/maps?q=${user.destination}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                ></iframe>
                <a href="https://www.whatismyip-address.com/nordvpn-coupon/">
                  nordvpn discount
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
