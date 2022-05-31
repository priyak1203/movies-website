import React, { useEffect, useState } from "react";
import MovieCard from "../MovieCard/MovieCard";

import "./MovieGrid.css";

const url = "https://www.omdbapi.com/?apikey=45f0782a&s=war";

const MovieGrid = () => {
  const [moviesList, setMoviesList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [uniqueID, setUniqueID] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    const response = await fetch(`${url}`);
    const data = await response.json();
    setMoviesList(data.Search);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const highlightCard = (id) => {
    if (id === uniqueID) {
      setUniqueID("");
    } else {
      setUniqueID(id);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    const searchString = e.target.value;
    setSearchValue(searchString);

    if (searchString.length > 0) {
      const text = searchString.toLowerCase();
      const list = moviesList.filter((item) =>
        item.Title.toLowerCase().includes(text)
      );
      if (list.length > 0) {
        setSearchResult(list);
      } else {
        setSearchResult([]);
      }
    }
  };

  return (
    <section>
      <div className="search-wrapper">
        <input
          placeholder="Search"
          type="text"
          value={searchValue}
          onChange={(e) => handleChange(e)}
        />
        <i className="bx bx-search"></i>
      </div>
      <div className="movie-grid">
        {loading ? (
          <h2>Loading....</h2>
        ) : moviesList.length &&
          searchValue.length > 0 &&
          searchResult.length > 0 ? (
          searchResult.map((item) => {
            return (
              <MovieCard
                key={item.imdbID}
                {...item}
                highlightCard={highlightCard}
                uniqueID={uniqueID}
              />
            );
          })
        ) : moviesList.length &&
          searchValue.length > 0 &&
          searchResult.length === 0 ? (
          <h2>No Match Found. Please Search again.</h2>
        ) : (
          moviesList.map((item) => {
            return (
              <MovieCard
                key={item.imdbID}
                {...item}
                highlightCard={highlightCard}
                uniqueID={uniqueID}
              />
            );
          })
        )}
      </div>
    </section>
  );
};

export default MovieGrid;
