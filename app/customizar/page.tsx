"use client";
import CustomizadorProduto from "../../components/Customizadorproduto";

export default function CustomizarPage() {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center" }}>🕶️ Personalize seu Óculos</h1>
      <p style={{ textAlign: "center", marginBottom: "2rem" }}>
        Escolha o modelo, lente, cor e material e crie o seu estilo.
      </p>
      <CustomizadorProduto />
    </div>
  );
}
