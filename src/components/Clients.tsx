// components/Clients.tsx
import React from "react";

type ClientCardProps = {
  src: string;
  alt: string;
  title: string;
};

function ClientCard(props: ClientCardProps) {
  return (
    <div className="flex-column">
      <img
        src="/client1.jpg"
        alt="Cliente 1"
        className="w-full h-auto rounded-lg shadow-lg transition duration-300 transform hover:-translate-y-1 hover:shadow-xl"
      />
      <h3 className="text-xl font-semibold p-2 ">{props.title}</h3>
    </div>
  );
}

const Clients: React.FC = () => {
  return (
    <section className="py-16 bg-gray-300">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Nossos Clientes</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <ClientCard src="/client1.jpg" alt="Cliente 1" title={"Supermercado Koch"} />
          <ClientCard src="/client1.jpg" alt="Supermercado Koch" title={"Supermercado Koch"} />
          <ClientCard src="/client1.jpg" alt="Supermercado Koch" title={"Supermercado Koch"} />
          <ClientCard src="/client1.jpg" alt="Supermercado Koch" title={"Supermercado Koch"} />
        </div>
      </div>
    </section>
  );
};

export default Clients;
