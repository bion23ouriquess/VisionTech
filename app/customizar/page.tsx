"use client";
import CustomizadorProduto from "../../components/Customizadorproduto";

export default function CustomizarPage() {
  return (
    <div style={{ width: "30%", margin: "0 auto", display: "flex", justifyContent: "center", flexDirection: "column" }}>
      <h1 style={{ textAlign: "center" }}>Personalização de Óculos</h1>
      <p style={{ textAlign: "center", marginBottom: "2rem" }}>
        Aqui selecione o modelo, lente, cor, material e o tamanho.
      </p>
      <CustomizadorProduto />
    </div>
  );
}
