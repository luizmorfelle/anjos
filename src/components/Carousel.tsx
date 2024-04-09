"use client";
// components/Carousel.tsx
import React from "react";
import Slider from "react-slick";

const Carousel: React.FC = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: true,
  };

  return (
    <section className=" bg-black" id="start">
      <div className="h-[50rem]">
        <div className="h-[50rem]">
          <img
            src="/imgbg1.jpg"
            alt="Projeto 1"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Carousel;
