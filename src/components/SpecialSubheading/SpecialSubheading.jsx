import React from "react";

import { images } from "../../constants";
import "./SpecialSubheading.css";
const SpecialSubheading = ({
  headingTitle,
  heading,
  subheading,
  title,
  subtitle,
  paragraph,
}) => (
  <div>
    <div className="specialities__title">
      <p className="p__cormorant specialities__title-heading">{headingTitle}</p>
    </div>
    <div className="specialities__content">
      <h2>{heading}</h2>
      <h2>{subheading}</h2>
      <p className="specialities__content-cursive">{title}</p>
      <p className="specialities_content-subtitle">{subtitle}</p>
      <p className="specialities_content-paragraph">{paragraph}</p>
      <a href="#menu">
        <button className="custom__button">View Menus</button>
      </a>
    </div>
  </div>
);

export default SpecialSubheading;
