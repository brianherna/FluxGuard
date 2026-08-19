import { Activity, ArrowUpRight, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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
      <a href="#inicio" className="navbar-logo" onClick={() => setOpen(false)}>
        <span className="navbar-logo-icon">
          <Activity size={21} />
        </span>
        <span>
          Flux<span>Guard</span>
        </span>
      </a>

      <nav className={`navbar-links ${open ? "is-open" : ""}`}>
        {links.map(([label, href]) => (
          <a key={href} href={href} onClick={() => goTo(href)}>
            {label}
          </a>
        ))}
      </nav>

      <div className="navbar-actions">
        <Link to="/login" className="navbar-login-secondary">
          Iniciar sesión
        </Link>
        <a
          href="https://flux-panel.onrender.com"
          target="_blank"
          rel="noreferrer"
          className="navbar-login"
        >
          Panel
          <ArrowUpRight size={16} />
        </a>
      </div>

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
