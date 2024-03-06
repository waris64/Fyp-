import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide_1 from '../assets/slide_1.jpg';
function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <h3>
            <img src={slide_1} alt="" className="size-48 bg-cover w-full " style={{ marginRight: "20px" }}/>
          </h3>
        </div>
        <div>
          <h3>
            <img src={slide_1} alt="" className="size-48 bg-cover w-full"/>
          </h3>
        </div>
        <div>
          <h3>
            <img src={slide_1} alt="" className="size-48 bg-cover w-full"/>
          </h3>
        </div>
        <div>
          <h3>
            <img src={slide_1} alt="" className="size-48     bg-cover w-full"/>
          </h3>
        </div>
        
      </Slider>
    </div>
  );
}

export default SimpleSlider;
