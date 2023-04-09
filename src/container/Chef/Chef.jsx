import React from "react";

import "./Chef.css";
import { images } from "../../constants";
import SubHeading from "../../components/SubHeading/SubHeading";

const Chef = () => (
  <div className="app__bg section__padding">
    <div className="app__specialMenu-title">
      <SubHeading title="CHEF" classname="chefheading__title" />
      <h1 className="headtext__cormorant">WHAT WE BELIEVE IN</h1>
    </div>
    <div className="chef__wrapper">
      <div className="chef__wrapper_img chef__wrapper_img-reverse">
        <img src={images.chef} alt="" />
      </div>
      <div className="chef__content">
        <div className="chef__content-quote">
          <img src={images.quote} alt="" />
          <p className="p__opensans">
            Our burgers are not just a meal, they are an experience. Get ready
            to take your taste buds on a journey with every bite.
          </p>
        </div>
        <p className="p__opensans">
          Juicy, flavorful, and cooked to perfection - our burgers are a
          delicious adventure waiting to be savored. Bite into one and taste the
          difference that quality ingredients and expert grilling can make.
        </p>
        <div className="chef__sign">
          <p>Kevin Lou</p>
          <p className="p__opensans">Chef & Founder</p>
          <img src={images.sign} alt="" />
        </div>
      </div>
    </div>
  </div>
);

export default Chef;
