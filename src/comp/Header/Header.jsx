import React,{useState} from "react";
import { Link, useHistory} from 'react-router-dom';

function Header() {

  const history = useHistory();
  const [searchTerm,setSearchTerm] = useState("");

  function getSearchTerm(event){
    setSearchTerm(event.target.value);
    console.log(searchTerm);
  }

  function getSearchResults(){
    if(searchTerm.length > 0){
      history.push("/search/"+`${searchTerm}`);
    }else{
      alert("Search box empty!");
    }
  }

  return (

    <nav className="navbar navbar-expand-sm navbar-light top container-fluid">
      <button className="navbar-toggler" type="" data-toggle="collapse"
        data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01"
        aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <a className="nav-link top-color n" href ="/"><h6 className="n">Home <span className="sr-only">(current)</span></h6>
            </a>
          </li>

          <li className="nav-item">
            <nav >
              <a className="nav-link top-color n" href ="/Mompreneur" ><h6 className="n">Mompreneur</h6>
              </a>
            </nav>
          </li>

          <li className="nav-item" >
            <nav>
              <a className="nav-link top-color n" href ="/addStory"><h6 className="n">Submit a story</h6>
              </a>
            </nav>
          </li>

          <li className="nav-item">
            <nav >
              <a className="nav-link top-color n" href ="/guestposts" ><h6 className="n">Guest Posts</h6>
              </a>
            </nav>
          </li>

          <li className="nav-item" >
            <nav>
              <a className="nav-link top-color n" href ="/exploreCategories" ><h6 className="n">Categories</h6>
              </a>
            </nav>
          </li>

          <li className="nav-item" >
            <nav>
              <a className="nav-link top-color n" href ="/about"><h6 className="n">About</h6>
              </a>
            </nav>
          </li>

        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input onChange={getSearchTerm}  className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button onClick={getSearchResults}
            className="btn btn-primary my-2 my-sm-0"
            type="submit">Search</button>
        </form>
      </div>
    </nav>
  );
}

export default Header;
