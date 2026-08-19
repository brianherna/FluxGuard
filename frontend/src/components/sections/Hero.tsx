import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  Cpu,
  Gauge,
  RadioTower,
  ShieldCheck,
} from "lucide-react";
import AnimatedGraph from "./AnimatedGraph";

const highlights = [
  { icon: Cpu, label: "Adquisición", value: "ESP32" },
  { icon: RadioTower, label: "Comunicación", value: "LoRa" },
  { icon: Gauge, label: "Visualización", value: "Tiempo real" },
];

export default function Hero() {
  return (
    <section className="hero" id="inicio">
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
          PROTOTIPO IoT · FLUXGUARD
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Convierte los datos
          <br />
          <span>en información</span>
          <br />
          para tu infraestructura.
        </motion.h1>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          FluxGuard integra adquisición de datos, comunicación IoT y una
          plataforma web para visualizar el comportamiento de una
          infraestructura eléctrica de forma clara y oportuna.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          <a href="#proyecto" className="hero-primary">
            Conocer el proyecto
            <ArrowRight size={17} />
          </a>

          <a href="#como-funciona" className="hero-secondary">
            Cómo funciona
          </a>
        </motion.div>

        <motion.div
          className="hero-highlights"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
        >
          {highlights.map(({ icon: Icon, label, value }) => (
            <div className="hero-highlight" key={label}>
              <span className="hero-highlight-icon">
                <Icon size={17} />
              </span>
              <span>
                <small>{label}</small>
                <strong>{value}</strong>
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="hero-graph-container"
        initial={{ opacity: 0, x: 35 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.1, delay: 0.35 }}
      >
        <div className="hero-dashboard-card">
          <div className="hero-dashboard-top">
            <div>
              <span className="hero-dashboard-kicker">FLUXGUARD / MONITOR</span>
              <strong>Comportamiento del sistema</strong>
            </div>
            <span className="hero-live-badge">
              <span /> En línea
            </span>
          </div>

          <div className="hero-dashboard-graph">
            <AnimatedGraph />
          </div>

          <div className="hero-dashboard-footer">
            <div>
              <ShieldCheck size={15} />
              <span>Datos centralizados</span>
            </div>
            <span>IoT · análisis · visualización</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="hero-scroll"
        animate={{ y: [0, 7, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={18} />
        <span>Descubre FluxGuard</span>
      </motion.div>
    </section>
  );
}
