import openWhatsapp from "@/utils/utils";
import { MapPinIcon, PhoneIcon } from "@heroicons/react/24/outline";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer
      className="py-10 bg-zinc-950 text-white px-10 md:px-0"
      id="contact-section"
    >
      <div className="container mx-auto flex flex-wrap md:justify-between items-center gap-4 justify-center">
        <div className="w-full md:w-auto mb-4 md:mb-0">
          <img src="/logo_branca.png" alt="Logo" className="h-20" />
        </div>
        <div className="w-full md:w-auto mb-4 md:mb-0 gap-1 flex flex-col">
          <div className="flex">
            <PhoneIcon className="h-6" />
            <h4 className=" ml-2 text-lg font-semibold mb-2">Contato</h4>
          </div>
          <p>Telefone: (48) 4042-3992</p>
          <p>WhatsApp: (48) 3263-0436</p>
          <p>Email: anjosjunior@unetvale.com.br</p>
          <button
            onClick={(e) => {
              e.preventDefault();
              openWhatsapp();
            }}
            className="flex items-center text-white gap-2 bg-orange-600 py-2 w-full rounded justify-center mt-2 font-medium text-sm hover:bg-orange-700 transition duration-200"
          >
            <FaWhatsapp size={16} />
            <p className="text-lg">Entre em contato</p>
          </button>
        </div>
        <div className="w-full md:w-auto mb-4 md:mb-0">
          <div className="flex">
            <MapPinIcon className="h-6" />
            <h4 className="ml-2 text-lg font-semibold mb-2">Localização</h4>
          </div>
          <p>Rua Guilherme Varela, 120</p>
          <p>Bairro Centro</p>
          <p>Cidade Tijucas</p>
          <p>CEP: 88200-000</p>
        </div>

        <div>
          <iframe
            style={{ border: 0 }}
            src="https://maps.google.com/maps?q=anjos%20terraplanagem&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameBorder={0}
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
