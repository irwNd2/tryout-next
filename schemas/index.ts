import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email wajiib diisi",
  }),
  password: z.string().min(1, {
    message: "Kata sandi wajib diisi",
  }),
});

export const RegisterSchema = z
  .object({
    email: z.string().email({
      message: "Email wajiib diisi",
    }),
    password: z.string().min(6, {
      message: "Kata sandi minimal 6 karakter",
    }),
    confirmPassword: z.string().min(6, {
      message: "Kata sandi minimal 6 karakter",
    }),
    name: z.string().min(1, {
      message: "Nama wajib diisi",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Kata sandi tidak sama",
    path: ["confirmPassword"],
  });
