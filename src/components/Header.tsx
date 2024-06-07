"use client";
import { linksHeader } from "@/utils/utils";
import { FaBars } from "react-icons/fa";
import HeaderLink from "./HeaderLink";

const Header = ({
  showSidebar,
  toggleSidebar,
}: {
  showSidebar: boolean;
  toggleSidebar: () => void;
}) => {
  return (
    <header className="bg-zinc-950 text-secondary sticky top-0 z-50">
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
            {linksHeader.map((link) => (
              <HeaderLink
                key={link.idRef}
                title={link.title}
                idRef={link.idRef}
              />
            ))}
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
