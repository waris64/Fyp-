import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide_1 from "../assets/slide_1.jpg";

function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    autoplay: false,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "ease-in-out",
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <div className="slide-item relative">
            <div className="image-container">
              <img
                src={slide_1}
                alt=""
                className="object-cover w-full h-5 rounded-lg md:w-[978px] md:h-72 md:m-auto md:pt-5"
              />
            </div>
            <div className="text-overlay absolute inset-0 flex items-center ">
              <div className="md:max-w-[978px] md:mx-auto md:text-justify md:leading-7 ">
                <h1 className="text-white md:text-4xl md:text-center md:pb-5">Citrus Canker</h1>
                <p className="text-white md:w-54 md:px-20 md:text-center">
                  Citrus greening, scientifically known as Huanglongbing (HLB),
                  is a devastating citrus disease that has posed a significant
                  threat to citrus crops worldwide. The disease is caused by the
                  bacterium Candidatus Liberibacter asiaticus and is primarily
                  transmitted by the Asian citrus psyllid, a tiny insect that
                  feeds on citrus trees. Citrus greening has emerged as a major
                  challenge for the citrus industry, affecting the production of
                  oranges, grapefruits, lemons, and other citrus fruits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default SimpleSlider;
