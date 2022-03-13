import React from "react";
import iphone from "../../assets/iphone.png";
import { Fade } from "react-slideshow-image";
import slide1 from "../../assets/slide1.png";
import slide2 from "../../assets/slide2.png";
import slide3 from "../../assets/slide3.png";
import iphone2 from "../../assets/iphone2.png";
import "./Phone.scss";
const images = [
  "https://www.instagram.com/static/images/homepage/screenshots/screenshot4.png/a4fd825e3d49.png",
  "https://www.instagram.com/static/images/homepage/screenshots/screenshot2.png/4d62acb667fb.png",
  "https://www.instagram.com/static/images/homepage/screenshots/screenshot3.png/94edb770accf.png",
];
const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  prevArrow: <div style={{ width: "30px", marginRight: "-30px" }}></div>,
  nextArrow: <div style={{ width: "30px", marginLeft: "-30px" }}></div>,
};
const Phonee = () => {
  return (
    <div className="slide-container">
      <Fade {...properties}>
        <div className="each-fade">
          <img src={images[0]} />
        </div>
        <div className="each-fade">
          <img src={images[1]} />
        </div>
        <div className="each-fade">
          <img src={images[2]} />
        </div>
      </Fade>

      <img src={iphone} className="iphone" />
      <img src={iphone2} className="iphone2" />
    </div>
  );
};

export default Phonee;
