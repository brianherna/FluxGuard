import {
  Cpu,
  RadioTower,
  Cloud,
  Zap,
} from "lucide-react";

const steps = [
  {
    icon: Zap,
    title: "Sistema Eléctrico",
    description:
      "Los sensores capturan variables importantes como voltaje, corriente y temperatura.",
  },
  {
    icon: Cpu,
    title: "Nodo IoT",
    description:
      "Un ESP32 procesa la información obtenida por los sensores.",
  },
  {
    icon: RadioTower,
    title: "Comunicación LoRa",
    description:
      "Los datos viajan mediante tecnología LoRa para lograr mayor alcance y eficiencia.",
  },
  {
    icon: Cloud,
    title: "FluxGuard",
    description:
      "La plataforma recibe, organiza y presenta la información al usuario.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-slate-900 py-32">

      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-5xl font-bold text-center">
          ¿Cómo funciona?
        </h2>

        <p className="text-center text-slate-400 mt-6 max-w-3xl mx-auto">
          FluxGuard transforma los datos capturados por los sensores
          en información útil para el monitoreo y la prevención de fallas.
        </p>

        <div className="grid lg:grid-cols-4 gap-8 mt-20">

          {steps.map((step, index) => {

            const Icon = step.icon;

            return (
              <div
                key={index}
                className="relative rounded-3xl border border-slate-800 bg-slate-950 p-8 hover:border-cyan-400 transition duration-300 hover:-translate-y-2"
              >

                <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-6">

                  <Icon
                    size={34}
                    className="text-cyan-400"
                  />

                </div>

                <h3 className="text-2xl font-bold">

                  {step.title}

                </h3>

                <p className="text-slate-400 mt-5 leading-7">

                  {step.description}

                </p>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}