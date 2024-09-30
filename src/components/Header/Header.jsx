import React, { useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import Font from "react-font";
import "./Header.css";

function Header(props) {
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  let homeButtonClass;
  if (props.notHome) {
    homeButtonClass = "home-button visible";
  } else {
    homeButtonClass = "home-button invisible";
  }
  return (
    <div className="header-outer">
      <div className="home-outer">
        <div className="img-outer">
          <Link to="/GrierWedding">
            <span className={homeButtonClass}></span>
          </Link>
        </div>
      </div>
      <div className="title-outer">
        <Font family="Great Vibes">
          <h1>The Grier Wedding</h1>
        </Font>
        <div className="date-outer">
          <Font family="Great Vibes">
            <span>7-15-2023</span>
          </Font>
          {/* <br/> */}
          <Font family="Great Vibes">
            <span>Edmonds, WA</span>
          </Font>
        </div>
      </div>
    </div>
  );
}

export default Header;
