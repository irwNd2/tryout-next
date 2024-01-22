import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmationLink = `http://localhost:3000/auth/verify?token=${token}`;

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Konfirmasi pendaftaran anda di TryOut",
    html: `<p>Terima kasih telah mendaftar di TryOut. Silahkan klik link berikut untuk mengkonfirmasi pendaftaran anda:</p><p><a href="${confirmationLink}">LINK</a></p>`,
  });
};
