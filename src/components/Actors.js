import React from "react";
import { actors } from "../data";

function Actors() {
  const allActors=actors.map((actor,index)=>(
    <div key={index}>
      <h1>{actor.name}</h1>
      {actor.movies.map((movie,index)=>(
        <ul key={index}> {movie}</ul>
      ))}
    </div>
  ))
  return (<div>
    <h1>Actors Page</h1>
    {allActors}
  </div>);
}

export default Actors;
