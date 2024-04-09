// components/Services.tsx
import { RocketLaunchIcon } from "@heroicons/react/24/solid";
import React from "react";

const ServiceCard = ({
  title,
  description,
  icon,
  color,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}) => {
  return (
    <div className={"p-16 " + color}>
      <div className="flex flex-col justify-center items-center text-white">
        <div className="flex justify-center items-center p-4 bg-white rounded-lg">
          {icon}
        </div>
        <div className="text-2xl font-bold pt-6">{title}</div>
        <div className="my-4 w-48 h-0.5 bg-white">
          <div> </div>
        </div>
        <div>{description} </div>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <section id="service-section">
      <div className="grid md:grid-cols-3 grid-cols-1">
        <ServiceCard
          title="Missão"
          description="Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, "
          icon={<RocketLaunchIcon className="h-20 text-orange-600" />}
          color="bg-orange-600"
        />
        <ServiceCard
          title="Valores"
          description="Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica,"
          icon={<RocketLaunchIcon className="h-20 text-orange-700" />}
          color="bg-orange-700"
        />
        <ServiceCard
          title="Visão"
          description="Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica,"
          icon={<RocketLaunchIcon className="h-20 text-orange-800" />}
          color="bg-orange-800"
        />
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1">
        <ServiceCard
          title="Web Development"
          description="Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica,"
          icon={<RocketLaunchIcon className="h-20 text-gray-800" />}
          color="bg-gray-800"
        />
        <ServiceCard
          title="Web Development"
          description="Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica,"
          icon={<RocketLaunchIcon className="h-20 text-gray-900" />}
          color="bg-gray-900"
        />
        <ServiceCard
          title="Web Development"
          description="Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica,"
          icon={<RocketLaunchIcon className="h-20 text-gray-950" />}
          color="bg-gray-950"
        />
      </div>
    </section>
  );
};

export default Services;
