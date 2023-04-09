import React from "react";
import "./Specialities.css";
import { images } from "../../constants";
import SubHeading from "../../components/SubHeading/SubHeading";
import SpecialSubheading from "../../components/SpecialSubheading/SpecialSubheading";
const Specialities = () => (
  <>
    <div className="wrapper">
      <div className="left">
        <img src={images.patty} alt="" />
      </div>
      <div className="right">
        <div className="center_item">
          <SpecialSubheading
            headingTitle="PRESENTS"
            heading="TOMATO"
            subheading="ORIGINAL"
            title="Sauce"
            subtitle="OUR SIGNATURE HANDMADE BEEF PATTY"
            paragraph="Satisfy your craving for juicy, savory goodness with our handcrafted beef patty burgers."
          />
        </div>
      </div>
    </div>

    <div className="wrapper">
      <div className="right">
        <div className="center_item">
          <SpecialSubheading
            headingTitle="ALWAYS"
            heading="FRESH"
            subheading="FRUITS"
            title="JUICE"
            subtitle="OUR HOMEMADE FRESH BEEF PATTY"
            paragraph="Revitalize your day with our fresh, flavorful juices bursting with nutrients and energy."
          />
        </div>
      </div>
      <div className="left">
        <img src={images.juice} alt="" />
      </div>
    </div>
  </>
);

export default Specialities;
