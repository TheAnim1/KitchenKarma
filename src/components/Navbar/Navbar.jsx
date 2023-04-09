import React, { useState } from "react";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";
import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
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
      <div className="app__navbar-smallscreen">
        <div
          className="app__navbar-burgermobile"
          onClick={() => setToggleMenu(true)}
        >
          <img src={images.burgermobile} alt="" />
        </div>
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center  slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close "
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen-links">
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
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
