import Container from "../ui/Container";
import Card from "../ui/Card";

import {
  Activity,
  BellRing,
  ShieldCheck,
  Database,
  Cloud,
  Gauge,
} from "lucide-react";

export default function Features() {
  return (
    <section className="py-32 bg-slate-950">
      <Container>

        <div className="text-center mb-20">

          <span className="text-cyan-400 uppercase tracking-[5px]">
            Características
          </span>

          <h2 className="text-5xl font-bold mt-6">
            Todo lo que necesitas
          </h2>

          <p className="text-slate-400 mt-6 max-w-3xl mx-auto">
            FluxGuard integra herramientas modernas para monitorear,
            analizar y proteger infraestructura eléctrica desde una sola
            plataforma.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          <Card>

            <Activity className="text-cyan-400" size={42} />

            <h3 className="text-2xl font-bold mt-6">
              Monitoreo 24/7
            </h3>

            <p className="text-slate-400 mt-4">
              Información disponible en todo momento.
            </p>

          </Card>

          <Card>

            <BellRing className="text-cyan-400" size={42} />

            <h3 className="text-2xl font-bold mt-6">
              Alertas Inteligentes
            </h3>

            <p className="text-slate-400 mt-4">
              Notificaciones automáticas cuando ocurre una anomalía.
            </p>

          </Card>

          <Card>

            <ShieldCheck className="text-cyan-400" size={42} />

            <h3 className="text-2xl font-bold mt-6">
              Seguridad
            </h3>

            <p className="text-slate-400 mt-4">
              Protección de la información mediante autenticación.
            </p>

          </Card>

          <Card>

            <Database className="text-cyan-400" size={42} />

            <h3 className="text-2xl font-bold mt-6">
              Historial
            </h3>

            <p className="text-slate-400 mt-4">
              Consulta registros anteriores cuando lo necesites.
            </p>

          </Card>

          <Card>

            <Cloud className="text-cyan-400" size={42} />

            <h3 className="text-2xl font-bold mt-6">
              Escalable
            </h3>

            <p className="text-slate-400 mt-4">
              Preparado para crecer junto con tu proyecto.
            </p>

          </Card>

          <Card>

            <Gauge className="text-cyan-400" size={42} />

            <h3 className="text-2xl font-bold mt-6">
              Dashboard
            </h3>

            <p className="text-slate-400 mt-4">
              Visualiza métricas de forma clara y sencilla.
            </p>

          </Card>

        </div>

      </Container>
    </section>
  );
}