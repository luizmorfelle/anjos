"use client";
import React from "react";

const Carousel: React.FC = () => {
  return (
    <section className=" bg-zinc-950" id="start">
      <div>
        <div className="md:h-[35rem] flex md:flex-row w-screen max-w-full relative">
          <img
            src="/bg.jpeg"
            alt="Projeto 1"
            className=" w-full object-cover filter brightness-90 saturate-200"
          />
          <div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-zinc-900">
              <div className="absolute top-0 left-0 md:left-20 md:top-20 md:w-auto w-full h-full md:h-auto">
                <div className="flex flex-col justify-center md:items-start items-center h-full text-white text-opacity-90 text-2xl md:text-5xl font-bold leading italic">
                  <h2>CONSTRUINDO O</h2>
                  <h2 className="text-orange-700 pb-8">FUTURO</h2>
                  <h2>NIVELANDO O</h2>
                  <h2 className="text-orange-700">PRESENTE</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
