import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio | João Gabriel",
  description: "Portfolio | João Gabriel Vianna Marinho",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <head>
      <link rel="icon" href="/assets/svgs/avatar.svg" type="image/png" sizes="32x32" />
      </head>
      <body>{children}</body>
    </html>
  );
}
