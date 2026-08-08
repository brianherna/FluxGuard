export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">

      <h1 className="text-6xl font-black text-white">
        Monitoreo Inteligente
      </h1>

      <span className="text-cyan-400">
        para Redes Eléctricas
      </span>

      <p className="max-w-2xl mt-8 text-slate-400 text-lg">
        FluxGuard utiliza IoT, ESP32, LoRa y análisis en tiempo real para
        supervisar instalaciones eléctricas, detectar anomalías y generar
        alertas antes de que ocurra una falla.
      </p>

      <div className="flex gap-5 mt-10">

        <button className="bg-cyan-500 hover:bg-cyan-400 px-8 py-3 rounded-xl font-bold transition">
          Comenzar
        </button>

        <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-xl hover:bg-cyan-500 hover:text-white transition">
          Saber más
        </button>

      </div>

    </section>
  );
}