import React from "react";
import GlobalFonts from "./fonts/fonts";

//Components
// import NavBar from "./components/NavBar";
import LandingScreen from "./components/Landing";
import FeaturedPage from "./components/Featured";
import OtherProds from "./components/Products";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <GlobalFonts />
      <LandingScreen />
      <FeaturedPage />
      <OtherProds />
      <Footer />
    </div>
  );
}

export default App;
