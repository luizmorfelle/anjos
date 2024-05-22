// components/Services.tsx
import openWhatsapp from "@/utils/utils";
import React from "react";
import {
  FaFlagCheckered,
  FaRocket,
  FaToolbox,
  FaTools,
  FaWhatsapp,
} from "react-icons/fa";
import { FaPhoneFlip } from "react-icons/fa6";
import { GiBullseye } from "react-icons/gi";
import { GrTask } from "react-icons/gr";

const ServiceCard = ({
  title,
  description,
  items,
  icon,
  color,
  action,
}: {
  title: string;
  description?: string;
  items?: string[];
  icon: React.ReactNode;
  color: string;
  action?: React.ReactNode;
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
        {description && (
          <div className="flex flex-col justify-evenly">
            {description.split("\\").map((item, index) => (
              <div key={index} className="text-center py-3">
                {item}
              </div>
            ))}
          </div>
        )}
        {items && (
          <ul className="list-disc ">
            {items.map((item, index) => (
              <li key={index} className="p-1">
                {item}
              </li>
            ))}
          </ul>
        )}
        {action && action}
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
          description="Nossa missão é fornecer serviços de terreplanagem de alta qualidade, eficientes e seguros. Oferecendo para nossos clientes, soluções personalizadas que atendam às suas necessidades, com respeito ao meio ambiente e comprometimento com a segurança e saúde de nossos colaboradores."
          icon={<GiBullseye className="size-20 text-orange-600" />}
          color="bg-orange-600"
        />
        <ServiceCard
          title="Valores"
          items={[
            "Qualidade",
            // "Segurança: Priorizamos a segurança de nossos colaboradores, clientes e comunidade em todas as nossas atividades, adotando práticas e procedimentos para prevenir acidentes e lesões.",
            "Integridade",
            "Inovação",
            "Compromisso com o cliente",
            "Ética",
            "Resultado",
          ]}
          icon={<GrTask className="size-20 text-orange-700" />}
          color="bg-orange-700"
        />
        <ServiceCard
          title="Visão"
          description="Nosso objetivo é nos tornarmos líderes reconhecidos no setor de terraplanagem. Mantendo um compromisso inabalável com a qualidade, segurança e responsabilidade ambiental em todas as nossas operações. Nossa visão é construir um legado duradouro de confiança e credibilidade."
          icon={<FaFlagCheckered className="size-20 text-orange-800" />}
          color="bg-orange-800"
        />
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1">
        <ServiceCard
          title="Nossos Serviços"
          items={[
            "Terraplanagem",
            "Mineração",
            "Enrocamento",
            "Demolição",
            "Drenagem",
            "Limpeza de terreno",
            "Locação de equipamentos",
          ]}
          icon={<FaToolbox className="size-20 text-zinc-800" />}
          color="bg-zinc-800"
        />
        <ServiceCard
          title="Nossos Equipamentos"
          items={[
            "Escavadeira",
            "Pá carregadeira",
            "Rolo compactador",
            "Trator de esteira",
            "Motoniveladora",
            "Caminhão truck",
            "Caminhão pipa",
          ]}
          icon={<FaTools className="size-20 text-zinc-900" />}
          color="bg-zinc-900"
        />
        <ServiceCard
          title="Entre em contato"
          description="Entre em contato com a nossa equipe para um atendimento personalizado e esclareça todas as suas dúvidas. \\ Será um prazer atendê-lo(a)!"
          action={
            <button
              onClick={(e) => {
                e.preventDefault();
                openWhatsapp();
              }}
              className="flex items-center text-white gap-2 bg-orange-600 py-2 w-full rounded justify-center mt-2 font-medium text-sm hover:bg-orange-700 transition duration-200"
            >
              <FaWhatsapp size={16} />
              <p>Entre em contato</p>
            </button>
          }
          icon={<FaPhoneFlip className="size-20 text-zinc-950" />}
          color="bg-zinc-950"
        />
      </div>
    </section>
  );
};

export default Services;
