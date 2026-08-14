import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: Number(process.env.MAIL_PORT),
  secure: process.env.MAIL_SECURE === "true",
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD,
  },
});

export const enviarCorreoProspecto = async (
  nombre: string,
  correo: string
) => {
  const info = await transporter.sendMail({
    from: `"FluxGuard" <${process.env.MAIL_USER}>`,
    to: correo,
    subject: "Gracias por contactar a FluxGuard",

    text: `
Hola ${nombre},

Gracias por ponerte en contacto con FluxGuard.

Hemos recibido correctamente tu información y nuestro equipo revisará tu solicitud.

Dentro de poco nos pondremos en contacto contigo para brindarte más información.

Gracias por tu interés en FluxGuard.

Saludos,
Equipo FluxGuard
    `.trim(),

    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #222;">
        <h2 style="color: #16c7e8;">
          ¡Gracias por contactar a FluxGuard!
        </h2>

        <p>Hola <strong>${nombre}</strong>,</p>

        <p>
          Gracias por ponerte en contacto con FluxGuard.
        </p>

        <p>
          Hemos recibido correctamente tu información y
          nuestro equipo revisará tu solicitud.
        </p>

        <p>
          <strong>
            Dentro de poco nos pondremos en contacto contigo
          </strong>
          para brindarte más información.
        </p>

        <p>
          Gracias por tu interés en FluxGuard.
        </p>

        <p>
          Saludos,<br>
          <strong>Equipo FluxGuard</strong>
        </p>
      </div>
    `,
  });

  console.log("====================================");
  console.log("📧 CORREO ENVIADO");
  console.log("====================================");
  console.log("Destinatario:", correo);
  console.log("Message ID:", info.messageId);
  console.log("====================================");

  return info;
};