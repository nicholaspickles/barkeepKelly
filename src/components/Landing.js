import React from "react";
import { LandingTitleDiv, GeneralLanding } from "../styles";

import NavBar from "./NavBar";

const LandingScreen = () => {
  return (
    <div>
      <NavBar />
      <GeneralLanding>
        <LandingTitleDiv>Barkeep</LandingTitleDiv>
      </GeneralLanding>
    </div>
  );
};

export default LandingScreen;
