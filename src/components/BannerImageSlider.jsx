import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { sliderData } from "../utils/constants/sliderData";

const BannerImageSlider = () => {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: false,
    arrows: false,
  };
  return (
    <div className="slider-container relative ">
      <Slider {...settings}>
        {sliderData.map((item, key) => {
          return (
            <div key={key} className="w-full px-[7%]">
              <img
                className="object-cover h-[350px] w-full brightness-50"
                src={item.img}
              />
            </div>
          );
        })}
      </Slider>
      <div className="absolute  text-white font-bold px-[10%] top-1/2 -translate-y-1/2">
        <h2 className="text-7xl">Welcome.</h2>
        <h3 className="text-5xl">
          Millions of movies, TV shows and people to discover. Explore now.
        </h3>
        <div className="relative mt-4">
          <input
            className=" w-full rounded-full p-3 focus:outline-none  text-black px-[15px]" 
            type="text"
            placeholder="Search for a movie, tv show, person"
          />
          <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-cyan-200 to-cyan-900 py-[10px] rounded-full px-10 text-xl">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default BannerImageSlider;
