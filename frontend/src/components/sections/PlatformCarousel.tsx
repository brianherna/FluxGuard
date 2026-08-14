import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Activity,
  BarChart3,
  BellRing,
  History,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

const slides = [
  {
    number: "01",
    title: "Monitoreo en tiempo real",
    description:
      "Visualiza el comportamiento de tus sistemas y consulta información al instante.",
    icon: Activity,
    type: "monitor",
  },
  {
    number: "02",
    title: "Análisis avanzado",
    description:
      "Interpreta los datos mediante gráficas y métricas fáciles de comprender.",
    icon: BarChart3,
    type: "analytics",
  },
  {
    number: "03",
    title: "Alertas y notificaciones",
    description:
      "Mantente informado cuando se detecte un comportamiento que requiera atención.",
    icon: BellRing,
    type: "alerts",
  },
  {
    number: "04",
    title: "Historial y reportes",
    description:
      "Consulta información anterior y genera reportes para analizar tendencias.",
    icon: History,
    type: "history",
  },
];

export default function PlatformCarousel() {
  const [active, setActive] = useState(0);

  const next = () => {
    setActive((current) => (current + 1) % slides.length);
  };

  const previous = () => {
    setActive(
      (current) => (current - 1 + slides.length) % slides.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="recursos" className="platform-section">
      <div className="platform-container">
        {/* HEADER */}
        <motion.div
          className="platform-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <span className="section-eyebrow">
              <span />
              PLATAFORMA
            </span>

            <h2>
              Explora la
              <span> plataforma.</span>
            </h2>
          </div>

          <p>
            Conoce las herramientas que convierten los datos en información
            clara y útil.
          </p>
        </motion.div>

        {/* CARRUSEL */}
        <div className="platform-carousel">
          <button
            className="carousel-arrow carousel-prev"
            onClick={previous}
            aria-label="Anterior"
          >
            <ArrowLeft size={18} />
          </button>

          <div className="carousel-window">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${active * 25}%)`,
              }}
            >
              {slides.map((slide) => {
                const Icon = slide.icon;

                return (
                  <div className="carousel-slide" key={slide.number}>
                    <motion.article
                      className="platform-card"
                      whileHover={{
                        y: -8,
                        scale: 1.025,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                    >
                      {/* VISUAL */}
                      <div className={`platform-visual ${slide.type}`}>
                        <div className="visual-header">
                          <span />
                          <span />
                          <span />
                        </div>

                        <div className="visual-content">
                          {slide.type === "monitor" && (
                            <>
                              <div className="mini-chart">
                                <div />
                                <div />
                                <div />
                                <div />
                                <div />
                              </div>

                              <div className="mini-stats">
                                <span />
                                <span />
                                <span />
                              </div>
                            </>
                          )}

                          {slide.type === "analytics" && (
                            <div className="bar-chart">
                              <i />
                              <i />
                              <i />
                              <i />
                              <i />
                              <i />
                            </div>
                          )}

                          {slide.type === "alerts" && (
                            <div className="alert-visual">
                              <div className="alert-circle">
                                <Icon size={27} />
                              </div>

                              <span>ALERTA DETECTADA</span>
                            </div>
                          )}

                          {slide.type === "history" && (
                            <div className="history-chart">
                              <div />
                              <div />
                              <div />
                              <div />
                            </div>
                          )}
                        </div>

                        <div className="visual-overlay" />
                      </div>

                      {/* INFO */}
                      <div className="platform-info">
                        <div className="platform-number">
                          {slide.number}

                          <Icon size={16} />
                        </div>

                        <h3>{slide.title}</h3>

                        <p>{slide.description}</p>

                        <span className="platform-link">
                          Explorar
                          <ArrowRight size={15} />
                        </span>
                      </div>
                    </motion.article>
                  </div>
                );
              })}
            </div>
          </div>

          <button
            className="carousel-arrow carousel-next"
            onClick={next}
            aria-label="Siguiente"
          >
            <ArrowRight size={18} />
          </button>
        </div>

        {/* DOTS */}
        <div className="carousel-dots">
          {slides.map((slide, index) => (
            <button
              key={slide.number}
              className={index === active ? "active" : ""}
              onClick={() => setActive(index)}
              aria-label={`Ir a ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}