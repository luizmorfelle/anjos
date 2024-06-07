import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const helvetica = localFont({
  src: [
    {
      path: "/fonts/HelveticaNeue-Light.otf",
      weight: "400",
    },
    {
      path: "/fonts/HelveticaNeue-Medium.otf",
      weight: "500",
    },
    {
      path: "/fonts/HelveticaNeue-BoldExt.otf",
      weight: "700",
    },
    {
      path: "/fonts/HelveticaNeue-BlackCond.otf",
      weight: "800",
    },
  ],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Anjos | Terraplanagem",
  description: "Anjos Terraplanagem",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={helvetica.className}>{children}</body>
    </html>
  );
}
