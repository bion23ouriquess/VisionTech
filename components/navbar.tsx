import Link from "next/link";

export default function Navbar() {
  return (
    <header
      style={{
        backgroundColor: "#4B0082",
        padding: "1rem 2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div style={{ color: "gray" }}>
        <h1>VisionTech</h1>
      </div>
      <nav>
        <Link href="/" style={{ marginRight: "1.5rem", color: "gray", fontSize: "1.5rem" }}>
          Início
        </Link>
        <Link href="/customizar" style={{ marginRight: "1.5rem", color: "gray", fontSize: "1.5rem" }}>
          Personalizar
        </Link>
        <Link href="/pedidos" style={{ marginRight: "1.5rem", color: "gray", fontSize: "1.5rem" }}>
          Pedidos
        </Link>
        <Link href="/admin" style={{ color: "gray", fontSize: "1.5rem" }}>
          Admin
        </Link>
      </nav>
    </header>
  );
}
