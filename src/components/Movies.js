import React from "react";
import { movies } from "../data";
// const allMovies=movies.map((movie,index)=>(
//   <div key={index}>
//     <h1>{movie.title}</h1>
//     <h1>{movie.time}</h1>
//     <ul>
//       {movie.genres.map((myMovie,index)=>(
//         <li key={index}>{myMovie}</li>
//       ))}
//     </ul>
//   </div>
// ))
function Movies() {
  const myMovies=movies.map((movie,index)=>(
    <div key={index}>
      <h1>{movie.title}</h1>
      <h1>{movie.time}</h1>
      {movie.genres.map((amovie,index)=>(
        <li key={index}>{amovie}</li>
      ))}
    </div>
  ))
  return(
    <div>
      <h1>Movies Page</h1>
      {myMovies}    
    </div>
  )












  
}

export default Movies;
