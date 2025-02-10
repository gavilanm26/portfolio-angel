import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

import "./globals.css";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Navbar from "./components/navbar";
import Header from "./components/header";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portafolio de Angel Gavilan",
  description: "Bienvenido a mi portafolio. Soy un desarrollador especializado en Next.js, React y TailwindCSS."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={urbanist.className}>
        <Navbar />
        <Header />
        {children}
      </body>
    </html>
  );
}
