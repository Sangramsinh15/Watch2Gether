import React from "react";
import LandingBody from "./landingBody";

/**
 *Function Landing returns the landing page to be rendered
 * @returns
 */
function Landing() {
  return (
    <div>
      <LandingBody />
    </div>
  );
}

/**
 * The view is being exported as Landing 
 * so that this view can be imported into other modules.
 */
export default Landing;
