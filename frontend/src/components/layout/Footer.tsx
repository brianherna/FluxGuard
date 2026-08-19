import {
  Mail,
  Zap,
  ArrowUpRight,
} from "lucide-react";

import Container from "../ui/Container";

export default function Footer() {
  return (
    <footer id="contacto" className="relative overflow-hidden border-t border-slate-800 bg-slate-950">
        
      {/* Glows decorativos */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px]" />

      <Container>
        {/* CTA */}
        <div className="relative mb-16 overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 via-slate-900 to-slate-950 p-8 md:p-12">
          <div className="relative z-10 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <div className="mb-4 flex items-center gap-2">
                <span className="h-px w-8 bg-cyan-400" />

                <span className="font-mono text-xs uppercase tracking-[4px] text-cyan-400">
                  FluxGuard
                </span>
              </div>

              <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                Infraestructura inteligente.
                <span className="text-cyan-400">
                  {" "}Decisiones más rápidas.
                </span>
              </h2>

              <p className="mt-4 max-w-xl leading-7 text-slate-400">
                Monitorea, analiza y protege tu infraestructura eléctrica
                desde una sola plataforma.
              </p>
            </div>

            <a
              href="#proyecto"
              className="group flex w-fit items-center gap-2 rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-6 py-3 font-semibold text-cyan-300 transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-400 hover:text-slate-950"
            >
              Conoce FluxGuard

              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>

        {/* Contenido principal */}
        <div className="grid gap-12 pb-14 md:grid-cols-4">

          {/* Marca */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10">
                <Zap
                  size={23}
                  className="text-cyan-400"
                  fill="currentColor"
                />
              </div>

              <span className="text-2xl font-bold tracking-tight text-white">
                Flux<span className="text-cyan-400">Guard</span>
              </span>
            </div>

            <p className="mt-6 max-w-md leading-7 text-slate-400">
              Plataforma de monitoreo inteligente para infraestructura
              eléctrica. Sensores IoT, análisis en tiempo real y alertas
              automáticas en un solo panel.
            </p>

            {/* Redes sociales */}
            <div className="mt-7">
              <p className="mb-4 font-mono text-xs uppercase tracking-[3px] text-slate-500">
                Síguenos
              </p>

              <div className="flex gap-3">

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/share/194mwi3EwB/"
                  aria-label="Facebook"
                  className="group flex h-11 w-11 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-400"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5 fill-current transition-transform duration-300 group-hover:scale-110"
                  >
                    <path d="M14 8h3V4h-3c-3.31 0-5 1.79-5 5v3H6v4h3v8h4v-8h3.5l.5-4H13V9c0-.67.33-1 1-1Z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/fluxguardcorporation?utm_source=qr&igsh=eXJkcmd4cWFoejNy"
                  aria-label="Instagram"
                  className="group flex h-11 w-11 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-400"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5 fill-none stroke-current stroke-[1.8] transition-transform duration-300 group-hover:scale-110"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="5"
                    />

                    <circle
                      cx="12"
                      cy="12"
                      r="4"
                    />

                    <circle
                      cx="17.5"
                      cy="6.5"
                      r="1"
                      className="fill-current stroke-none"
                    />
                  </svg>
                </a>

              </div>
            </div>
          </div>

          {/* Plataforma */}
          <div>
            <h4 className="mb-5 font-mono text-xs uppercase tracking-[3px] text-slate-500">
              Plataforma
            </h4>

            <ul className="space-y-4 text-sm text-slate-400">
              <li>
                <a
                  href="#proyecto"
                  className="transition-colors hover:text-cyan-400"
                >
                  El proyecto
                </a>
              </li>

              <li>
                <a
                  href="#como-funciona"
                  className="transition-colors hover:text-cyan-400"
                >
                  Cómo funciona
                </a>
              </li>

              <li>
                <a
                  href="#monitoreo"
                  className="transition-colors hover:text-cyan-400"
                >
                  Monitoreo
                </a>
              </li>

              <li>
                <a
                  href="#caracteristicas"
                  className="transition-colors hover:text-cyan-400"
                >
                  
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="mb-5 font-mono text-xs uppercase tracking-[3px] text-slate-500">
              Contacto
            </h4>

            <a
              href="mailto:contacto@fluxguard.io"
              className="group flex items-center gap-3 text-sm text-slate-400 transition-colors hover:text-cyan-400"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 transition-colors group-hover:border-cyan-400/30 group-hover:bg-cyan-400/10">
                <Mail size={16} />
              </span>

              contacto@fluxguard.io
            </a>

            <div className="mt-6 flex items-center gap-2 text-xs text-slate-600">
              <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
              Sistema operativo · 24/7
            </div>
          </div>
        </div>

        {/* Parte inferior */}
        <div className="flex flex-col gap-4 border-t border-slate-800 py-7 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © 2026 FluxGuard. Todos los derechos reservados.
          </span>

          <span className="font-mono">
            IoT · MONITOREO · ANÁLISIS
          </span>
        </div>
      </Container>
    </footer>
  );
}