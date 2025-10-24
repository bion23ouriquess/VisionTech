"use client";
import { useState, useEffect } from "react";
import axios from "axios";

export default function AdminPage() {
  const [produtos, setProdutos] = useState([]);

  const carregarProdutos = async () => {
    const res = await axios.get("http://localhost:3001/produtos");
    setProdutos(res.data);
  };

  useEffect(() => {
    carregarProdutos();
  }, []);

  return (
    <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
      <h1>🧑‍💼 Painel Administrativo</h1>
      <a
        href="/admin/novo-produto"
        style={{
          display: "inline-block",
          marginBottom: "1rem",
          padding: "0.6rem 1.2rem",
          backgroundColor: "#2563eb",
          color: "white",
          borderRadius: "5px",
          textDecoration: "none",
        }}
      >
        ➕ Adicionar Novo Produto
      </a>

      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ backgroundColor: "#e2e8f0" }}>
            <th>ID</th>
            <th>Nome</th>
            <th>Preço</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((p: any) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.nome}</td>
              <td>R$ {p.preco}</td>
              <td>
                <button style={{ marginRight: "0.5rem" }}>Editar</button>
                <button
                  style={{ backgroundColor: "#dc2626", color: "white" }}
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
