"use client";
import React from "react";
import { FaBars, FaWhatsapp } from "react-icons/fa";
import HeaderLink from "./HeaderLink";
import openWhatsapp from "@/utils/utils";

const Header = ({
  showSidebar,
  toggleSidebar,
}: {
  showSidebar: boolean;
  toggleSidebar: () => void;
}) => {
  return (
    <header className="bg-zinc-950 text-secondary sticky top-0 z-50">
      {/* <div className="flex items-end justify-between">
        <div></div>
        <div className="text-white text-xs font-medium">
          Horário de funcionamento: Seg - Sex | 08:00 - 17:00{" "}
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            openWhatsapp();
          }}
          className="flex items-center text-white gap-2 bg-orange-600 py-2 px-8 font-medium text-sm hover:bg-orange-700 transition duration-200"
        >
          <FaWhatsapp size={16} />
          <p>Entre em contato</p>
        </button>
      </div> */}
      <div
        className="container mx-auto flex justify-between items-center px-10 md:px-0 py-6"
        id="header"
      >
        <div className="flex items-center">
          <img
            src="/logo_branca.png"
            alt="Anjos Terraplanagem"
            className="h-12 md:h-14"
          />
        </div>
        <nav className="hidden md:flex">
          <ul className="flex space-x-10 text-white text-lg">
            <HeaderLink title="Home" idRef="start" />
            <HeaderLink title="Sobre" idRef="about-section"/>
            <HeaderLink title="Serviços" idRef="service-section" />
            <HeaderLink title="Clientes" idRef="clients-section" />
            <HeaderLink title="Contato" idRef="contact-section" />
          </ul>
        </nav>
        <div
          className={`flex md:hidden text-white p-2 border-2 border-transparent transition duration-300 rounded-full ${
            showSidebar ? "border-white" : ""
          }`}
          onClick={() => {
            toggleSidebar();
          }}
        >
          <FaBars size={24} />
        </div>
      </div>
    </header>
  );
};

export default Header;
