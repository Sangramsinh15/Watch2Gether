import React from "react";
import "./landing.scss";
import { FRONTEND_DEV_URL } from "../../config/index";

/**
 * Landing body hold the register and Login module
 * helps the user register into the application
 * @returns Landing page with Register / Sign-Up
 */
function LandingBody() {
  return (
    <div className="landingBody">
      <div className="container">
        <div className="glitch" data-text="WATCH2GETHER">
          WATCH2GETHER
        </div>
        <div className="glow">WATCH2GETHER</div>
        <p className="subtitle">MOVIE LOVERS</p>
      </div>
      <div className="container2">
        <a href={`${FRONTEND_DEV_URL}/login`}>
          <button className="button button1">Log In</button>
        </a>
        <a href={`${FRONTEND_DEV_URL}/register`}>
          <button className="button button2">Register</button>
        </a>
      </div>
    </div>
  );
}

/**
 * The view is being exported as LandingBody 
 * so that this view can be imported into other modules.
 */
export default LandingBody;
