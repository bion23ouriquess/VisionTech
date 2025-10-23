"use client";
import { useEffect, useState } from "react";
import axios from "axios";

type Pedido = {
  id: number;
  modelo: string;
  lente: string;
  cor: string;
  material: string;
  tamanho: string;
  status: string;
};

export default function ListaPedidos() {
  const [pedidos, setPedidos] = useState<Pedido[]>([]);
  const [loading, setLoading] = useState(true);

  const carregarPedidos = async () => {
    try {
      const res = await axios.get("http://localhost:3001/orders");
      setPedidos(res.data);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    carregarPedidos();
  }, []);

  return (
    <div>
      <button onClick={carregarPedidos} style={{ marginBottom: "1rem" }}>
        Atualizar Lista
      </button>

      {loading ? (
        <p>Carregando pedidos...</p>
      ) : pedidos.length === 0 ? (
        <p>Nenhum pedido encontrado.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {pedidos.map((p) => (
            <li
              key={p.id}
              style={{
                backgroundColor: "white",
                padding: "1rem",
                marginBottom: "1rem",
                borderRadius: "10px",
                boxShadow: "0 0 5px rgba(0,0,0,0.1)",
              }}
            >
              <strong>{p.modelo}</strong> – {p.lente}, {p.cor}, {p.material},{" "}
              {p.tamanho}
              <br />
              <em>Status: {p.status}</em>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
