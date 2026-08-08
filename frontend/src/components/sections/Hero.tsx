export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-950 flex items-center">

      {/* Fondo decorativo */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-cyan-500/20 blur-3xl" />

        <div className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-blue-700/20 blur-3xl" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">

        {/* Texto */}
        <div>

          <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-400 text-sm tracking-[0.25em] uppercase">
            Internet of Things
          </span>

          <h1 className="mt-8 text-5xl md:text-7xl font-black leading-tight">

            Monitoreo Inteligente

            <span className="block text-cyan-400">
              para Redes Eléctricas
            </span>

          </h1>

          <p className="mt-8 text-slate-400 text-lg leading-8 max-w-xl">

            FluxGuard es una plataforma de monitoreo que integra
            sensores IoT, ESP32 y comunicación LoRa para detectar
            anomalías, visualizar datos en tiempo real y generar
            alertas inteligentes desde cualquier lugar.

          </p>

          <div className="flex flex-wrap gap-5 mt-10">

            <button className="px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 transition font-bold shadow-lg shadow-cyan-500/20">

              Comenzar

            </button>

            <button className="px-8 py-4 rounded-xl border border-cyan-400 text-cyan-400 hover:bg-cyan-500 hover:text-white transition">

              Ver proyecto

            </button>

          </div>

          <div className="flex gap-10 mt-12">

          </div>

        </div>

      </div>

    </section>
  );
}