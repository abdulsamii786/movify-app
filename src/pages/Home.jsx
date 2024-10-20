import React, { useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import BannerImageSlider from "../components/BannerImageSlider";
import Header from "../components/Header";

const Home = () => {
  const moviesData = useContext(MovieContext);

  return (
    <>
      <Header />
      <BannerImageSlider />
      <div className="flex flex-wrap gap-3 px-[10%]">
        {moviesData?.products?.map((item, key) => {
          const { poster_path, title, release_date } = item;
          return (
            <div key={key} className="w-32 h-auto rounded-md">
              <img
                className="rounded-xl"
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              />
              <div className="p-1">
                <h3 className="text-md font-semibold">{title}</h3>
                <p className="text-[15px] text-gray-500">{release_date}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
