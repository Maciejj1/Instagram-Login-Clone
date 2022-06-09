import React from "react";
import one from "./1.jpg";
import two from "./2.jpg";
import three from "./3.jpg";
import four from "./4.jpg";
import five from "./5.jpg";
import six from "./6.jpg";
import seven from "./7.jpg";
import "./HomePhotos.scss";
const HomePhotos = () => {
  return (
    <>
      <div className="NavBar">
        <div class="topnav">
          <a class="active" href="/">
            Home
          </a>
          <a href="/login">Logowanie</a>
          <a href="/register">Rejestracja</a>
        </div>
      </div>
      <div className="row">
        <div className="column">
          <img src={one} className="imoge" />
          <img src={two} className="imoge" />
          <img src={three} className="imoge" />
          <img src={four} className="imoge" />
          <img src={five} className="imoge" />
        </div>
        <div className="column">
          <img src={six} className="imoge" />
          <img src={seven} className="imoge" />
          <img src={one} className="imoge" />
          <img src={two} className="imoge" />
          <img src={three} className="imoge" />
        </div>
        <div className="column">
          <img src={four} className="imoge" />
          <img src={five} className="imoge" />
          <img src={six} className="imoge" />
          <img src={seven} className="imoge" />
          <img src={one} className="imoge" />
        </div>
      </div>
    </>
  );
};

export default HomePhotos;
