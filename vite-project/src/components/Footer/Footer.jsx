import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            We aim to provide the best food and services and with friendly
            enviroment to catch up the best memories for you
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
            <h2>Get in touch</h2>
            <ul>
                <li>+12-4584762486</li>
                <li>contact@pirate.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright @ All rights Reversed
      </p>
    </div>
  );
}

export default Footer;
