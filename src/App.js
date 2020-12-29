import React from "react";
import GlobalFonts from "./fonts/fonts";

//Components
// import NavBar from "./components/NavBar";
import LandingScreen from "./components/Landing";
import FeaturedPage from "./components/Featured";
import OtherProds from "./components/Products";
import Footer from "./components/Footer";

//Add id to the components to allow for scrolling

function App() {
  return (
    <div>
      <GlobalFonts />
      <LandingScreen id="landing" />
      <FeaturedPage id="featured" />
      <OtherProds id="products" />
      <Footer />
    </div>
  );
}

export default App;
