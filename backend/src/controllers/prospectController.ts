import { Request, Response } from "express";
import pool from "../db/database";

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
    // LIMPIAR ESPACIOS
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
    // EVITAR CAMPOS OBLIGATORIOS VACÍOS
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
    // INSERTAR EN POSTGRESQL
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
    // ERROR REAL PARA DEPURACIÓN
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