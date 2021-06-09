import movieTrailer from "movie-trailer";

const handleClick = (movie, trailerUrl, setTrailerUrl) => {
  if (trailerUrl) {
    setTrailerUrl("");
  } else {
    movieTrailer(movie?.name || movie?.title || movie?.original_name || "")
      .then((url) => {
        console.log(url);
        const urlParam = new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParam.get("v"));
      })
      .catch((error) => console.log(error));
  }
};

export default handleClick;
