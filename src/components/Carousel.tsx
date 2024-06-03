"use client";
// components/Carousel.tsx
import React from "react";
// import Slider from "react-slick";

const Carousel: React.FC = () => {
  // const settings = {
  //   dots: true,
  //   autoplay: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   arrows: false,
  //   adaptiveHeight: true,
  // };

  return (
    <section className=" bg-zinc-950" id="start">
      <div>
        <div className="md:h-[45rem] flex md:flex-row w-screen max-w-full">
          <img
            src="/bg1.jpg"
            alt="Projeto 1"
            className=" w-full  object-cover object-center "
          />
          {/* <div className="flex flex-col md:p-12 p-6 justify-evenly md:w-1/2 gap-6 md:gap-0">
            <div className="flex flex-col gap-3">
              <h1 className="text-white text-4xl pb-6 font-bold">
                Anjos Terraplanagem
              </h1>
              <p className="text-white text-md font-thin">
                A Anjos Terraplanagem é uma empresa especializada em
                terraplanagem e pavimentação. Com mais de 10 anos de experiência
                no mercado, a empresa é referência em qualidade e eficiência.
              </p>

              <p className="text-white text-md font-thin">
                Focada em qualidade e eficiência, a Anjos Terraplanagem é a
                escolha certa para o seu projeto. Entre em contato e solicite um
                orçamento.
              </p>
            </div>

            <div className="flex h-2/6 w-full gap-6 justify-between">
              <div className="flex-1 relative">
                <img
                  src="/1.jpg"
                  alt="Projeto 1"
                  className="w-full h-full object-cover object-bottom relative z-10"
                />
                <div className="absolute inset-0 bg-orange-500  transform md:translate-x-2 translate-x-1 md:translate-y-2 translate-y-1 z-0" />
              </div>
              <div className="flex-1 relative">
                <img
                  src="/2.jpg"
                  alt="Projeto 1"
                  className="w-full h-full object-cover object-center z-10 relative"
                />
                <div className="absolute inset-0 bg-orange-500  transform md:translate-x-2 translate-x-1 md:translate-y-2 translate-y-1 z-0" />
              </div>

              <div className="flex-1 relative">
                <img
                  src="/img1.jpg"
                  alt="Projeto 1"
                  className="w-full h-full object-cover object-center z-10 relative"
                />
                <div className="absolute inset-0 bg-orange-500  transform md:translate-x-2 translate-x-1 md:translate-y-2 translate-y-1 z-0" />
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
