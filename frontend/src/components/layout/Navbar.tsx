import { useEffect, useState } from "react";
import { Menu, X, Zap } from "lucide-react";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Proyecto", href: "#proyecto" },
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Monitoreo", href: "#monitoreo" },
  { label: "Características", href: "#caracteristicas" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#090d12]/90 backdrop-blur-md border-b border-[var(--line)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between py-4">
          <a href="#inicio" className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-md bg-[#2be3c7]/10 border border-[#2be3c7]/30 flex items-center justify-center">
              <Zap size={16} className="text-[#2be3c7]" strokeWidth={2.5} />
            </span>
            <span className="font-display font-semibold text-lg tracking-tight">
              Flux<span className="text-[#2be3c7]">Guard</span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-9 font-mono text-[13px] uppercase tracking-wide text-[var(--muted)]">
            {links.map((l) => (
              <a key={l.label} href={l.href} className="hover:text-[#2be3c7] transition-colors">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <button className="font-mono text-[13px] uppercase tracking-wide text-[var(--muted)] hover:text-[var(--text)] transition-colors">
              Iniciar sesión
            </button>
            <a
              href="#monitoreo"
              className="px-5 py-2.5 rounded-lg bg-[#2be3c7] text-[#04140f] font-semibold text-sm hover:bg-[#54ecd4] transition-colors"
            >
              Ver plataforma
            </a>
          </div>

          <button
            className="lg:hidden text-[var(--text)]"
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menú"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden pb-6 flex flex-col gap-4 font-mono text-sm uppercase tracking-wide text-[var(--muted)]">
            {links.map((l) => (
              <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="hover:text-[#2be3c7]">
                {l.label}
              </a>
            ))}
            <a
              href="#monitoreo"
              onClick={() => setOpen(false)}
              className="mt-2 px-5 py-2.5 rounded-lg bg-[#2be3c7] text-[#04140f] font-semibold text-center normal-case"
            >
              Ver plataforma
            </a>
          </div>
        )}
      </Container>
    </header>
  );
}

function Container({ children }: { children: React.ReactNode }) {
  return <div className="max-w-7xl mx-auto px-6 md:px-8">{children}</div>;
}
