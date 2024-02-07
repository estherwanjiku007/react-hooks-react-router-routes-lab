import React from "react";
import { directors } from "../data";

function Directors() {
  const allDirectors=directors.map((allDirector)=>(
    <div>
      <h1>
        {allDirector.name}
      </h1>
      {allDirector.movies.map((movie)=>(
        <div>
          <h1>Directors page</h1>
          <li key={movie}>{movie}</li>
        </div>
      ))}
    </div>
  ))
  return <div>
    {allDirectors}
  </div>;
}

export default Directors;
