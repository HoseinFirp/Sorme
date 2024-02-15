import slider1 from "../images/slider1.png";
import slider2 from "../images/slider2.png";
import slider3 from "../images/slider3.png";
import rArrow from "../images/rArrow.png";
import lArrow from "../images/lArrow.png";
import { useState } from "react";

function Slider() {
  // const[slide,setSlide] = useState("1")
  return (
    <div className="overflow-x-auto">
      <div className="carousel w-full h-full mt-36">
      <div className="carousel-items-wrapper flex">
        <div id="slide1" className="carousel-item  relative w-full">
          <img src={slider1} className="w-full mt-5 h-fit ml-auto mr-auto" />
          <div className="absolute hidden sm:flex justify-between transform -translate-y-4 left-0 right-0 top-1/2">
            <a href="#slide3">
              <img src={rArrow} className="w-10" />
            </a>
            <a href="#slide2">
              <img src={lArrow} className="w-10" />
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={slider2} className="w-full mt-5 h-fit ml-auto mr-auto" />
          <div className="absolute hidden sm:flex justify-between transform -translate-y-4 left-0 right-0 top-1/2">
            <a href="#slide1">
              <img src={rArrow} className="w-10" />
            </a>
            <a href="#slide3">
              <img src={lArrow} className="w-10" />
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={slider3} className="w-full mt-5 h-fit ml-auto mr-auto" />
          <div className="absolute hidden sm:flex justify-between transform -translate-y-4 left-0 right-0 top-1/2">
            <a href="#slide2">
              <img src={rArrow} className="w-10" />
            </a>
            <a href="#slide1">
              <img src={lArrow} className="w-10" />
            </a>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
