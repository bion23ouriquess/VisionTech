"use client";
import { useState, useEffect } from "react";

const produtos = [
  { id: 1, nome: "Aviador", imagem: "/oculos1.jpg" },
  { id: 2, nome: "Redondo", imagem: "/oculos2.jpg" },
  { id: 3, nome: "Quadrado", imagem: "/oculos3.jpg" },
  { id: 4, nome: "Esportivo", imagem: "/oculos4.jpg" },
];

export default function CarouselProdutos() {
  const [indice, setIndice] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndice((prev) => (prev + 1) % produtos.length);
    }, 3000);
    return () => clearInterval(intervalo);
  }, []);

  return (
    <section
      style={{
        padding: "4rem 2rem",
        textAlign: "center",
        backgroundColor: "#f1f5f9",
      }}
    >
      <h2>🕶️ Nossos Modelos</h2>
      <div
        style={{
          marginTop: "2rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "2rem",
          transition: "all 0.5s ease",
        }}
      >
        <img
          src={produtos[indice].imagem}
          alt={produtos[indice].nome}
          style={{
            width: "300px",
            height: "200px",
            borderRadius: "15px",
            objectFit: "cover",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          }}
        />
      </div>
      <h3 style={{ marginTop: "1rem" }}>{produtos[indice].nome}</h3>
    </section>
  );
}
