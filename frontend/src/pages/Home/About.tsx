import {
  ShieldCheck,
  Activity,
  BellRing,
} from "lucide-react";

export default function About() {
  return (
    <section className="bg-slate-950 py-32">

      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-5xl font-bold text-center">

          ¿Qué es <span className="text-cyan-400">FluxGuard</span>?

        </h2>

        <p className="text-center text-slate-400 max-w-3xl mx-auto mt-8 text-lg leading-8">

          FluxGuard es una plataforma desarrollada para supervisar
          sistemas eléctricos mediante tecnologías IoT. Nuestro objetivo
          es detectar anomalías, prevenir fallas y facilitar el monitoreo
          remoto en tiempo real mediante una interfaz moderna y accesible.

        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-20">

          <div className="rounded-3xl bg-slate-900 border border-slate-800 p-8 hover:border-cyan-400 transition hover:-translate-y-2 duration-300">

            <ShieldCheck
              size={48}
              className="text-cyan-400"
            />

            <h3 className="text-2xl font-bold mt-6">

              Seguridad

            </h3>

            <p className="text-slate-400 mt-4 leading-7">

              Detecta comportamientos anómalos antes de que se conviertan
              en una falla crítica.

            </p>

          </div>

          <div className="rounded-3xl bg-slate-900 border border-slate-800 p-8 hover:border-cyan-400 transition hover:-translate-y-2 duration-300">

            <Activity
              size={48}
              className="text-cyan-400"
            />

            <h3 className="text-2xl font-bold mt-6">

              Monitoreo

            </h3>

            <p className="text-slate-400 mt-4 leading-7">

              Visualiza información importante desde cualquier dispositivo
              con una interfaz intuitiva.

            </p>

          </div>

          <div className="rounded-3xl bg-slate-900 border border-slate-800 p-8 hover:border-cyan-400 transition hover:-translate-y-2 duration-300">

            <BellRing
              size={48}
              className="text-cyan-400"
            />

            <h3 className="text-2xl font-bold mt-6">

              Alertas

            </h3>

            <p className="text-slate-400 mt-4 leading-7">

              Recibe notificaciones cuando el sistema detecte condiciones
              fuera de los parámetros establecidos.

            </p>

          </div>

        </div>

      </div>

    </section>
  );
}