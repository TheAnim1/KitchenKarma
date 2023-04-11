import React from "react";
import SubHeading from "../SubHeading/SubHeading";
import "./Newsletter.css";

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="NEWSLETTER" classname="footerHeadin__title" />
      <h1 className="headtext__cormorant">SUBSCRIBE TO OUR NEWSLETTER</h1>
      <p className="p__opensans">AND NEVER MISS OFFERS</p>
    </div>
    <div className="app__newsletter-input flex__center">
      <input type="email" placeholder="ENTER YOUR EMAIL ADRESS" />
      <button className="custom__button">Subscribe</button>
    </div>
  </div>
);

export default Newsletter;
