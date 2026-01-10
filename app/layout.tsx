import "./globals.css";
import type { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Ambitrack",
  description:
    "AmbiTrack es una plataforma web para reportar, monitorear y visualizar incidencias ambientales con mapas interactivos y alertas en tiempo real.",
  keywords: [
    "monitoreo ambiental",
    "reportes ambientales",
    "incidentes ambientales",
    "mapa interactivo",
    "reportes georreferenciados",
    "alertas tempranas",
    "gestión ambiental",
    "control ambiental",
    "denuncia ambiental",
    "protección de recursos naturales",
    "participación ciudadana",
    "datos ambientales",
    "visualización ambiental",
    "plataforma ambiental",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
