import { LogIn, Activity } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <motion.header
      className="navbar"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* LOGO */}
      <Link to="/" className="navbar-logo">
        <div className="navbar-logo-icon">
          <Activity size={19} />
        </div>

        <span>
          Flux<span>Guard</span>
        </span>
      </Link>

      {/* NAVEGACIÓN */}
      <nav className="navbar-links">
        <a className="active" href="#inicio">
          Inicio
        </a>

        <a href="#proyecto">
          Proyecto
        </a>

        <a href="#tecnologia">
          Tecnología
        </a>

        <a href="#recursos">
          Recursos
        </a>

        <a href="#contacto">
          Contacto
        </a>
      </nav>

      {/* INICIAR SESIÓN */}
      <Link to="/login" className="navbar-login">
        <LogIn size={16} />
        <span>Iniciar sesión</span>
      </Link>
    </motion.header>
  );
}