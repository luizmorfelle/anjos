import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
      <head>
        <meta
          name="google-site-verification"
          content="F8Yv3HwckvHzDkdXr8W_dQDcFAg89N2529WXak55QWE"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
