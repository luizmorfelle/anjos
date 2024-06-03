"use client";
import MobileMenu from "@/components/MobileMenu";
import SubFooter from "@/components/SubFooter";
import { useState } from "react";
import Carousel from "../components/Carousel";
import Clients from "../components/Clients";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Services from "../components/Services";
import CompanyDescription from "@/components/CompanyDescription";
import Head from "next/head";

const Home = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div>
      <Header toggleSidebar={toggleSidebar} showSidebar={showSidebar} />
      <Carousel />
      <CompanyDescription />
      <MobileMenu toggleSidebar={toggleSidebar} showSidebar={showSidebar} />
      <Services />
      <Clients />
      <Footer />
      <SubFooter />
    </div>
  );
};

export default Home;
