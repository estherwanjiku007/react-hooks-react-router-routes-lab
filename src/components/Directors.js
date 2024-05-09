import React from "react";
import { directors } from "../data";

function Directors(){
  const allDirectors=directors.map((director,index)=>(
    <div key={index}>
      <h1>{director.name}</h1>
      {director.movies.map((movie,index)=>(
        <li key={index}>{movie}</li>
      ))}
    </div>    
  ))  
  return (
    
    <div>
      <h1>Directors Page</h1>
      {allDirectors}
    </div>   
       
  )  
}
export default Directors;
