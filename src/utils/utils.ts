export default function openWhatsapp() {
  window.open(
    "//api.whatsapp.com/send?phone=554832630436&text=Olá, vim pelo site, gostaria de solicitar um orçamento",
    "_blank"
  );
}

type HeaderLink = {
  title: string;
  idRef: string;
};

export const linksHeader: HeaderLink[] = [
  {
    title: "Home",
    idRef: "start",
  },
  {
    title: "Sobre",
    idRef: "about-section",
  },
  {
    title: "Valores",
    idRef: "values-section",
  },
  {
    title: "Serviços",
    idRef: "service-section",
  },
  {
    title: "Clientes",
    idRef: "clients-section",
  },
  {
    title: "Contato",
    idRef: "contact-section",
  },
];
