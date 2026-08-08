import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  ShieldCheck,
  User,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [terms, setTerms] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden.");
      return;
    }

    if (!terms) {
      alert("Debes aceptar los términos y condiciones.");
      return;
    }

    // Por ahora solamente comprobamos los datos.
    // Después conectaremos este formulario con el backend.
    console.log({
      name,
      lastName,
      email,
      password,
      confirmPassword,
    });
  };

  return (
    <main className="login-page">
      {/* FONDO */}
      <div className="login-background">
        <div className="login-grid" />

        <motion.div
          className="login-glow login-glow-one"
          animate={{
            x: [0, 40, 0],
            y: [0, -25, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="login-glow login-glow-two"
          animate={{
            x: [0, -35, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* VOLVER */}
      <Link to="/" className="login-back">
        <ArrowLeft size={16} />
        Volver al inicio
      </Link>

      <div className="login-wrapper register-wrapper">
        {/* PRESENTACIÓN */}
        <motion.section
          className="login-intro"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="login-brand">
            <div className="login-brand-icon">
              <ShieldCheck size={21} />
            </div>

            <span>FluxGuard</span>
          </div>

          <span className="section-eyebrow">
            <span />
            NUEVA CUENTA
          </span>

          <h1>
            Comienza a
            <br />
            <span>conocer FluxGuard.</span>
          </h1>

          <p>
            Crea tu cuenta para acceder posteriormente a las
            herramientas y funcionalidades de la plataforma.
          </p>

          <div className="login-status">
            <span className="status-dot" />
            Registro seguro
          </div>
        </motion.section>

        {/* FORMULARIO */}
        <motion.section
          className="login-card register-card"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.1,
          }}
        >
          <div className="login-card-header">
            <div className="login-lock">
              <User size={20} />
            </div>

            <div>
              <span className="login-card-label">
                REGISTRO
              </span>

              <h2>Crear cuenta</h2>
            </div>
          </div>

          <p className="login-description">
            Completa tus datos para crear tu cuenta en FluxGuard.
          </p>

          <form onSubmit={handleSubmit}>
            {/* NOMBRE Y APELLIDO */}
            <div className="register-name-grid">
              <div className="login-field">
                <label htmlFor="name">Nombre</label>

                <div className="login-input-wrapper">
                  <User size={17} />

                  <input
                    id="name"
                    type="text"
                    placeholder="Tu nombre"
                    value={name}
                    onChange={(event) =>
                      setName(event.target.value)
                    }
                    required
                  />
                </div>
              </div>

              <div className="login-field">
                <label htmlFor="lastName">Apellido</label>

                <div className="login-input-wrapper">
                  <User size={17} />

                  <input
                    id="lastName"
                    type="text"
                    placeholder="Tu apellido"
                    value={lastName}
                    onChange={(event) =>
                      setLastName(event.target.value)
                    }
                    required
                  />
                </div>
              </div>
            </div>

            {/* CORREO */}
            <div className="login-field">
              <label htmlFor="register-email">
                Correo electrónico
              </label>

              <div className="login-input-wrapper">
                <Mail size={17} />

                <input
                  id="register-email"
                  type="email"
                  placeholder="correo@ejemplo.com"
                  value={email}
                  onChange={(event) =>
                    setEmail(event.target.value)
                  }
                  required
                />
              </div>
            </div>

            {/* CONTRASEÑA */}
            <div className="login-field">
              <label htmlFor="register-password">
                Contraseña
              </label>

              <div className="login-input-wrapper">
                <LockKeyhole size={17} />

                <input
                  id="register-password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(event) =>
                    setPassword(event.target.value)
                  }
                  minLength={8}
                  required
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() =>
                    setShowPassword((value) => !value)
                  }
                >
                  {showPassword ? (
                    <EyeOff size={17} />
                  ) : (
                    <Eye size={17} />
                  )}
                </button>
              </div>
            </div>

            {/* CONFIRMAR CONTRASEÑA */}
            <div className="login-field">
              <label htmlFor="confirm-password">
                Confirmar contraseña
              </label>

              <div className="login-input-wrapper">
                <LockKeyhole size={17} />

                <input
                  id="confirm-password"
                  type={
                    showConfirmPassword ? "text" : "password"
                  }
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={(event) =>
                    setConfirmPassword(event.target.value)
                  }
                  minLength={8}
                  required
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() =>
                    setShowConfirmPassword(
                      (value) => !value
                    )
                  }
                >
                  {showConfirmPassword ? (
                    <EyeOff size={17} />
                  ) : (
                    <Eye size={17} />
                  )}
                </button>
              </div>
            </div>

            {/* TÉRMINOS */}
            <label className="remember-me register-terms">
              <input
                type="checkbox"
                checked={terms}
                onChange={(event) =>
                  setTerms(event.target.checked)
                }
              />

              <span>
                Acepto los términos y condiciones de FluxGuard.
              </span>
            </label>

            {/* CREAR CUENTA */}
            <motion.button
              type="submit"
              className="login-submit"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Crear cuenta</span>

              <ArrowLeft
                size={17}
                className="login-submit-arrow"
              />
            </motion.button>
          </form>

          <div className="login-divider">
            <span />
            <p>o</p>
            <span />
          </div>

          {/* LOGIN */}
          <div className="login-register">
            <span>¿Ya tienes una cuenta?</span>

            <Link to="/login">
              Iniciar sesión
            </Link>
          </div>

          <div className="login-security">
            <ShieldCheck size={14} />

            <span>
              Tus datos estarán protegidos.
            </span>
          </div>
        </motion.section>
      </div>
    </main>
  );
}