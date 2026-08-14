import { motion } from "framer-motion";
import {
  Activity,
  BarChart3,
  Cloud,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";

const features = [
  {
    number: "01",
    title: "Monitoreo",
    description:
      "Visualiza el comportamiento de tus sistemas y consulta información en tiempo real.",
    icon: Activity,
    type: "monitor",
  },
  {
    number: "02",
    title: "Análisis",
    description:
      "Convierte grandes cantidades de datos en métricas claras para comprender lo que sucede.",
    icon: BarChart3,
    type: "analytics",
  },
  {
    number: "03",
    title: "Nube",
    description:
      "Centraliza tu información y accede a ella desde cualquier lugar de forma sencilla.",
    icon: Cloud,
    type: "cloud",
  },
  {
    number: "04",
    title: "Seguridad",
    description:
      "Protege la información mediante acceso controlado y una infraestructura diseñada para mantener tus datos seguros.",
    icon: ShieldCheck,
    type: "security",
  },
];

export default function Features() {
  return (
    <section id="tecnologia" className="features-section">
      <div className="features-container">
        {/* HEADER */}
        <motion.div
          className="features-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <span className="section-eyebrow">
              <span />
              CARACTERÍSTICAS
            </span>

            <h2>
              Todo lo que necesitas
              <span> para monitorear.</span>
            </h2>
          </div>

          <p>
            Herramientas pensadas para transformar información compleja en una
            experiencia simple, visual y útil.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="features-grid">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.article
                key={feature.number}
                className={`feature-card ${feature.type}`}
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                }}
              >
                {/* TOP */}
                <div className="feature-top">
                  <span className="feature-number">
                    {feature.number}
                  </span>

                  <div className="feature-icon">
                    <Icon size={19} />
                  </div>
                </div>

                {/* VISUAL */}
                <div className="feature-visual">
                  {feature.type === "monitor" && (
                    <div className="monitor-visual">
                      <div className="monitor-grid" />

                      <motion.div
                        className="monitor-line"
                        animate={{
                          x: ["-20%", "20%", "-20%"],
                        }}
                        transition={{
                          duration: 5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />

                      <motion.div
                        className="monitor-pulse"
                        animate={{
                          scale: [0.8, 1.3, 0.8],
                          opacity: [0.4, 1, 0.4],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                      />
                    </div>
                  )}

                  {feature.type === "analytics" && (
                    <div className="analytics-visual">
                      {[40, 65, 52, 85, 62, 94].map((height, i) => (
                        <motion.span
                          key={i}
                          initial={{
                            height: 0,
                          }}
                          whileInView={{
                            height: `${height}%`,
                          }}
                          viewport={{
                            once: true,
                          }}
                          transition={{
                            duration: 0.7,
                            delay: i * 0.08,
                          }}
                        />
                      ))}
                    </div>
                  )}

                  {feature.type === "cloud" && (
                    <div className="cloud-visual">
                      <motion.div
                        className="cloud-core"
                        animate={{
                          y: [-4, 4, -4],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <Cloud size={42} />
                      </motion.div>

                      <motion.div
                        className="cloud-particle particle-1"
                        animate={{
                          y: [30, -30],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 2.2,
                          repeat: Infinity,
                        }}
                      />

                      <motion.div
                        className="cloud-particle particle-2"
                        animate={{
                          y: [35, -35],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          delay: 0.7,
                        }}
                      />

                      <motion.div
                        className="cloud-particle particle-3"
                        animate={{
                          y: [25, -40],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 2.8,
                          repeat: Infinity,
                          delay: 1.2,
                        }}
                      />
                    </div>
                  )}

                  {feature.type === "security" && (
                    <div className="security-visual">
                      <motion.div
                        className="security-ring"
                        animate={{
                          rotate: 360,
                        }}
                        transition={{
                          duration: 12,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />

                      <motion.div
                        className="security-shield"
                        animate={{
                          scale: [1, 1.05, 1],
                        }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                        }}
                      >
                        <ShieldCheck size={42} />
                      </motion.div>
                    </div>
                  )}
                </div>

                {/* CONTENT */}
                <div className="feature-content">
                  <h3>{feature.title}</h3>

                  <p>{feature.description}</p>
                </div>

                {/* ARROW */}
                <div className="feature-arrow">
                  <ArrowUpRight size={19} />
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}