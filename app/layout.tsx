import "./globals.css";
import React from "react";

export const metadata = {
  title: "Smart Glass Factory",
  description: "Loja de óculos inteligentes com personalização e controle de produção",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        style={{
          fontFamily: "Arial, sans-serif",
          margin: 0,
          padding: 0,
          backgroundColor: "#f8f9fa",
          color: "#333",
        }}
      >
        <header
          style={{
            backgroundColor: "#111827",
            color: "white",
            padding: "1rem 2rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2>🕶️ Smart Glass Factory</h2>
          <nav>
            <a href="/" style={{ color: "white", marginRight: "1rem" }}>
              Início
            </a>
            <a href="/pedidos" style={{ color: "white" }}>
              Pedidos
            </a>
          </nav>
        </header>
        <main style={{ padding: "2rem" }}>{children}</main>
      </body>
    </html>
  );
}