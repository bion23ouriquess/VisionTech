
"use client";
import ListaPedidos from "../../components/Listapedidos";

export default function PedidosPage() {
  return (
    <div style={{ maxWidth: "900px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center" }}>📦 Meus Pedidos</h1>
      <p style={{ textAlign: "center", marginBottom: "2rem" }}>
        Acompanhe aqui todos os pedidos realizados e seus status de produção.
      </p>
      <ListaPedidos />
    </div>
  );
}
