import React, { useState, useEffect } from "react";
import "./header.styles.scss";
import axios from "../../utilities/axios";
import requests from "../../utilities/requests";

const Header = () => {
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(requests.netflixOriginals);
      const netflixOriginalMovies = request.data.results;
      const randomMovie =
        netflixOriginalMovies[
          Math.floor(Math.random() * request.data.results.length - 1)
        ];
      setMovie(randomMovie);
      return request;
    };
    fetchData();
  }, []);

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };
  console.log(movie);
  return (
    <header
      className="header"
      style={{
        backgroundImage: `url('http://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
        backgroundPosition: "center top",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="header__contents">
        <h2 className="header__title">
          {movie?.name || movie?.original_name || movie?.title}
        </h2>
        <div className="header__buttons">
          <button className="header__button">Play</button>
          <button className="header__button">My List</button>
        </div>
        <div className="header__overview">
          {truncateString(movie?.overview, 200)}
        </div>
      </div>
      <div className="header__fadeBottom"></div>
    </header>
  );
};

export default Header;
