import React from "react";
import { Link, Route } from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg top">
      <button className="navbar-toggler" type="button" data-toggle="collapse" 
      data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" 
      aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <h1 className="navbar-brand top-color">Tellmeastorymom</h1>
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">

          <li className="nav-item active">
            <Link className ="nav-link top-color n" to="/">Home 
            </Link><span className="sr-only">(current)</span>
          </li>

          <li className="nav-item">
            <nav >
            <Link className ="nav-link top-color n" to="/Mompreneur">Mompreneur 
            </Link><span className="sr-only">(current)</span>
            </nav>
           
          </li>
          <li className="nav-item" >
            <nav>
            <Link className ="nav-link top-color n" to="/addStory">Submit a Story 
            </Link><span className="sr-only">(current)</span>
            </nav>
          </li>

        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-primary my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>

  );
}

export default Header;
