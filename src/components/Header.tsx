// components/Header.tsx
import React from "react";

const HeaderLink: React.FC<{ title: string }> = ({
  title,
}: {
  title: string;
}) => {
  return (
    <li>
      <a
        href="#"
        className="hover:text-primary ease-in-out duration-200 relative hover:font-medium"
      >
        {title}
      </a>
    </li>
  );
};

const Header: React.FC = () => {
  return (
    <header className="bg-white text-secondary py-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="/logo_preta.png"
            alt="Anjos Terraplanagem"
            className="h-14"
          />
        </div>
        <nav>
          <ul className="flex space-x-10">
            <HeaderLink title="Home"></HeaderLink>
            <HeaderLink title="Sobre"></HeaderLink>
            <HeaderLink title="Serviços"></HeaderLink>
            <HeaderLink title="Contato"></HeaderLink>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
