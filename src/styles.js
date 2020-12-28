import styled from "styled-components";

// Green #203d35

// Pink #f6dfec

export const NavBarStyle = styled.div`
  background-color: #203d35;
  position: fixed;
  z-index: 1;
  width: 100%;
  transition: top 0.3s;
`;

export const NavBarLink = styled.span`
  display: inline block;
  color: #f6dfec;
  text-align: center;
  margin-top: 15vh;
  padding: 15px;
  font-size: 120%;
  text-decoration: none;

  &:hover {
    background-color: #f6dfec;
    color: black;
    cursor: pointer;
  }
`;

export const TopRightIcons = styled.div`
  color: #f6dfec;
  position: absolute;
  right: 7%;
  top: 0;
  padding-top: 1.5vh;
  font-size: 150%;
`;

export const GeneralLanding = styled.div`
  min-height: 100vh;
  background-color: #203d35;
`;

export const LandingTitleDiv = styled.div`
  font-family: NHG;
  font-size: 200%;
  color: #f6dfec;
  text-align: center;
  padding: 5vh;
`;

export const GeneralFeatured = styled.div`
  min-height: 80vh;
  background-color: #f6dfec;
  font-family: butler;
`;

export const FeaturedText = styled.div`
  margin-top: 10vh;
  font-size: 140%;
`;

export const GeneralProducts = styled.div`
  min-height: 70vh;
  background-color: white;
  font-family: butler;
`;

export const FooterStyle = styled.div`
  min-height: 70vh;
  background-color: #203d35;
`;
