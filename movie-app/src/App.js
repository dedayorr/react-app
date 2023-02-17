import { useEffect, useState } from "react";
import "./App.css";
import { Movies } from "./Movies/Movies";
import { BsSearch } from "react-icons/bs";

const API_URL = "http://www.omdbapi.com?apikey=900650bf";

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies([...data.Search]);
  };
  console.log(movies);  


  useEffect(() => {
    searchMovies("");
  }, []);

  return (
    <>
      {movies.length > 0 ? (
        <div className="container">
          <div>
            <h1>MOVIES ARENA</h1>
            <div className="input">
              <input
                placeholder="Search for movies"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <BsSearch
                style={{ color: "black", fontSize: "20px" }}
                onClick={() => searchMovies(search)}
              />
            </div>
          </div>

            {movies.map((movies, i) => {
              return <Movies key={i} movies={movies} />;
            })}
         
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </>
  );
}

export default App;
