"use client";

import Image from "next/image";
// components/CompanyDescription.tsx
import React from "react";
import Slider from "react-slick";

var settings = {
  dots: false,
  infinite: true,
  autoplay: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  centerMode: true,
  autoplaySpeed: 4000,
  centerPadding: "40px",
  adaptiveHeight: true,
  arrows: false,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        initialSlide: 2,
      },
    },
  ],
};

const CompanyDescription: React.FC = () => {
  return (
    <section
      className="py-16 bg-zinc-900 px-10 md:px-0 text-white"
      id="about-section"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6">Anjos Terraplanagem</h2>
        <p className="my-4">
          A Anjos Terraplanagem e Locação LTDA é uma empresa estabelecida em
          Tijucas, Santa Catarina, com um legado de mais de 30 anos de atuação
          no setor de terraplanagem e locação de equipamentos. Desde sua
          fundação em 1° de setembro de 1993, a empresa se destaca pelo
          compromisso com a qualidade e a satisfação do cliente, buscando sempre
          atualização e primor em seus serviços.
        </p>
        <p className="my-4">
          A equipe da Anjos Terraplanagem e Locação é formada por profissionais
          experientes e dedicados, que compartilham o compromisso da empresa com
          excelência. Cada membro da equipe é treinado para proporcionar um
          serviço de alta qualidade, garantindo que cada projeto seja concluído
          com sucesso e dentro dos prazos estabelecidos.
        </p>
        <p className="my-4">
          Além disso, a Anjos mantém um compromisso firme com a inovação,
          incorporando constantemente novas tecnologias e práticas de trabalho
          para aprimorar ainda mais seus serviços. Isso inclui não apenas a
          modernização de equipamentos, mas também o desenvolvimento de métodos
          de trabalho mais eficientes e sustentáveis, se destando por sua
          capacidade de adaptar-se às necessidades específicas de cada cliente,
          oferecendo soluções personalizadas e eficazes.
        </p>
      </div>
      <div className="flex items-center justify-center mx-auto mt-10 md:px-48 px-0">
        <div className="md:w-full w-screen h-[25rem] ">
          <Slider {...settings}>
            {Array(11)
              .fill(null)
              .map((_, i) => i)
              .map((index) => {
                return (
                  <div key={index} className="h-[25rem] px-2 md:px-3">
                    <img
                      key={index}
                      src={`/images/${index}.jpg`}
                      alt=""
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                );
              })}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default CompanyDescription;
