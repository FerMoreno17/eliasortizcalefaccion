import type { Metadata } from "next";
import { Fraunces, Inter, Space_Grotesk } from "next/font/google";

import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  weight: ["400", "500", "600"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abrigo Calefacción | Venta, Instalación y Servicio Técnico",
  description:
    "Soluciones integrales de calefacción: venta de equipos, instalación, servicio técnico y proyectos a medida. Asesoramiento profesional en cada etapa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${fraunces.variable} ${inter.variable} ${spaceGrotesk.variable} font-body text-charcoal antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
