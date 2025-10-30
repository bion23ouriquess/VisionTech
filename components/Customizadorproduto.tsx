"use client";
import { useState } from "react";
import axios from "axios";

export default function CustomizadorProduto() {
  const [form, setForm] = useState({
    modelo: "",
    lente: "",
    cor: "",
    material: "",
    tamanho: "",
  });
  const [status, setStatus] = useState("");
  const [pedido, setPedido] = useState<any>(null);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const enviarPedido = async () => {
    try {
      setStatus("Enviando pedido...");
      const res = await axios.post("http://localhost:3001/orders", form);
      setPedido(res.data);
      setStatus("✅ Pedido enviado com sucesso!");
    } catch (err) {
      console.error(err);
      setStatus("❌ Erro ao enviar pedido.");
    }
  };

  return (
    <div style={{
      backgroundColor: "white",
      borderRadius: "10px",
      boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center"
    }}>
      <div style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
      >

        <h3>Selecione as opções abaixo:</h3>
        <p>Confirme com o cliente antes de finalizar pedido!</p>


        <label>Modelo:</label>
        <select style={{ width: "75%" }} name="modelo" onChange={handleChange}>
          <option value="">Selecione</option>
          <option value="Aviador">Aviador</option>
          <option value="Redondo">Redondo</option>
          <option value="Quadrado">Quadrado</option>
        </select>

        <label>Lente:</label>
        <select style={{ width: "75%" }} name="lente" onChange={handleChange}>
          <option value="">Selecione</option>
          <option value="Transparente">Transparente</option>
          <option value="Escura">Escura</option>
          <option value="Fotocromática">Fotocromática</option>
        </select>

        <label>Cor:</label>
        <select style={{ width: "75%" }} name="cor" onChange={handleChange}>
          <option value="">Selecione</option>
          <option value="Preto">Preto</option>
          <option value="Dourado">Dourado</option>
          <option value="Prata">Prata</option>
        </select>

        <label>Material:</label>
        <select style={{ width: "75%" }} name="material" onChange={handleChange}>
          <option value="">Selecione</option>
          <option value="Metal">Metal</option>
          <option value="Plástico">Plástico</option>
          <option value="Titanium">Titanium</option>
        </select>

        <label>Tamanho:</label>
        <select style={{ width: "75%" }} name="tamanho" onChange={handleChange}>
          <option value="">Selecione</option>
          <option value="Pequeno">Pequeno</option>
          <option value="Médio">Médio</option>
          <option value="Grande">Grande</option>
        </select>

        <button onClick={enviarPedido} style={{ marginTop: "1rem", width: "75%" }}>
          Enviar Pedido
        </button>

        <p style={{ marginTop: "1rem", color: "#2563eb" }}>{status}</p>

      </div >
      {
        pedido && (
          <div
            style={{
              marginTop: "1rem",
              border: "1px solid #ddd",
              padding: "1rem",
              borderRadius: "8px",
              backgroundColor: "#f3f4f6",
            }}
          >
            <h4>Resumo do Pedido</h4>
            <p>ID: {pedido.id}</p>
            <p>Status: {pedido.status}</p>
          </div>
        )
      }
    </div >
  );
}
