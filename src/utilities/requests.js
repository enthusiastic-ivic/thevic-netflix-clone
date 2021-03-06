const API_KEY = "3ec2d0d41bbb00bcedeaf91c9948b7b5";

const requests = {
  topRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  trending: `/trending/all/week?api_key=${API_KEY}&with_networks=213`,
  netflixOriginals: `/discover/tv?api_key=${API_KEY}&language=en-US`,
  comedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  actionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  horrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  documentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  romanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
};

export default requests;
