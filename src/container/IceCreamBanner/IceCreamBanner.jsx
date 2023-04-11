import React from "react";
import "./IceCreamBanner.css";
import images from "../../constants/images";
const IceCreamBanner = () => {
  return (
    <div className="app__icebanner">
      <div className="app__icebanner-overlay">
        <div className="app__icebanner-image">
          <div className="app__icebanner-contents">
            <div className="app__icebanner-content">
              <div className="app__icebanner-content-left">
                <span>The</span>
              </div>
              <div className="app__icebanner-content-right">
                <h2>SUPER SUNDAY</h2>
              </div>
            </div>
            <p className="desc">
              Looking for a delicious and healthy way to quench your thirst?
              Look no further than our juice website! From tangy citrus blends
              to sweet berry smoothies, we've got the perfect drinks to refresh
              and revitalize you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IceCreamBanner;
