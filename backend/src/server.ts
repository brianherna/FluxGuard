import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

import authRoutes from "./routes/authRoutes";
import prospectRoutes from "./routes/prospectRoutes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// ==============================
// SEGURIDAD
// ==============================

app.disable("x-powered-by");

app.use(
  helmet()
);

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);

// Limitar tamaño de las peticiones
app.use(
  express.json({
    limit: "20kb",
  })
);

// ==============================
// RATE LIMIT
// ==============================

// Límite general de peticiones
const generalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message:
      "Demasiadas solicitudes. Intenta nuevamente más tarde.",
  },
});

app.use("/api/", generalLimiter);

// ==============================
// RATE LIMIT PARA PROSPECTOS
// ==============================

const prospectLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message:
      "Has enviado demasiadas solicitudes. Intenta nuevamente más tarde.",
  },
});

// ==============================
// HEALTH CHECK
// ==============================

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "FluxGuard API funcionando",
  });
});

// ==============================
// RUTAS
// ==============================

// Autenticación
app.use("/api/auth", authRoutes);

// Prospectos
app.use(
  "/api/prospectos",
  prospectLimiter,
  prospectRoutes
);

// ==============================
// SERVIDOR
// ==============================

console.log("🔥 ESTOY EJECUTANDO ESTE SERVER.TS");

app.listen(PORT, () => {
    console.log("🔥 SERVER REAL CARGADO");
console.log("🔥 prospectRoutes:", prospectRoutes);
console.log("🔥 RUTA /api/prospectos REGISTRADA");
  console.log("🔥 LISTEN EJECUTADO");
  console.log(
    `FluxGuard API ejecutándose en http://localhost:${PORT}`
  );
});