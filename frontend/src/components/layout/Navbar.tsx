import { Activity, ArrowUpRight, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const links = [
  ["Inicio", "#inicio"],
  ["Proyecto", "#proyecto"],
  ["Cómo funciona", "#como-funciona"],
  ["Monitoreo", "#monitoreo"],
  ["Tecnología", "#tecno"],
  ["Recursos", "#recursos"],
  ["Contacto", "#contacto"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const goTo = (href: string) => {
    setOpen(false);
    window.location.hash = href.replace("#", "");
  };

  return (
    <motion.header
      className="navbar fixed top-0 left-0 right-0 z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* LOGO */}
      <a
        href="#inicio"
        className="navbar-logo"
        onClick={() => setOpen(false)}
      >
        <span className="navbar-logo-icon">
          <Activity size={21} />
        </span>

        <span>
          Flux<span>Guard</span>
        </span>
      </a>

      {/* LINKS */}
      <nav className={`navbar-links ${open ? "is-open" : ""}`}>
        {links.map(([label, href]) => (
          <a
            key={href}
            href={href}
            onClick={() => goTo(href)}
          >
            {label}
          </a>
        ))}
      </nav>

      {/* ACTIONS */}
      <div className="navbar-actions">

        {/* CONTACTANOS */}
        <a
          href="/register"
          className="navbar-contact"
          onClick={() => setOpen(false)}
        >
          <span>Contáctanos</span>
        </a>

        {/* PANEL */}
        <a
          href="https://flux-panel.onrender.com"
          target="_blank"
          rel="noreferrer"
          className="navbar-panel"
          onClick={() => setOpen(false)}
        >
          <span>Panel</span>
          <ArrowUpRight size={16} />
        </a>

      </div>

      {/* MOBILE */}
      <button
        type="button"
        className="navbar-mobile-toggle"
        onClick={() => setOpen((value) => !value)}
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={open}
      >
        {open ? <X size={23} /> : <Menu size={23} />}
      </button>
    </motion.header>
  );
}