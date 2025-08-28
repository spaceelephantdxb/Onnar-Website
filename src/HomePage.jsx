import React from "react";
import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import Section2 from "./components/Section2";
// import MenuItems from "./components/MenuItems";
import DeliveryInfo from "./components/DeliveryInfo";
import Testimonial from "./components/Testimonial";
import FounderSection from "./components/FounderSection";
import Footer from "./components/Footer";
import MenuSection from "./components/MenuTrash";

const MainPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Section2 />
      <MenuSection />
      {/* <MenuItems /> */}
      <DeliveryInfo />
      <Testimonial />
      <FounderSection />
      <Footer />
    </div>
  );
};

export default MainPage;
