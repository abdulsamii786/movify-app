import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const MovieContext = createContext();

export const MoviesProvider = ({ children }) => {
  const [products, setProducts] = useState(null);

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=29ee99c7739fc40d0fa19c324ad7de98`
      );
      setProducts(response?.data?.results);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <MovieContext.Provider value={{ products, setProducts }}>
        {children}
      </MovieContext.Provider>
    </div>
  );
};
