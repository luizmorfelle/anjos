// components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-primary text-white">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div className="w-full md:w-auto mb-4 md:mb-0">
          <img src="/logo_branca.png" alt="Logo" className="h-28 h-auto" />
        </div>
        <div className="w-full md:w-auto mb-4 md:mb-0">
          <h4 className="text-lg font-semibold mb-2">Localização</h4>
          <p>Rua da Terraplanagem, 123</p>
          <p>Bairro Terra Firme</p>
          <p>Cidade Terra Nova</p>
          <p>CEP: 12345-678</p>
        </div>
        <div className="w-full md:w-auto mb-4 md:mb-0">
          <h4 className="text-lg font-semibold mb-2">Contato</h4>
          <p>Telefone: (123) 456-7890</p>
          <p>Email: contato@anjos-terraplanagem.com</p>
        </div>
        <div className="w-full md:w-auto mb-4 md:mb-0">
          <h4 className="text-lg font-semibold mb-2">Redes Sociais</h4>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-secondary transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 2H2v20l4-4h5.09L12 22l1.91-4H20l4 4V2z"/>
              </svg>
            </a>
            <a href="#" className="text-white hover:text-secondary transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 2v20H3V2h18zm-4.6 14.36c.46.3.99.54 1.57.69a6.7 6.7 0 0 0-2.05-.33c-.7 0-1.37.14-1.99.4-.62.25-1.16.63-1.63 1.15-.46.52-.82 1.17-1.07 1.95-.26.78-.39 1.69-.39 2.72v.36h-3.55v-.5c0-1.42.3-2.65.9-3.7a5.88 5.88 0 0 1 2.26-2.3c.96-.58 2.04-.87 3.22-.87.77 0 1.5.12 2.18.35.68.23 1.28.53 1.8.9.52.38.95.82 1.28 1.33.33.52.54.95.64 1.27.1.32.16.7.16 1.14v1.53h-3.6v2.85c0 .37.03.74.1 1.1.07.36.2.68.4.97.2.29.46.53.77.72.31.19.69.34 1.12.44.43.1.9.15 1.42.15.77 0 1.48-.1 2.15-.3.68-.2 1.26-.5 1.76-.89a4.53 4.53 0 0 0 1.28-1.35c.38-.56.67-1.24.88-2.03.21-.78.31-1.7.31-2.76v-.78c-.02-.7-.09-1.35-.2-1.95-.11-.6-.3-1.12-.58-1.55-.28-.43-.66-.78-1.14-1.04a4.34 4.34 0 0 0-1.58-.55 6.9 6.9 0 0 0-2.02.29c.45-.3.82-.66 1.13-1.08z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
