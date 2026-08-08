import { Request, Response } from "express";
import bcrypt from "bcrypt";
import pool from "../db/database.js";

// ==========================
// REGISTRO
// ==========================
export const register = async (req: Request, res: Response) => {
  try {
    const { nombre, apellido, email, password } = req.body;

    // Validar datos obligatorios
    if (!nombre || !apellido || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Todos los campos son obligatorios",
      });
    }

    // Validar longitud de contraseña
    if (password.length < 8) {
      return res.status(400).json({
        success: false,
        message: "La contraseña debe tener al menos 8 caracteres",
      });
    }

    // Verificar si el correo ya existe
    const usuarioExistente = await pool.query(
      "SELECT id FROM usuarios WHERE correo = $1",
      [email]
    );

    if (usuarioExistente.rows.length > 0) {
      return res.status(409).json({
        success: false,
        message: "El correo ya está registrado",
      });
    }

    // Encriptar contraseña
    const passwordHash = await bcrypt.hash(password, 10);

    // Crear usuario
    const resultado = await pool.query(
      `INSERT INTO usuarios
       (nombre, apellido, correo, password_hash)
       VALUES ($1, $2, $3, $4)
       RETURNING id, nombre, apellido, correo, fecha_registro`,
      [nombre, apellido, email, passwordHash]
    );

    return res.status(201).json({
      success: true,
      message: "Usuario registrado correctamente",
      usuario: resultado.rows[0],
    });
  } catch (error) {
    console.error("ERROR EN REGISTER:", error);

    return res.status(500).json({
      success: false,
      message: "Error interno del servidor",
    });
  }
};

// ==========================
// LOGIN
// ==========================
export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // Validar datos
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Correo y contraseña son obligatorios",
      });
    }

    // Buscar usuario
    const resultado = await pool.query(
      `SELECT
        id,
        nombre,
        apellido,
        correo,
        password_hash
       FROM usuarios
       WHERE correo = $1`,
      [email]
    );

    if (resultado.rows.length === 0) {
      return res.status(401).json({
        success: false,
        message: "Correo o contraseña incorrectos",
      });
    }

    const usuario = resultado.rows[0];

    // Comparar contraseña
    const passwordCorrecta = await bcrypt.compare(
      password,
      usuario.password_hash
    );

    if (!passwordCorrecta) {
      return res.status(401).json({
        success: false,
        message: "Correo o contraseña incorrectos",
      });
    }

    // No devolver el hash
    delete usuario.password_hash;

    return res.status(200).json({
      success: true,
      message: "Inicio de sesión correcto",
      usuario,
    });
  } catch (error) {
    console.error("ERROR EN LOGIN:", error);

    return res.status(500).json({
      success: false,
      message: "Error interno del servidor",
    });
  }
};