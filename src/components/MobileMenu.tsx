import React from "react";
import HeaderLink from "./HeaderLink";

export default function MobileMenu({
  showSidebar,
  toggleSidebar,
}: {
  showSidebar: boolean;
  toggleSidebar: () => void;
}) {
  return (
    <div
      className={`bg-zinc-950 h-screen w-2/4 text-white fixed top-0 right-0 overflow-y-auto transition duration-300  ${
        showSidebar ? "-translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="pt-28 p-6 h-screen flex flex-col justify-between items-center">
        <ul className="flex flex-col gap-10">
          <HeaderLink title="Home" idRef="start" />
          <HeaderLink title="Serviços" idRef="service-section" />
          <HeaderLink title="Clientes" idRef="clients-section" />
          <HeaderLink title="Contato" idRef="contact-section" />
        </ul>
        <div className="font-thin text-sm">Todos os direitos reservados</div>
      </div>
    </div>
  );
}
