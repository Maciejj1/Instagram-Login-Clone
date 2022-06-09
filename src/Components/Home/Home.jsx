import React from "react";
import { Link } from "react-router-dom";
import HomePhotos from "../HomePhotos/HomePhotos";
const Home = () => {
  return (
    <div>
      <div className="navbar" />
      <div className="photos">
        <HomePhotos />
      </div>
    </div>
  );
};

export default Home;
