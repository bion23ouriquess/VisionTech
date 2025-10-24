import "./globals.css";
import Navbar from "../components/navbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body style={{ margin: 0, padding: 0, backgroundColor: "#f8f9fa" }}>
        <Navbar />
        <main style={{ padding: "2rem" }}>{children}</main>
      </body>
    </html>
  );
}
