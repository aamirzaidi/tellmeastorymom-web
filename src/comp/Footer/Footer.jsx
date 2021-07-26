import { Link } from 'react-router-dom';
import React from "react";


function Footer(){

  return(

    <footer className=" footer p font-small special-color-dark">
      <div className="container-fluid">
      
        <ul className="list-unstyled list-inline text-center">
          <li className="list-inline-item footer-padding">          
          <Link className ="nav-link top-color n" to="/about">About
            </Link>     
          </li>
          <li className="list-inline-item footer-padding">
          <Link className ="nav-link top-color n" to="/terms-and-conditions">Terms and Conditons
            </Link>
          </li>
          <li className="list-inline-item footer-padding">
          <Link className ="nav-link top-color n" to="/privacyPolicy">Privacy Policy
            </Link>
          </li>
          <li className="list-inline-item footer-padding">
          <Link className ="nav-link top-color n" to="/developers">Developers
            </Link>
          </li>
          <li className="list-inline-item footer-padding">
          <a href="mailto:tellmeastorymom28@gmail.com">Contact Us</a>
          </li>
          
          <li className="list-inline-item footer-padding">
          <a href="https://www.facebook.com/tellmeastorymom/" className="fa fa-facebook"></a>
          <a href="https://twitter.com/tellmeastorymom" className="fa fa-twitter"></a>
          </li>
          
        </ul>
    
      </div>
</footer>
  )
}

export default Footer;

