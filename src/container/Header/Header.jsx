import React from "react";

import "./Header.css";
import images from "../../constants/images";

const Header = () => (
  <div>
    <div className="app__wrapper_info">
      <h2>
        TASTE THE <br />
        DIFFERENCE
      </h2>
    </div>
    <div className="app__wrapper_img">
      <img src={images.heroBurger} alt="" />
    </div>
    <div className="app__wrapper-hero-content">
      <div className="app__wrapper-left-content">
        <h2>THE BEEF BURGER</h2>
        <p>
          SMOKED BRISKET, TENDER RIBS, SMOKED SAUSAGE, BACON & CHEDDAR WITH{" "}
          <br />
          LETTUCE, TOMATO, HOUSE BBQ & RANCH.
        </p>
      </div>
      <div className="app__wrapper-right-content">
        <h2>Sauce</h2>
        <p>Original</p>
      </div>
    </div>
  </div>
);

export default Header;
