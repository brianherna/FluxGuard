import { Request, Response } from "express";
import pool from "../db/database";
import nodemailer from "nodemailer";

// ==========================================
// CONFIGURACIÓN DE CORREO
// ==========================================

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// ==========================================
// CREAR PROSPECTO
// ==========================================

export const crearProspecto = async (
  req: Request,
  res: Response
) => {
  try {
    const {
      nombre,
      apellido,
      correo,
      telefono,
      empresa,
      cargo,
      sector,
      interes,
      mensaje,
    } = req.body;

    // ==========================================
    // VALIDAR QUE EL BODY SEA UN OBJETO
    // ==========================================

    if (
      !req.body ||
      typeof req.body !== "object" ||
      Array.isArray(req.body)
    ) {
      return res.status(400).json({
        success: false,
        message: "Los datos enviados no son válidos.",
      });
    }

    // ==========================================
    // CAMPOS OBLIGATORIOS
    // ==========================================

    if (
      typeof nombre !== "string" ||
      typeof apellido !== "string" ||
      typeof correo !== "string" ||
      typeof telefono !== "string"
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Nombre, apellido, correo y teléfono son obligatorios.",
      });
    }

    // ==========================================
    // LIMPIAR DATOS
    // ==========================================

    const nombreLimpio = nombre.trim();
    const apellidoLimpio = apellido.trim();
    const correoLimpio = correo.trim().toLowerCase();
    const telefonoLimpio = telefono.trim();

    const empresaLimpia =
      typeof empresa === "string"
        ? empresa.trim()
        : "";

    const cargoLimpio =
      typeof cargo === "string"
        ? cargo.trim()
        : "";

    const sectorLimpio =
      typeof sector === "string"
        ? sector.trim()
        : "";

    const interesLimpio =
      typeof interes === "string"
        ? interes.trim()
        : "";

    const mensajeLimpio =
      typeof mensaje === "string"
        ? mensaje.trim()
        : "";

    // ==========================================
    // CAMPOS OBLIGATORIOS VACÍOS
    // ==========================================

    if (
      !nombreLimpio ||
      !apellidoLimpio ||
      !correoLimpio ||
      !telefonoLimpio
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Nombre, apellido, correo y teléfono son obligatorios.",
      });
    }

    // ==========================================
    // LONGITUDES MÁXIMAS
    // ==========================================

    if (nombreLimpio.length > 100) {
      return res.status(400).json({
        success: false,
        message: "El nombre es demasiado largo.",
      });
    }

    if (apellidoLimpio.length > 100) {
      return res.status(400).json({
        success: false,
        message: "El apellido es demasiado largo.",
      });
    }

    if (correoLimpio.length > 150) {
      return res.status(400).json({
        success: false,
        message: "El correo es demasiado largo.",
      });
    }

    if (telefonoLimpio.length > 30) {
      return res.status(400).json({
        success: false,
        message: "El teléfono es demasiado largo.",
      });
    }

    if (empresaLimpia.length > 150) {
      return res.status(400).json({
        success: false,
        message:
          "El nombre de la empresa es demasiado largo.",
      });
    }

    if (cargoLimpio.length > 100) {
      return res.status(400).json({
        success: false,
        message: "El cargo es demasiado largo.",
      });
    }

    if (sectorLimpio.length > 100) {
      return res.status(400).json({
        success: false,
        message: "El sector es demasiado largo.",
      });
    }

    if (interesLimpio.length > 150) {
      return res.status(400).json({
        success: false,
        message: "El interés es demasiado largo.",
      });
    }

    if (mensajeLimpio.length > 1000) {
      return res.status(400).json({
        success: false,
        message: "El mensaje es demasiado largo.",
      });
    }

    // ==========================================
    // VALIDAR CORREO
    // ==========================================

    const correoValido =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!correoValido.test(correoLimpio)) {
      return res.status(400).json({
        success: false,
        message: "El correo electrónico no es válido.",
      });
    }

    // ==========================================
    // VALIDAR TELÉFONO
    // ==========================================

    const telefonoValido =
      /^[0-9+\-()\s]{7,30}$/;

    if (!telefonoValido.test(telefonoLimpio)) {
      return res.status(400).json({
        success: false,
        message: "El número de teléfono no es válido.",
      });
    }

    // ==========================================
    // GUARDAR EN POSTGRESQL
    // ==========================================

    const resultado = await pool.query(
      `
      INSERT INTO prospectos (
        nombre,
        apellido,
        correo,
        telefono,
        empresa,
        cargo,
        sector,
        interes,
        mensaje
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
      RETURNING
        id,
        nombre,
        apellido,
        correo,
        fecha_registro
      `,
      [
        nombreLimpio,
        apellidoLimpio,
        correoLimpio,
        telefonoLimpio,
        empresaLimpia || null,
        cargoLimpio || null,
        sectorLimpio || null,
        interesLimpio || null,
        mensajeLimpio || null,
      ]
    );

    // ==========================================
    // ENVIAR CORREO DE CONFIRMACIÓN
    // ==========================================

    try {
      await transporter.sendMail({
        from: `"FluxGuard" <${process.env.EMAIL_USER}>`,
        to: correoLimpio,
        subject: "Gracias por contactar a FluxGuard",
        html: `
          <div style="
            font-family: Arial, sans-serif;
            max-width: 600px;
            margin: auto;
            padding: 30px;
            color: #1f2937;
          ">

            <h2 style="color: #06b6d4;">
              ¡Gracias por contactar a FluxGuard!
            </h2>

            <p>
              Hola <strong>${nombreLimpio}</strong>,
            </p>

            <p>
              Hemos recibido correctamente tus datos y
              agradecemos tu interés en FluxGuard.
            </p>

            <p>
              Nuestro equipo revisará tu solicitud y se
              pondrá en contacto contigo dentro de poco.
            </p>

            <p>
              Si proporcionaste información sobre una empresa
              o proyecto, podremos utilizarla para comprender
              mejor tus necesidades.
            </p>

            <br>

            <p>
              Saludos,<br>
              <strong>Equipo FluxGuard</strong>
            </p>

            <hr style="
              border: none;
              border-top: 1px solid #e5e7eb;
              margin-top: 30px;
            ">

            <p style="
              font-size: 12px;
              color: #6b7280;
            ">
              Este correo fue enviado automáticamente.
              Por favor, no respondas directamente a este mensaje.
            </p>

          </div>
        `,
      });

      console.log(
        `📧 Correo de confirmación enviado a: ${correoLimpio}`
      );

    } catch (emailError: any) {

      // ==========================================
      // ERROR DE CORREO
      // ==========================================

      console.error("====================================");
      console.error("⚠️ PROSPECTO GUARDADO, PERO EL CORREO FALLÓ");
      console.error("====================================");
      console.error(emailError);
      console.error("Mensaje:", emailError?.message);
      console.error("Código:", emailError?.code);
      console.error("====================================");
    }

    // ==========================================
    // RESPUESTA EXITOSA
    // ==========================================

    return res.status(201).json({
      success: true,
      message:
        "Tus datos fueron enviados correctamente. Nos pondremos en contacto contigo.",
      prospecto: resultado.rows[0],
    });

  } catch (error: any) {

    // ==========================================
    // ERROR REAL
    // ==========================================

    console.error("====================================");
    console.error("❌ ERROR AL GUARDAR PROSPECTO");
    console.error("====================================");
    console.error(error);
    console.error("Mensaje:", error?.message);
    console.error("Código PostgreSQL:", error?.code);
    console.error("Detalle:", error?.detail);
    console.error("Tabla:", error?.table);
    console.error("Columna:", error?.column);
    console.error("====================================");

    return res.status(500).json({
      success: false,
      message:
        "Ocurrió un error al guardar tus datos.",
    });
  }
};