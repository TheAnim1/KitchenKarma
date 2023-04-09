import React from "react";

import { images } from "../../constants";
import "./SubHeading.css";
const SubHeading = ({ title, classname }) => (
  <div>
    <div className={classname}>
      <p className="p__cormorant">{title}</p>
    </div>
  </div>
);

export default SubHeading;
