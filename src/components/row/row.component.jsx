import React, { useState, useEffect } from "react";
import "./row.styles.scss";
import axios from "../../utilities/axios";

const Row = ({ fetchUrl, title, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    };
    fetchData();
  }, [fetchUrl]);

  const baseUrl = "http://image.tmdb.org/t/p/w342";
  return (
    <div className="row">
      <h1 className="poster__title">{title}</h1>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            className={`poster__image ${isLargeRow && "poster__imageLarge"}`}
            key={movie.id}
            src={`${baseUrl}${
              isLargeRow ? movie?.poster_path : movie?.backdrop_path
            }`}
            alt={movie?.name || movie?.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Row;

//888676
//0779550542
