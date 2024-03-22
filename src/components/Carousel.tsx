'use client'
// components/Carousel.tsx
import React from 'react';
import Slider from 'react-slick';

const Carousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <section className="py-16 bg-gray-300">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Nossos Projetos</h2>
        <Slider {...settings}>
          <div>
            <img src="https://via.placeholder.com/800x400.png?text=Projeto+1" alt="Projeto 1" className="w-full max-w-xl rounded-lg shadow-lg transition duration-300 transform hover:scale-105" />
          </div>
          <div>
            <img src="https://via.placeholder.com/800x400.png?text=Projeto+2" alt="Projeto 2" className="w-full max-w-xl rounded-lg shadow-lg transition duration-300 transform hover:scale-105" />
          </div>
          <div>
            <img src="https://via.placeholder.com/800x400.png?text=Projeto+3" alt="Projeto 3" className="w-full max-w-xl rounded-lg shadow-lg transition duration-300 transform hover:scale-105" />
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Carousel;
