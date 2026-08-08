import { motion } from "framer-motion";
import {
  RadioTower,
  Network,
  Cloud,
  Activity,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Sensores",
    description:
      "Los dispositivos recopilan la información necesaria del sistema.",
    icon: RadioTower,
  },
  {
    number: "02",
    title: "Conexión",
    description:
      "La información es transmitida mediante la infraestructura de comunicación.",
    icon: Network,
  },
  {
    number: "03",
    title: "Nube",
    description:
      "Los datos son centralizados para facilitar su almacenamiento y consulta.",
    icon: Cloud,
  },
  {
    number: "04",
    title: "FluxGuard",
    description:
      "La plataforma organiza y analiza la información para facilitar su interpretación.",
    icon: Activity,
  },
];

export default function HowItWorks() {
  return (
    <section className="how-section">
      <div className="how-container">
        {/* ENCABEZADO */}
        <motion.div
          className="how-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-eyebrow">
            <span />
            ¿CÓMO FUNCIONA?
          </span>

          <h2>
            De los datos
            <span> a la información.</span>
          </h2>

          <p>
            FluxGuard conecta cada etapa del proceso para convertir la
            información recopilada en una experiencia clara y organizada.
          </p>
        </motion.div>

        {/* FLUJO */}
        <div className="how-flow">
          {/* LÍNEA DE FONDO */}
          <div className="flow-line" />

          {/* LÍNEA ANIMADA */}
          <motion.div
            className="flow-line-active"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 1.8,
              ease: "easeInOut",
            }}
          />

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                className="flow-step"
                key={step.number}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.25 + index * 0.18,
                }}
              >
                {/* NODO */}
                <div className="flow-node-wrapper">
                  <motion.div
                    className="flow-node"
                    animate={{
                      boxShadow: [
                        "0 0 0 rgba(34,211,238,0)",
                        "0 0 25px rgba(34,211,238,.25)",
                        "0 0 0 rgba(34,211,238,0)",
                      ],
                    }}
                    transition={{
                      duration: 2.8,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                  >
                    <Icon size={21} />
                  </motion.div>

                  <span className="flow-number">
                    {step.number}
                  </span>
                </div>

                {/* TEXTO */}
                <div className="flow-content">
                  <h3>{step.title}</h3>

                  <p>{step.description}</p>
                </div>

                {/* FLECHA */}
                {index < steps.length - 1 && (
                  <div className="flow-arrow">
                    <ArrowRight size={15} />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* FRASE FINAL */}
        <motion.div
          className="how-bottom"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <span />
          <p>
            Una arquitectura conectada para una visualización más inteligente.
          </p>
          <span />
        </motion.div>
      </div>
    </section>
  );
}