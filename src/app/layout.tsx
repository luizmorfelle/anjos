"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./globals.css";
import useTheme from "@/hooks/useTheme";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "Anjos | Terraplanagem",
  description:
    "Anjos Terraplanagem é uma empresa especializada em Terraplanagem, Mineração, Enrocamento, Demolição, Drenagem, Limpeza de terreno e Locação de equipamentos.",
  keywords: [
    "Anjos",
    "Terraplanagem",
    "Construção",
    "Obras",
    "Demolição",
    "Aterro",
    "Desaterro",
    "Limpeza de Terreno",
    "Locação de Máquinas",
    "Caminhão Basculante",
    "Retroescavadeira",
    "Escavadeira Hidráulica",
    "Pá Carregadeira",
    "Motoniveladora",
    "Rolo Compactador",
    "Mini Carregadeira",
    "Mini Escavadeira",
    "Bobcat",
    "Caminhão Munck",
    "Caminhão Pipa",
    "Caminhão Prancha",
    "Caminhão Caçamba",
    "Caminhão Tanque",
    "Caminhão Plataforma",
    "Caminhão Guincho",
    "Caminhão Munck",
    "Caminhão Poliguindaste",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = useTheme();

  useEffect(() => {
    const favicon = document.querySelector(
      'link[rel="icon"]'
    ) as HTMLLinkElement;
    if (favicon) {
      favicon.href =
        theme === "dark" ? "/favicon-dark.ico" : "/favicon-light.ico";
    }
  }, [theme]);

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon-light.ico" />
        <meta
          name="google-site-verification"
          content="F8Yv3HwckvHzDkdXr8W_dQDcFAg89N2529WXak55QWE"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
