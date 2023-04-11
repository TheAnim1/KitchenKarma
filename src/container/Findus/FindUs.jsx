import React from "react";
import { images } from "../../constants";
import "./FindUs.css";
import SubHeading from "../../components/SubHeading/SubHeading";
const FindUs = () => (
  <div className=" app__wrapper-findus section__padding" id="findus">
    <div className="app__wrapper_info">
      <div className="app__specialMenu-title">
        <SubHeading title="CONTACT" classname="subheading__title" />
        <h1 className="headtext__cormorant">FIND US</h1>
        <div className="app__wrapper-content">
          <p className="p__opensans">
            Red Planet City, Mars Colony, Mars Solar System, Milky Way Galaxy
          </p>
          <p
            className="p__cormorant"
            style={{ color: "#DC9457", margin: "2rem 0" }}
          >
            OPENING HOURS
          </p>
          <p className="p__opensans">Mon - Fri: 10:00 am - 02:00 am</p>
          <p className="p__opensans">Sat - Sun: 10:00 am - 03:00 am</p>
        </div>
        <button className="custom__button" style={{ marginTop: "2rem" }}>
          GET DIRECTIONS
        </button>
      </div>
    </div>
    <div className="findus_img">
      <img src={images.findus} alt="findus" />
    </div>
  </div>
);

export default FindUs;
