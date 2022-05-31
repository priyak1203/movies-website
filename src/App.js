import React from "react";
import MovieGrid from "./components/MovieGrid/MovieGrid";

function App() {
  return (
    <div>
      <header>
        <div className="line">
          <h3 className="heading">Movies</h3>
        </div>
      </header>
      <main>
        <MovieGrid />
      </main>
    </div>
  );
}

export default App;
