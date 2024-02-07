import React from "react";
import { movies } from "../data";

function Movies() {
  const myMovies=movies.map((movie)=>(
    <div>
      <h1>{movie.title}</h1>
      <h1>{movie.time}</h1>
      {movie.genres.map((myMovie)=>(
        <li>
          {myMovie}
        </li>
      ))}
      </div>
  ))
  return <div>
    <h1>Movies Page</h1>
    {myMovies}
  </div>;
}

export default Movies;
