import React from "react";
import { GihamburgerMenu } from "react-icons/gi";
import { mdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";
import "./Navbar.css";

const Navbar = () => (
  <nav className="app__navbar">
    <div className="app__navbar-logo">
      <img src={images.logo} alt="app logo" />
    </div>
    <ul className="app__navbar-links">
      <li className="p__opensans">
        <a href="#">Home</a>
      </li>
      <li className="p__opensans">
        <a href="#">About</a>
      </li>
      <li className="p__opensans">
        <a href="#">Menu</a>
      </li>
      <li className="p__opensans">
        <a href="#">Awards</a>
      </li>
      <li className="p__opensans">
        <a href="#">Contanct</a>
      </li>
    </ul>
    <div className="app__navbar-login">
      <a href="#login" className="p__opensans">
        Log in / Register
      </a>
      <div />
      <a href="/" className="p__opensans">
        Book table
      </a>
    </div>
  </nav>
);

export default Navbar;
