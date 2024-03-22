"use client";
// components/CompanyDescription.tsx
import React, { useEffect, useState } from "react";

const CompanyNumbers = [
  {
    title: "Obras Concluídas",
    number: 100,
    actual: 0,
  },
  {
    title: "Metragem Trabalhada",
    number: 10000,
    actual: 0,
    postLabel: "m²",
  },
  {
    title: "Número de Caminhões",
    number: 54,
    actual: 0,
  },
  {
    title: "Número de Funcionários",
    number: 202,
    actual: 0,
  },
];

const CompanyDescription: React.FC = () => {
  const [companyNumbers, setCompanyNumbers] = useState(CompanyNumbers);

  useEffect(() => {
    const aboutSection = document.getElementById("about-section");
    if (!aboutSection) return;

    const aboutSectionPosition = aboutSection.offsetTop;
    const windowHeight = window.innerHeight;

    const updateCounters = () => {
      if (
        window.scrollY > aboutSectionPosition - windowHeight * 0.75 &&
        !companyNumbers.every((company) => company.actual === company.number)
      ) {
        let counter = 0;
        const intervalId = setInterval(() => {
          counter+=5;
          companyNumbers.forEach((company, index) => {
            const sum = company.actual;
            
            company.actual =
              counter > company.number
                ? company.number
                : counter > company.actual
                ? counter
                : company.actual;
            if (index == companyNumbers.indexOf(company)) {
              setCompanyNumbers([...companyNumbers]);
            }
          });

          if (
            companyNumbers.every((company) => company.actual === company.number)
          ) {
            clearInterval(intervalId);
          }
        }, 5);
      }
    };

    window.addEventListener("scroll", updateCounters);
    return () => {
      window.removeEventListener("scroll", updateCounters);
    };
  }, []);

  return (
    <section className="py-16 bg-gray-100" id="about-section">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4 ">Sobre Nós</h2>
        <p className="mb-4">
          A Anjos Terraplanagem é uma empresa especializada em serviços de
          terraplanagem, demolição, fundação e limpeza. Com anos de experiência
          no mercado, fornecemos soluções eficientes e de alta qualidade para
          nossos clientes.
        </p>
        <p>
          Com uma equipe de profissionais qualificados e equipamentos modernos,
          garantimos resultados superiores em todos os nossos projetos.
        </p>

        <div className="mt-8 border-t border-gray-300 pt-6">
          {/* <h3 className="text-2xl font-bold mb-4">Nossos Valores</h3> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {companyNumbers.map((company, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center transition duration-300 transform hover:scale-105"
              >
                {/* <HiOutlineHammer className="text-primary text-4xl mb-2" /> */}
                <h4 className="text-lg font-semibold">{company.title}</h4>
                <p className="text-gray-600">
                  {company.actual} {company.postLabel || ""}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyDescription;
