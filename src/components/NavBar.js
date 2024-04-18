import React from "react";
import {NavLink } from "react-router-dom";

function NavBar() {
  return( <div className="navbar">
    <NavLink  style={{margin:10}}
to="/"
>
  Home
    </NavLink>

    <NavLink to="/movies" style={{margin:10}}>
Movies
    </NavLink>

    <NavLink to="/directors" style={{margin:10}}>
  Directors
    </NavLink>

    <NavLink to="/actors" style={{margin:10}}>
    Actors
    </NavLink>
  </div>
  )
}

export default NavBar;
