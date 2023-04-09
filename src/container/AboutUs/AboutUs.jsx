import React from "react";
import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant headtext-border">About Us</h1>
        <img
          src={images.hamburgerleft}
          alt="hamburger_about"
          className="about-icon__img"
        />
        <p className="p__opensans">
          We're passionate about burgers made with high-quality ingredients, and
          dedicated to providing the best burger experience in town.
        </p>
        <button type="button" className="custom__button">
          More?
        </button>
      </div>

      <div className="app__aboutus-content_burger flex__center">
        <img src={images.aboutburger} alt="about_hamburger" />
      </div>
      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant headtext-border">Our History</h1>
        <img
          src={images.hamburgerright}
          alt="hamburger_about"
          className="about-icon__img"
        />
        <p className="p__opensans">
          Founded in 2015, kitchenkarma has been serving up delicious,
          mouth-watering burgers for 8 years. From our humble beginnings, we've
          grown to become a beloved fixture in dhaka.
        </p>
        <button type="button" className="custom__button">
          More?
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
