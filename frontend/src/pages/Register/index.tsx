import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Building2,
  BriefcaseBusiness,
  Mail,
  MessageSquare,
  Phone,
  Send,
  ShieldCheck,
  User,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Register() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [cargo, setCargo] = useState("");
  const [sector, setSector] = useState("");
  const [interes, setInteres] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [acepta, setAcepta] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    setError("");
    setSuccess("");

    if (!acepta) {
      setError(
        "Debes aceptar que FluxGuard utilice tus datos para ponerse en contacto contigo."
      );
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:3000/api/prospectos",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nombre,
            apellido,
            correo,
            telefono,
            empresa,
            cargo,
            sector,
            interes,
            mensaje,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        setError(
          data.message ||
            "No se pudieron enviar tus datos."
        );
        return;
      }

      setSuccess(
        "¡Gracias por tu interés! Hemos recibido tus datos y nos pondremos en contacto contigo."
      );

      // Limpiar formulario
      setNombre("");
      setApellido("");
      setCorreo("");
      setTelefono("");
      setEmpresa("");
      setCargo("");
      setSector("");
      setInteres("");
      setMensaje("");
      setAcepta(false);
    } catch (error) {
      console.error(
        "Error al enviar prospecto:",
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

      {/* FONDO */}

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

      <Link to="/" className="login-back">
        <ArrowLeft size={16} />
        Volver al inicio
      </Link>

      <div className="login-wrapper register-wrapper">

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
          <div className="login-brand">
            <div className="login-brand-icon">
              <ShieldCheck size={21} />
            </div>

            <span>FluxGuard</span>
          </div>

          <span className="section-eyebrow">
            <span />
            CONOCE FLUXGUARD
          </span>

          <h1>
            Hablemos de
            <br />
            <span>tu proyecto.</span>
          </h1>

          <p>
            Déjanos tus datos y cuéntanos qué
            necesitas. Nuestro equipo podrá
            ponerse en contacto contigo para
            brindarte más información sobre
            FluxGuard.
          </p>

          <div className="login-status">
            <span className="status-dot" />
            SOLICITUD DE INFORMACIÓN
          </div>
        </motion.section>

        {/* FORMULARIO */}

        <motion.section
          className="login-card register-card"
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

          {/* ENCABEZADO */}

          <div className="login-card-header">
            <div className="login-lock">
              <User size={20} />
            </div>

            <div>
              <span className="login-card-label">
                CONTACTO
              </span>

              <h2>
                Conoce FluxGuard
              </h2>
            </div>
          </div>

          <p className="login-description">
            Completa el siguiente formulario y
            nos pondremos en contacto contigo.
          </p>

          {/* MENSAJE DE ERROR */}

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

          {/* MENSAJE DE ÉXITO */}

          {success && (
            <motion.div
              className="login-success"
              initial={{
                opacity: 0,
                y: -8,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
            >
              {success}
            </motion.div>
          )}

          <form onSubmit={handleSubmit}>

            {/* DATOS DE CONTACTO */}

            <div className="form-section-title">
              <User size={18} />
              <h3>Datos de contacto</h3>
            </div>

            <div className="register-name-grid">

              {/* NOMBRE */}

              <div className="login-field">
                <label htmlFor="nombre">
                  Nombre
                </label>

                <div className="login-input-wrapper">
                  <User size={17} />

                  <input
                    id="nombre"
                    type="text"
                    placeholder="Tu nombre"
                    value={nombre}
                    onChange={(event) =>
                      setNombre(event.target.value)
                    }
                    required
                  />
                </div>
              </div>

              {/* APELLIDO */}

              <div className="login-field">
                <label htmlFor="apellido">
                  Apellido
                </label>

                <div className="login-input-wrapper">
                  <User size={17} />

                  <input
                    id="apellido"
                    type="text"
                    placeholder="Tu apellido"
                    value={apellido}
                    onChange={(event) =>
                      setApellido(event.target.value)
                    }
                    required
                  />
                </div>
              </div>

            </div>

            {/* CORREO */}

            <div className="login-field">
              <label htmlFor="correo">
                Correo electrónico
              </label>

              <div className="login-input-wrapper">
                <Mail size={17} />

                <input
                  id="correo"
                  type="email"
                  placeholder="correo@empresa.com"
                  value={correo}
                  onChange={(event) =>
                    setCorreo(event.target.value)
                  }
                  required
                />
              </div>
            </div>

            {/* TELÉFONO */}

            <div className="login-field">
              <label htmlFor="telefono">
                Teléfono
              </label>

              <div className="login-input-wrapper">
                <Phone size={17} />

                <input
                  id="telefono"
                  type="tel"
                  placeholder="55 1234 5678"
                  value={telefono}
                  onChange={(event) =>
                    setTelefono(event.target.value)
                  }
                  required
                />
              </div>
            </div>

            {/* DATOS EMPRESA */}

            <div className="form-section-title">
              <Building2 size={18} />
              <h3>Datos de la empresa</h3>
            </div>

            {/* EMPRESA */}

            <div className="login-field">
              <label htmlFor="empresa">
                Empresa / institución
              </label>

              <div className="login-input-wrapper">
                <Building2 size={17} />

                <input
                  id="empresa"
                  type="text"
                  placeholder="Nombre de la empresa o institución"
                  value={empresa}
                  onChange={(event) =>
                    setEmpresa(event.target.value)
                  }
                />
              </div>
            </div>

            {/* CARGO */}

            <div className="login-field">
              <label htmlFor="cargo">
                Cargo
              </label>

              <div className="login-input-wrapper">
                <BriefcaseBusiness size={17} />

                <input
                  id="cargo"
                  type="text"
                  placeholder="Ej. Director, Ingeniero, Gerente..."
                  value={cargo}
                  onChange={(event) =>
                    setCargo(event.target.value)
                  }
                />
              </div>
            </div>

            {/* SECTOR */}

            <div className="login-field">
              <label htmlFor="sector">
                Sector
              </label>

              <div className="login-input-wrapper select-wrapper">
                <select
                  id="sector"
                  value={sector}
                  onChange={(event) =>
                    setSector(event.target.value)
                  }
                >
                  <option value="">
                    Selecciona un sector
                  </option>

                  <option value="Energia">
                    Energía
                  </option>

                  <option value="Industria">
                    Industria
                  </option>

                  <option value="Tecnologia">
                    Tecnología
                  </option>

                  <option value="Gobierno">
                    Gobierno
                  </option>

                  <option value="Educacion">
                    Educación
                  </option>

                  <option value="Otro">
                    Otro
                  </option>
                </select>
              </div>
            </div>

            {/* INTERÉS */}

            <div className="form-section-title">
              <MessageSquare size={18} />
              <h3>Interés en FluxGuard</h3>
            </div>

            <div className="login-field">
              <label htmlFor="interes">
                ¿Qué te interesa de FluxGuard?
              </label>

              <div className="login-input-wrapper select-wrapper">
                <select
                  id="interes"
                  value={interes}
                  onChange={(event) =>
                    setInteres(event.target.value)
                  }
                >
                  <option value="">
                    Selecciona una opción
                  </option>

                  <option value="Monitoreo">
                    Monitoreo de redes eléctricas
                  </option>

                  <option value="Analisis">
                    Análisis de datos
                  </option>

                  <option value="Alertas">
                    Detección de anomalías
                  </option>

                  <option value="Plataforma">
                    Conocer la plataforma
                  </option>

                  <option value="Implementacion">
                    Implementación empresarial
                  </option>

                  <option value="Otro">
                    Otro
                  </option>
                </select>
              </div>
            </div>

            {/* MENSAJE */}

            <div className="login-field">
              <label htmlFor="mensaje">
                Mensaje
              </label>

              <div className="login-input-wrapper textarea-wrapper">
                <MessageSquare size={17} />

                <textarea
                  id="mensaje"
                  placeholder="Cuéntanos brevemente qué necesitas..."
                  value={mensaje}
                  onChange={(event) =>
                    setMensaje(event.target.value)
                  }
                  rows={4}
                />
              </div>
            </div>

            {/* CONSENTIMIENTO */}

            <label className="remember-me register-terms">
              <input
                type="checkbox"
                checked={acepta}
                onChange={(event) =>
                  setAcepta(event.target.checked)
                }
              />

              <span>
                Acepto que FluxGuard utilice mis
                datos para ponerse en contacto
                conmigo.
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
                  ? "Enviando..."
                  : "Quiero conocer FluxGuard"}
              </span>

              {!loading && (
                <Send size={17} />
              )}
            </motion.button>

          </form>

          {/* SEGURIDAD */}

          <div className="login-security">
            <ShieldCheck size={14} />

            <span>
              Tus datos serán utilizados únicamente
              para ponernos en contacto contigo.
            </span>
          </div>

        </motion.section>
      </div>
    </main>
  );
}