import { motion } from "framer-motion";
import {
  Activity,
  BellRing,
  BrainCircuit,
  ArrowUpRight,
} from "lucide-react";

const points = [
  {
    number: "01",
    icon: Activity,
    title: "Monitoreo continuo",
    description:
      "Obtén información en tiempo real sobre el comportamiento de tus sistemas.",
  },
  {
    number: "02",
    icon: BrainCircuit,
    title: "Análisis inteligente",
    description:
      "Identifica patrones, cambios y comportamientos que requieren atención.",
  },
  {
    number: "03",
    icon: BellRing,
    title: "Alertas inmediatas",
    description:
      "Recibe información cuando ocurre un evento que necesita ser revisado.",
  },
];

export default function About() {
  return (
    <section id="proyecto" className="about-section">
      <div className="about-container">
        {/* ENCABEZADO */}
        <motion.div
          className="about-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-eyebrow">
            <span />
            EL PROYECTO
          </span>

          <h2>
            Datos que se convierten
            <span> en decisiones.</span>
          </h2>
        </motion.div>

        {/* CONTENIDO */}
        <div className="about-layout">
          {/* VISUAL */}
          <motion.div
            className="about-visual"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8 }}
            whileHover={{
              scale: 1.015,
            }}
          >
            <div className="about-visual-grid" />

            <div className="about-glow" />

            {/* Líneas de datos */}
            <div className="data-line line-a" />
            <div className="data-line line-b" />
            <div className="data-line line-c" />

            {/* Centro */}
            <motion.div
              className="system-core"
              animate={{
                boxShadow: [
                  "0 0 20px rgba(34,211,238,.12)",
                  "0 0 45px rgba(34,211,238,.3)",
                  "0 0 20px rgba(34,211,238,.12)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            >
              <Activity size={30} />
            </motion.div>

            {/* Nodos */}
            <motion.div
              className="about-node node-a"
              animate={{ y: [-5, 5, -5] }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            >
              <span />
            </motion.div>

            <motion.div
              className="about-node node-b"
              animate={{ y: [5, -5, 5] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
              }}
            >
              <span />
            </motion.div>

            <motion.div
              className="about-node node-c"
              animate={{ y: [-4, 6, -4] }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            >
              <span />
            </motion.div>

            <div className="about-label">
              <span>FLUXGUARD</span>
              <strong>INTELLIGENT MONITORING</strong>
            </div>

            <div className="about-number">01</div>

            <div className="about-corner">
              <ArrowUpRight size={18} />
            </div>
          </motion.div>

          {/* TEXTO */}
          <motion.div
            className="about-content"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <p className="about-intro">
              FluxGuard es una plataforma de monitoreo diseñada para
              transformar información compleja en una experiencia clara,
              visual e intuitiva.
            </p>

            <p className="about-description">
              Centraliza la información obtenida de los sistemas y permite
              visualizar su comportamiento, analizar cambios y detectar
              situaciones que requieren atención.
            </p>

            <div className="about-points">
              {points.map((point, index) => {
                const Icon = point.icon;

                return (
                  <motion.div
                    className="about-point"
                    key={point.number}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.3 + index * 0.12,
                    }}
                  >
                    <div className="point-icon">
                      <Icon size={18} />
                    </div>

                    <div className="point-text">
                      <div className="point-title">
                        <span>{point.number}</span>
                        <h3>{point.title}</h3>
                      </div>

                      <p>{point.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}