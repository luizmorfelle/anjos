import React from 'react';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import CompanyDescription from '../components/CompanyDescription';
import Services from '../components/Services';
import Clients from '../components/Clients';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Header />
      {/* <Carousel /> */}
      <CompanyDescription />
      <Services />
      <Clients />
      <Footer />
    </div>
  );
};

export default Home;