import "./App.css";
import requests from "./utilities/requests";
import Row from "./components/row/row.component";
import Header from "./components/header/header.component";
import Nav from "./components/nav/nav.component";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Row
        fetchUrl={requests.netflixOriginals}
        title="NETFLIX ORIGINALS"
        isLargeRow
      />
      {console.log(requests.netflixOriginals)}
      <Row fetchUrl={requests.trending} title="Trending now" />
      <Row fetchUrl={requests.topRated} title="Top rated" />
      <Row fetchUrl={requests.comedyMovies} title="Comedy" />
      <Row fetchUrl={requests.actionMovies} title="Action" />
      <Row fetchUrl={requests.romanceMovies} title="Romance" />
      <Row fetchUrl={requests.horrorMovies} title="Horror" />
      <Row fetchUrl={requests.documentaries} title="Documentaries" />
    </div>
  );
}

export default App;
