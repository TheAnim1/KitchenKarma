import React from "react";

import {
  AboutUs,
  Chef,
  FindUs,
  Footer,
  Gallery,
  Header,
  Intro,
  Laurels,
  SpecialMenu,
  SignatureItems,
} from "./container";
import { Navbar } from "./components";
import "./App.css";
import Specialities from "./container/Specialities/Specialities";
import IceCreamBanner from "./container/IceCreamBanner/IceCreamBanner";

const App = () => (
  <div>
    <div className="app__header app__wrapper">
      <div className="app_header-hero-overlay">
        <Navbar />
        <Header />
      </div>
    </div>
    <AboutUs />
    <SignatureItems />
    <SpecialMenu />
    <Chef />
    <Intro />
    <Specialities />
    <Gallery />
    <IceCreamBanner />
    <FindUs />
    <Footer />
  </div>
);

export default App;
