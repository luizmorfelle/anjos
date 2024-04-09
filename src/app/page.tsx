"use client";
import React, { useState } from "react";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import CompanyDescription from "../components/CompanyDescription";
import Services from "../components/Services";
import Clients from "../components/Clients";
import Footer from "../components/Footer";
import MobileMenu from "@/components/MobileMenu";

const Home = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div>
      <Header toggleSidebar={toggleSidebar} showSidebar={showSidebar} />
      <Carousel />
      {/* <CompanyDescription /> */}
      <MobileMenu toggleSidebar={toggleSidebar} showSidebar={showSidebar} />
      <Services />
      <Clients />
      <Footer />
    </div>
  );
};

export default Home;
