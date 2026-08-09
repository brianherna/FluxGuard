import Container from "../ui/Container";

import {
  Cpu,
  RadioTower,
  Database,
  Cloud,
  Smartphone,
  Monitor,
} from "lucide-react";

const technologies = [
  {
    title: "ESP32",
    icon: Cpu,
    description:
      "Microcontrolador encargado de adquirir información de los sensores.",
  },
  {
    title: "LoRa",
    icon: RadioTower,
    description:
      "Comunicación inalámbrica de largo alcance y bajo consumo.",
  },
  {
    title: "Base de Datos",
    icon: Database,
    description:
      "Almacenamiento seguro del historial de mediciones.",
  },
  {
    title: "Cloud",
    icon: Cloud,
    description:
      "Procesamiento y disponibilidad de la información.",
  },
  {
    title: "Aplicación Web",
    icon: Monitor,
    description:
      "Panel intuitivo para consultar datos desde cualquier navegador.",
  },
  {
    title: "Responsive",
    icon: Smartphone,
    description:
      "Acceso desde computadora, tablet o teléfono.",
  },
];

export default function Technologies() {
  return (
  <section id="tecno" className="py-28 bg-slate-900">
    <Container>

      <h2 className="text-5xl font-bold text-center">
        Tecnologías
      </h2>

        <p className="text-center text-slate-400 mt-6 max-w-3xl mx-auto">
          FluxGuard integra tecnologías modernas para ofrecer una solución
          robusta, escalable y preparada para proyectos de Internet de las Cosas.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-20">

          {technologies.map((tech) => {

            const Icon = tech.icon;

            return (

              <div
                key={tech.title}
                className="
                  rounded-3xl
                  bg-slate-950
                  border
                  border-slate-800
                  p-8
                  transition-all
                  duration-300
                  hover:border-cyan-400
                  hover:-translate-y-2
                  hover:shadow-[0_0_30px_rgba(34,211,238,.25)]
                "
              >

                <Icon
                  size={48}
                  className="text-cyan-400"
                />

                <h3 className="text-2xl font-bold mt-6">
                  {tech.title}
                </h3>

                <p className="text-slate-400 mt-4 leading-7">
                  {tech.description}
                </p>

              </div>

            );

          })}

        </div>

      </Container>

    </section>
  );
}