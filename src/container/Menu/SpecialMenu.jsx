import React from "react";

import "./SpecialMenu.css";
import SubHeading from "../../components/SubHeading/SubHeading";
import { data, images } from "../../constants";
import { MenuItem } from "../../components";

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="OUR MENUS" classname="subheading__title" />
      <h1 className="headtext__cormorant">HAVE IT YOUR WAY</h1>
    </div>
    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_burger flex__center">
        <p className="app__specialMenu-menu_heading">Burgers</p>
        <div className="app__specialMenu-menu_items">
          {data.burgers.map((burger, index) => (
            <MenuItem
              key={burger.title + index}
              title={burger.title}
              price={burger.price}
              tags={burger.tags}
            />
          ))}
        </div>
      </div>
      <div className="app__specialMenu-menu_img">
        <img src={images.burgerDiagram} alt="" />
      </div>
      <div className="app__specialMenu-menu_juices flex__center">
        <p className="app__specialMenu-menu_heading">Juices</p>
        <div className="app__specialMenu-menu_items">
          {data.juices.map((juice, index) => (
            <MenuItem
              key={juice.title + index}
              title={juice.title}
              price={juice.price}
              tags={juice.tags}
            />
          ))}
        </div>
      </div>
    </div>
    <div style={{ marginTop: "15px" }}>
      <button type="button" className="custom__button">
        View More
      </button>
    </div>
  </div>
);

export default SpecialMenu;
