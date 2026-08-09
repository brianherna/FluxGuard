import { Activity } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <motion.header
      className="navbar fixed top-0 left-0 right-0 z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* LOGO */}
      <a href="#inicio" className="navbar-logo">
        <Activity size={24} />

        <span>
          Flux<span>Guard</span>
        </span>
      </a>

      {/* NAVEGACIÓN */}
      <nav className="navbar-links">

        <a href="#inicio">
          Inicio
        </a>

        <a href="#proyecto">
          Proyecto
        </a>

        <a href="#como-funciona">
          Cómo funciona
        </a>

        <a href="#tecnologia">
            Monoitoreo
        </a>

        <a href="#tecno">
            Tecnologia
        </a>

        <a href="#recursos">
          Recursos
        </a>

        <a href="#contacto">
          Contacto
        </a>

      </nav>

      {/* CONTACTO */}
      <Link
        to="/register"
        className="navbar-login"
      >
        Solicitar información
      </Link>

    </motion.header>
  );
}