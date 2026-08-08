import { Zap, GitBranch, Mail } from "lucide-react";
import Container from "../ui/Container";

export default function Footer() {
  return (
    <footer className="bg-[var(--bg)] border-t border-[var(--line)] py-16">
      <Container>
        <div className="grid md:grid-cols-[1.3fr_1fr_1fr] gap-12">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-md bg-[#2be3c7]/10 border border-[#2be3c7]/30 flex items-center justify-center">
                <Zap size={16} className="text-[#2be3c7]" strokeWidth={2.5} />
              </span>
              <span className="font-display font-semibold text-lg">
                Flux<span className="text-[#2be3c7]">Guard</span>
              </span>
            </div>
            <p className="text-[var(--muted)] mt-5 leading-7 max-w-sm">
              Plataforma de monitoreo inteligente para infraestructura eléctrica.
              Sensores IoT, análisis en tiempo real y alertas automáticas en un
              solo panel.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-[3px] text-[var(--muted-2)] mb-5">
              Plataforma
            </h4>
            <ul className="space-y-3 text-[var(--muted)]">
              <li><a href="#proyecto" className="hover:text-[#2be3c7] transition-colors">El proyecto</a></li>
              <li><a href="#como-funciona" className="hover:text-[#2be3c7] transition-colors">Cómo funciona</a></li>
              <li><a href="#monitoreo" className="hover:text-[#2be3c7] transition-colors">Monitoreo en vivo</a></li>
              <li><a href="#caracteristicas" className="hover:text-[#2be3c7] transition-colors">Características</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-[3px] text-[var(--muted-2)] mb-5">
              Contacto
            </h4>
            <ul className="space-y-3 text-[var(--muted)]">
              <li className="flex items-center gap-2">
                <Mail size={15} className="text-[#2be3c7]" />
                contacto@fluxguard.io
              </li>
              <li className="flex items-center gap-2">
                <GitBranch size={15} className="text-[#2be3c7]" />
                github.com/fluxguard
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-[var(--line)] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[var(--muted-2)]">
          <span>© 2026 FluxGuard. Todos los derechos reservados.</span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2be3c7] live-dot" />
            Sistema operativo · 24/7
          </span>
        </div>
      </Container>
    </footer>
  );
}
