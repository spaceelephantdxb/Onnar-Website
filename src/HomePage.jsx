import React from "react";
import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import DeliveryInfo from "./components/DeliveryInfo";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
import MenuSection from "./components/MenuTrash";
import MenuHighlights from "./components/MenuHighlights";
import Quote from "./components/Quote";
import Carousel from "./components/Carousel";
import SocialIcons from "./components/ui/SocialIcons";

const MainPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <MenuHighlights />
      {/* <Carousel /> */}
      {/* <MenuSection /> */}
      {/* <DeliveryInfo /> */}
      {/* <Testimonial /> */}
      <Quote />
      <Footer />
      <SocialIcons />
    </div>
  );
};

export default MainPage;
