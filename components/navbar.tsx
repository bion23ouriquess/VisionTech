import Link from "next/link";

export default function Navbar() {
  return (
    <header
      style={{
        backgroundColor: "#0f172a",
        color: "white",
        padding: "1rem 2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2>🕶️ Smart Glass Factory</h2>
      <nav>
        <Link href="/" style={{ marginRight: "1.5rem", color: "white" }}>
          Início
        </Link>
        <Link href="/customizar" style={{ marginRight: "1.5rem", color: "white" }}>
          Personalizar
        </Link>
        <Link href="/pedidos" style={{ marginRight: "1.5rem", color: "white" }}>
          Pedidos
        </Link>
        <Link href="/admin" style={{ color: "white" }}>
          Admin
        </Link>
      </nav>
    </header>
  );
}
