"use client";
import { motion } from "framer-motion";


export default function heroSection() {
  return (
    <section
      style={{
        backgroundImage: "url('/oculos-hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        textAlign: "center",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          fontSize: "3.5rem",
          fontWeight: "bold",
          textShadow: "3px 3px 9px rgba(0,0,0,0.6)",
          color: "gray"
        }}
      >
        VisionTech Factory
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        style={{
          fontSize: "1.3rem",
          marginTop: "1rem",
          textShadow: "2px 2px 8px rgba(0,0,0,0.6)",
          color: "gray"
        }}
      >
        Tecnologia e estilo para enxergar o futuro.
      </motion.p>

      <motion.a
        href="/customizar"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        style={{
          marginTop: "2rem",
          backgroundColor: "#2563eb",
          color: "white",
          padding: "0.9rem 1.8rem",
          borderRadius: "10px",
          textDecoration: "none",
          fontSize: "1.1rem",
        }}
      >
        Personalizar Agora
      </motion.a>
    </section>
  );
}
