import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide_1 from "../assets/slide_1.jpg";
import Rec19 from "../assets/Rectangle 19.png";
import Rec20 from "../assets/Rectangle 20.png";
import Rec21 from "../assets/Rectangle 21.png";
import Rec14 from "../assets/Rectangle 14.png";


function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "ease-in-out",
  };

  return (
    <div className="slider-container tablet:w-[70%] tablet:m-auto">
      <Slider {...settings} className="">
        <div className="">
          <div className="slide-item relative px-1">
            <div className="image-container">
              <div className="opacity-80 h-52">
              <img
                src={Rec14}
                alt=""
                className="bg-contain w-full size-48 rounded-lg   tablet:w-[70vw]   md:w-[978px] md:h-72 md:m-auto md:pt-5"
              />
            </div>
            <div className="text-overlay absolute inset-0 flex items-center ">
              <div className="md:max-w-[978px] md:mx-auto m-auto tablet:w-60 table:text-center tablet:mt-0  md:text-justify md:leading-7 ">
                <h1 className="text-white font-bold pt-32 text-2xl underline tablet:text-white tablet:underline tablet:pt-9 md:text-3xl md:text-center md:mt-48">Citrus <label htmlFor="color" className="text-orange-500 md:text-orange-500">Canker</label> </h1>
               
              </div>
            </div>

            </div>

          </div>
        </div>
        <div>
          <div className="slide-item relative px-1">
            <div className="image-container">
              <div className="     opacity-80">
              <img
                src={Rec19}
                alt=""
                className="bg-contain w-full size-48 rounded-lg tablet:w-[70vw] md:w-[978px] md:h-72 md:m-auto md:pt-5"
              />
            </div>
            <div className="text-overlay absolute inset-0 flex items-center ">
              <div className="md:max-w-[978px] m-auto md:mx-auto md:text-justify md:leading-7 ">
              <h1 className="text-white  font-bold pt-32 text-2xl underline tablet:pt-2 md:text-3xl md:text-center md:mt-48">Citrus  <label htmlFor="" className="text-orange-500 md:text-orange-500">Greening</label> </h1>
                
              </div>
            </div>

            </div>

          </div>
        </div>
        <div>
          <div className="slide-item relative px-1">
            <div className="image-container">
              <div className="     opacity-80">
              <img
                src={Rec20}
                alt=""
                className="bg-contain w-full size-48 rounded-lg tablet:w-[70vw] md:w-[978px] md:h-72 md:m-auto md:pt-5"
              />
            </div>
            <div className="text-overlay absolute inset-0 flex items-center gap-x-5">
              <div className="md:max-w-[978px] m-auto pt-36 text-2xl underline text-white tablet:underline tablet:pt-0 md:mx-auto md:text-justify md:leading-7 ">
              <h1 className="text-white font-bold md:text-3xl md:text-center md:mt-48">Citrus <label className="text-orange-500 md:text-orange-500">Scab</label> </h1>
                
              </div>
            </div>

            </div>

          </div>
           
        </div>
        <div>
          <div className="slide-item relative px-1">
            <div className="image-container">
              <div className="opacity-80">
              <img
                src={Rec21}
                alt=""
                className="bg-contain w-full h-48 rounded-lg tablet:w-[70vw] md:w-[978px] md:h-72 md:m-auto md:pt-5"
              />
            </div>
            <div className="text-overlay absolute inset-0 flex items-center gap-x-5">
              <div className="md:max-w-[978px] m-auto  md:mx-auto md:text-justify md:leading-7 ">
              <h1 className="text-white font-bold text-2xl underline pt-36 tablet:text-underline tablet:pt-0 md:text-3xl md:text-center md:mt-48">Citrus <label className="text-orange-500 md:text-orange-500">Tristeza</label>  Virus</h1>
                
              </div>
            </div>

            </div>

          </div>
           
        </div>
      </Slider>
    </div>
  );
}

export default SimpleSlider;
