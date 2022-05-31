import React, { useState } from "react";
import "./MovieCard.css";

const MovieCard = ({ Poster, Title, imdbID, highlightCard, uniqueID }) => {
  const [displayTitle, setDisplayTitle] = useState(false);

  const showTitle = () => setDisplayTitle(true);

  const hideTitle = () => setDisplayTitle(false);

  return (
    <article
      className={`${imdbID === uniqueID ? "movie-card active" : "movie-card"}`}
      onMouseOver={() => showTitle()}
      onMouseLeave={() => hideTitle()}
      onClick={() => highlightCard(imdbID)}
    >
      <img src={Poster} alt={Title} />

      {displayTitle && (
        <div className="movie-title-wrapper">
          <h3 className="movie-title">{Title}</h3>
        </div>
      )}
    </article>
  );
};

export default MovieCard;
