export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

        <h1 className="text-2xl font-bold text-cyan-400">
          FluxGuard
        </h1>

        <nav className="hidden md:flex gap-8 text-slate-300">
          <a href="#" className="hover:text-cyan-400 transition">
            Inicio
          </a>

          <a href="#" className="hover:text-cyan-400 transition">
            Proyecto
          </a>

          <a href="#" className="hover:text-cyan-400 transition">
            Características
          </a>

          <a href="#" className="hover:text-cyan-400 transition">
            Contacto
          </a>
        </nav>

        <a
          href="https://flux-panel.onrender.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-cyan-500 hover:bg-cyan-400 transition px-5 py-2 rounded-lg font-semibold text-slate-950"
        >
          Iniciar sesión
        </a>

      </div>
    </header>
  );
}