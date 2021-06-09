import React, { useState, useEffect } from "react";
import "./row.styles.scss";
import axios from "../../utilities/axios";
import YouTube from "react-youtube";

import handleClick from "../../utilities/handle-click";
import opts from "../../utilities/opts";

const Row = ({ fetchUrl, title, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    };
    fetchData();
  }, [fetchUrl]);

  // const opts = {
  //   height: "390",
  //   width: "100%",
  //   playerVars: {
  //     // https://developers.google.com/youtube/player_parameters
  //     autoplay: 1,
  //   },
  // };

  // const handleClick = (movie) => {
  //   if (trailerUrl) {
  //     setTrailerUrl("");
  //   } else {
  //     movieTrailer(movie?.name || movie?.title || movie?.original_name || "")
  //       .then((url) => {
  //         console.log(url);
  //         const urlParam = new URLSearchParams(new URL(url).search);
  //         setTrailerUrl(urlParam.get("v"));
  //       })
  //       .catch((error) => console.log(error));
  //   }
  // };

  const baseUrl = "http://image.tmdb.org/t/p/w342";
  

  return (
    <div className="row">
      <h1 className="poster__title">{title}</h1>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            className={`poster__image ${isLargeRow && "poster__imageLarge"}`}
            onClick={() => handleClick(movie, trailerUrl, setTrailerUrl)}
            key={movie.id}
            src={`${baseUrl}${
              isLargeRow ? movie?.poster_path : movie?.backdrop_path
            }`}
            alt={movie?.name || movie?.title}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Row;

//888676
//0779550542
