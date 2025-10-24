import HeroCarousel from "../components/heroSection";

export default function HomePage() {
  return (
    <div>
      <HeroCarousel />
      <section style={{ padding: "4rem 2rem", textAlign: "center" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: "600" }}>Destaques</h2>
        <p style={{ color: "#555", marginTop: "0.5rem" }}>
          Conheça nossos modelos mais procurados
        </p>
      </section>
    </div>
  );
}
