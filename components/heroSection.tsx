"use client";
import { motion } from "framer-motion";


export default function heroSection() {
  return (
    <section
      style={{
        width: "100%",
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
          textShadow: "1px 1px 4px rgba(0,0,0,0.6)",
          color: "#4B0082"
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
          color: "#4B0082"
        }}
      >
        Tecnologia e estilo para enxergar o futuro.
      </motion.p>

      <motion.a
        href="/customizar"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        whileHover={{
          scale: 1.05,
          boxShadow: "0px 0px 12px #6A0DAD",
          transition: { duration: 0.2 }
        }}
        style={{
          marginTop: "2rem",
          backgroundColor: "#4B0082",
          color: "white",
          padding: "0.9rem 1.8rem",
          borderRadius: "10px",
          textDecoration: "none",
          fontSize: "1.1rem",
          display: "inline-block",
          cursor: "pointer",
        }}
      >
        Personalizar Agora
      </motion.a>
    </section>
  );
}
