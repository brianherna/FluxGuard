import Container from "../ui/Container";
import Card from "../ui/Card";
import {
  Cpu,
  RadioTower,
  MonitorSmartphone,
} from "lucide-react";

export default function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="py-28 bg-slate-950"
    >
      <Container>

        <h2 className="text-5xl font-bold text-center">
          ¿Cómo funciona?
        </h2>

        <p className="text-slate-400 text-center max-w-3xl mx-auto mt-6 text-lg">
          FluxGuard utiliza sensores inteligentes para recopilar datos
          eléctricos y enviarlos de forma inalámbrica hacia la plataforma,
          donde son procesados y mostrados al usuario.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-20">

          <Card>
            <Cpu
              className="text-cyan-400"
              size={50}
            />

            <h3 className="text-2xl font-bold mt-6">
              Captura
            </h3>

            <p className="text-slate-400 mt-4 leading-7">
              Sensores IoT instalados en la red eléctrica recopilan
              información como voltaje, corriente y temperatura.
            </p>
          </Card>

          <Card>
            <RadioTower
              className="text-cyan-400"
              size={50}
            />

            <h3 className="text-2xl font-bold mt-6">
              Comunicación
            </h3>

            <p className="text-slate-400 mt-4 leading-7">
              Los dispositivos envían la información mediante LoRa y ESP32
              hacia un servidor seguro.
            </p>
          </Card>

          <Card>
            <MonitorSmartphone
              className="text-cyan-400"
              size={50}
            />

            <h3 className="text-2xl font-bold mt-6">
              Visualización
            </h3>

            <p className="text-slate-400 mt-4 leading-7">
              El usuario consulta los datos desde cualquier dispositivo
              mediante una plataforma moderna e intuitiva.
            </p>
          </Card>

        </div>

      </Container>
    </section>
  );
}