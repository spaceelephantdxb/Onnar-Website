import React from "react";
import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import Section2 from "./components/Section2";
// import MenuItems from "./components/MenuItems";
import DeliveryInfo from "./components/DeliveryInfo";
import Testimonial from "./components/Testimonial";
// import FounderSection from "./components/FounderSection";
import Footer from "./components/Footer";
import MenuSection from "./components/MenuTrash";
import Quote from "./components/Quote";

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
      {/* <FounderSection /> */}
      <Quote />
      <Footer />
    </div>
  );
};

export default MainPage;
