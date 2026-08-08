import { ShieldCheck, Activity, BellRing } from "lucide-react";
import Container from "../ui/Container";
import Card from "../ui/Card";

export default function About() {
  return (
    <section
      id="proyecto"
      className="py-32 bg-slate-950 text-white"
    >
      <Container>
        <div className="max-w-3xl mx-auto text-center">

          <span
            className="
            inline-block
            px-5
            py-2
            rounded-full
            border
            border-cyan-400/30
            bg-cyan-500/10
            text-cyan-300
            uppercase
            tracking-[4px]
            text-sm
            "
          >
            Sobre FluxGuard
          </span>

          <h2 className="text-5xl font-bold mt-8">
            ¿Qué es <span className="text-cyan-400">FluxGuard</span>?
          </h2>

          <p className="text-slate-400 text-lg leading-8 mt-8">
            FluxGuard es una plataforma desarrollada para supervisar
            sistemas eléctricos mediante tecnologías IoT. Nuestro objetivo
            es detectar anomalías, prevenir fallas y facilitar el monitoreo
            remoto en tiempo real mediante una interfaz moderna, intuitiva
            y accesible.
          </p>

          <div className="w-28 h-1 rounded-full bg-cyan-400 mx-auto mt-10"></div>

        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">

          <Card>

            <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-6">
              <ShieldCheck
                size={34}
                className="text-cyan-400"
              />
            </div>

            <h3 className="text-2xl font-bold">
              Seguridad
            </h3>

            <p className="text-slate-400 leading-7 mt-4">
              Detecta comportamientos anómalos antes de que
              se conviertan en una falla crítica.
            </p>

          </Card>

          <Card>

            <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-6">
              <Activity
                size={34}
                className="text-cyan-400"
              />
            </div>

            <h3 className="text-2xl font-bold">
              Monitoreo
            </h3>

            <p className="text-slate-400 leading-7 mt-4">
              Supervisa toda la infraestructura eléctrica
              desde cualquier dispositivo y en tiempo real.
            </p>

          </Card>

          <Card>

            <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-6">
              <BellRing
                size={34}
                className="text-cyan-400"
              />
            </div>

            <h3 className="text-2xl font-bold">
              Alertas
            </h3>

            <p className="text-slate-400 leading-7 mt-4">
              Recibe notificaciones automáticas cuando
              el sistema detecte condiciones fuera de lo normal.
            </p>

          </Card>

        </div>

      </Container>
    </section>
  );
}