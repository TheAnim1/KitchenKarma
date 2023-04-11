import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { FooterOverlay, Newsletter } from "../../components";
import "./Footer.css";
import { images } from "../../constants";

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">
          Red Planet City, Mars Colony, <br /> Mars Solar System, Milky Way
          Galaxy
        </p>
        <p className="p__opensans">+123 456 7890</p>
        <p className="p__opensans">+098 765 4321</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.logo} alt="logo" />
        <p className="p__opensans">
          Take a bite of deliciousness with every burger!
        </p>
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Mon - Fri:</p>
        <p className="p__opensans">10:00 Am - 02:00 Am</p>
        <p className="p__opensans">Sat - Sun:</p>
        <p className="p__opensans">10:00 Am - 02:00 Am</p>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">2023 KitchenKarma. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
