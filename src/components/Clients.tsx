// components/Clients.tsx
import React from "react";

type ClientCardProps = {
  src: string;
  alt: string;
};

function ClientCard(props: ClientCardProps) {
  return (
    <div className="flex items-center justify-center p-2 bg-slate-200 md:size-60 size-36">
      <img
        src={props.src}
        alt={props.alt}
        className="w-full h-auto rounded-lg"
      />
    </div>
  );
}

const Clients: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100" id="clients-section">
      <div className="flex flex-col container md:mx-auto items-center justify-center">
        <h2 className="text-3xl font-bold mb-8">Nossos Clientes</h2>
        <div className="grid grid-cols-2 px-3 md:px-0 md:grid-cols-4 md:gap-4 gap-2 lg:grid-cols-4">
          {Array(15)
            .fill(null)
            .map((_, i) => i)
            .map((client) => {
              return (
                <ClientCard
                  key={client}
                  src={`/clients/c${client}.jpg`}
                  alt={`Cliente ${client}`}
                />
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Clients;
