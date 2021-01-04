import React from "react";
import { LandingTitleDiv, GeneralLanding } from "../styles";
import Fudge_Landing from "../localImages/Fudge_Landing.jpeg";

import NavBar from "./NavBar";

const LandingScreen = () => {
  return (
    <div>
      <NavBar />
      <GeneralLanding>
        <LandingTitleDiv>Barkeep</LandingTitleDiv>
        <img src={Fudge_Landing} alt="Girl in a jacket" />
      </GeneralLanding>
    </div>
  );
};

export default LandingScreen;
