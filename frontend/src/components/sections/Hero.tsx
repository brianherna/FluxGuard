import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import AnimatedGraph from "./AnimatedGraph";

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-grid" />

      <div className="hero-orb hero-orb-one" />
      <div className="hero-orb hero-orb-two" />

      <div className="hero-content">
        <motion.div
          className="hero-label"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="status-dot" />
          MONITOREO INTELIGENTE
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Monitoreo
          <br />

          <span>inteligente</span>

          <br />

          para redes eléctricas.
        </motion.h1>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          Visualiza, analiza y anticipa cualquier comportamiento anómalo
          mediante información obtenida en tiempo real.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          <button className="hero-primary">
            Explorar plataforma
            <ArrowRight size={17} />
          </button>

          <button className="hero-secondary">
            <Play size={16} />
            Conocer el proyecto
          </button>
        </motion.div>
      </div>

      <motion.div
        className="hero-graph-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 0.4 }}
      >
        <AnimatedGraph />
      </motion.div>

      <motion.div
        className="hero-stats"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.9 }}
      >
        <div>
          <strong>98.4%</strong>
          <span>Disponibilidad</span>
        </div>

        <div>
          <strong>124K+</strong>
          <span>Datos procesados</span>
        </div>

        <div>
          <strong>24/7</strong>
          <span>Monitoreo activo</span>
        </div>
      </motion.div>

      <motion.div
        className="hero-scroll"
        animate={{ y: [0, 7, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >
        ↓
        <span>Desliza para descubrir</span>
      </motion.div>
    </section>
  );
}