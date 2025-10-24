"use client";
import { useState } from "react";
import axios from "axios";

export default function NovoProduto() {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [status, setStatus] = useState("");

  const salvarProduto = async () => {
    try {
      await axios.post("http://localhost:3001/produtos", {
        nome,
        preco: parseFloat(preco),
      });
      setStatus("✅ Produto adicionado com sucesso!");
      setNome("");
      setPreco("");
    } catch (err) {
      console.error(err);
      setStatus("❌ Erro ao salvar produto.");
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto" }}>
      <h1>➕ Novo Produto</h1>
      <input
        type="text"
        placeholder="Nome do produto"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        style={{ width: "100%", padding: "0.5rem", marginBottom: "1rem" }}
      />
      <input
        type="number"
        placeholder="Preço"
        value={preco}
        onChange={(e) => setPreco(e.target.value)}
        style={{ width: "100%", padding: "0.5rem", marginBottom: "1rem" }}
      />
      <button
        onClick={salvarProduto}
        style={{
          backgroundColor: "#2563eb",
          color: "white",
          padding: "0.6rem 1.2rem",
          borderRadius: "6px",
          border: "none",
        }}
      >
        Salvar
      </button>
      <p style={{ marginTop: "1rem", color: "#2563eb" }}>{status}</p>
    </div>
  );
}
