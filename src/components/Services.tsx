// components/Services.tsx
import React from 'react';

const Services: React.FC = () => {
  return (
    <section className="py-16 bg-gray-200">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Nossos Serviços</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg transition duration-300 transform hover:-translate-y-1 hover:shadow-xl">
            <h3 className="text-xl font-semibold mb-4">Terraplanagem</h3>
            <p>Serviços de terraplanagem para projetos residenciais, comerciais e industriais.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transition duration-300 transform hover:-translate-y-1 hover:shadow-xl">
            <h3 className="text-xl font-semibold mb-4">Demolição</h3>
            <p>Demolição controlada de estruturas, garantindo segurança e eficiência.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transition duration-300 transform hover:-translate-y-1 hover:shadow-xl">
            <h3 className="text-xl font-semibold mb-4">Fundação</h3>
            <p>Construção de fundações para edifícios, estruturas e obras civis.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transition duration-300 transform hover:-translate-y-1 hover:shadow-xl">
            <h3 className="text-xl font-semibold mb-4">Limpeza</h3>
            <p>Serviços de limpeza de terrenos, remoção de entulhos e preparação de áreas para construção.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
