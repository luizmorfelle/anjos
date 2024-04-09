// components/Clients.tsx
import React from "react";

type ClientCardProps = {
  src: string;
  alt: string;
};

function ClientCard(props: ClientCardProps) {
  return (
    <div className="flex items-center justify-center p-4 bg-slate-300 md:size-48 size-36">
      <img
        src="/client1.jpg"
        alt="Cliente 1"
        className="w-full h-auto rounded-lg shadow-lg "
      />
    </div>
  );
}

const Clients: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100" id="clients-section">
      <div className="flex flex-col container md:mx-auto items-center justify-center">
        <h2 className="text-3xl font-bold mb-8">Nossos Clientes</h2>
        <div className="grid grid-cols-2 px-3 md:px-0 md:grid-cols-4 md:gap-4 gap-2">
          <ClientCard src="/client1.jpg" alt="Cliente 1" />
          <ClientCard src="/client1.jpg" alt="Supermercado Koch" />
          <ClientCard src="/client1.jpg" alt="Supermercado Koch" />
          <ClientCard src="/client1.jpg" alt="Supermercado Koch" />
          <ClientCard src="/client1.jpg" alt="Cliente 1" />
          <ClientCard src="/client1.jpg" alt="Supermercado Koch" />
          <ClientCard src="/client1.jpg" alt="Supermercado Koch" />
          <ClientCard src="/client1.jpg" alt="Supermercado Koch" />
        </div>
      </div>
    </section>
  );
};

export default Clients;
