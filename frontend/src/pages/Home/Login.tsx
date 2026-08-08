import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:3000/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      if (response.ok && data.success) {
        console.log("Login correcto:", data.usuario);

        // Guardamos los datos del usuario
        localStorage.setItem(
          "usuario",
          JSON.stringify(data.usuario)
        );

        // Por ahora regresamos al inicio.
        // Cuando construyamos el Dashboard cambiaremos esto a:
        // navigate("/dashboard");
        navigate("/");
      } else {
        setError(
          data.message || "Correo o contraseña incorrectos"
        );
      }
    } catch (error) {
      console.error(
        "Error al iniciar sesión:",
        error
      );

      setError(
        "No se pudo conectar con el servidor. Verifica que el backend esté ejecutándose."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="login-page">

      {/* FONDO ANIMADO */}

      <div className="login-background">

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

      <Link
        to="/"
        className="login-back"
      >
        <ArrowLeft size={16} />
        Volver al inicio
      </Link>

      {/* CONTENEDOR */}

      <div className="login-wrapper">

        {/* LADO IZQUIERDO */}

        <motion.section
          className="login-intro"
          initial={{
            opacity: 0,
            x: -30,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.7,
          }}
        >

          {/* MARCA */}

          <div className="login-brand">

            <div className="login-brand-icon">
              <ShieldCheck size={21} />
            </div>

            <span>
              FluxGuard
            </span>

          </div>

          {/* ETIQUETA */}

          <span className="section-eyebrow">

            <span />

            PLATAFORMA

          </span>

          {/* TITULO */}

          <h1>

            Tu información.

            <br />

            <span>
              Tu control.
            </span>

          </h1>

          {/* DESCRIPCIÓN */}

          <p>
            Accede a FluxGuard para visualizar,
            organizar y analizar la información
            de tu sistema desde un solo lugar.
          </p>

          {/* ESTADO */}

          <div className="login-status">

            <span className="status-dot" />

            Plataforma disponible

          </div>

        </motion.section>

        {/* FORMULARIO */}

        <motion.section
          className="login-card"
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.1,
          }}
        >

          {/* HEADER */}

          <div className="login-card-header">

            <div className="login-lock">
              <LockKeyhole size={20} />
            </div>

            <div>

              <span className="login-card-label">
                ACCESO SEGURO
              </span>

              <h2>
                Iniciar sesión
              </h2>

            </div>

          </div>

          {/* DESCRIPCIÓN */}

          <p className="login-description">
            Ingresa tus credenciales para acceder
            a tu plataforma.
          </p>

          {/* ERROR */}

          {error && (
            <motion.div
              className="login-error"
              initial={{
                opacity: 0,
                y: -8,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
            >
              {error}
            </motion.div>
          )}

          {/* FORM */}

          <form onSubmit={handleSubmit}>

            {/* EMAIL */}

            <div className="login-field">

              <label htmlFor="email">
                Correo electrónico
              </label>

              <div className="login-input-wrapper">

                <Mail size={17} />

                <input
                  id="email"
                  type="email"
                  placeholder="correo@ejemplo.com"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                    setError("");
                  }}
                  required
                />

              </div>

            </div>

            {/* PASSWORD */}

            <div className="login-field">

              <div className="login-label-row">

                <label htmlFor="password">
                  Contraseña
                </label>

                <button
                  type="button"
                  className="forgot-password"
                >
                  ¿Olvidaste tu contraseña?
                </button>

              </div>

              <div className="login-input-wrapper">

                <LockKeyhole size={17} />

                <input
                  id="password"
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="••••••••"
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                    setError("");
                  }}
                  required
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() =>
                    setShowPassword(
                      (value) => !value
                    )
                  }
                  aria-label={
                    showPassword
                      ? "Ocultar contraseña"
                      : "Mostrar contraseña"
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

            {/* RECORDAR */}

            <label className="remember-me">

              <input
                type="checkbox"
              />

              <span>
                Recordarme en este dispositivo
              </span>

            </label>

            {/* BOTÓN */}

            <motion.button
              type="submit"
              className="login-submit"
              disabled={loading}
              whileHover={
                !loading
                  ? { y: -2 }
                  : {}
              }
              whileTap={
                !loading
                  ? { scale: 0.98 }
                  : {}
              }
            >

              <span>
                {loading
                  ? "Verificando..."
                  : "Ingresar a FluxGuard"}
              </span>

              {!loading && (
                <ArrowLeft
                  size={17}
                  className="login-submit-arrow"
                />
              )}

            </motion.button>

          </form>

          {/* DIVISOR */}

          <div className="login-divider">

            <span />

            <p>
              o
            </p>

            <span />

          </div>

          {/* SOLICITAR INFORMACIÓN */}

          <div className="login-register">

            <span>
              ¿Quieres conocer FluxGuard?
            </span>

            <Link to="/register">
              Solicitar información
            </Link>

          </div>

          {/* SEGURIDAD */}

          <div className="login-security">

            <ShieldCheck size={14} />

            <span>
              Tus credenciales están protegidas.
            </span>

          </div>

        </motion.section>

      </div>

    </main>
  );
}