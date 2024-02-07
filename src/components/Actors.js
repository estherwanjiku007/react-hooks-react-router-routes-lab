import React from "react";
import { actors } from "../data";

function Actors() {
  const allActors=actors.map((actor)=>(
    <div>
      <h1>{actor.name}</h1>
      {actor.movies.map((movie)=>(
        <ul key={movie}> {movie}</ul>
      ))}
    </div>
  ))
  return <div>
    <h1>Actors page</h1>
    {allActors}
  </div>;
}

export default Actors;
