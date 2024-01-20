"use server";

import * as z from "zod";
import { LoginSchema } from "@/schemas";
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT_URL } from "@/routes";
import { AuthError } from "next-auth";
import { generateVerificationToken } from "@/lib/tokens";
import { getUserByEmail } from "@/data/user";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values);
  if (!validatedFields.success) return { error: "Invalid input" };

  const { email, password } = validatedFields.data;
  const existingUser = await getUserByEmail(email);
  if (existingUser === null || !existingUser.email || !existingUser.password)
    return { error: "Email atau password salah" };

  if (!existingUser.emailVerified) {
    const verificationToken = await generateVerificationToken(
      existingUser.email
    );
    return {
      success:
        "Konfirmasi email telah terkirim. Silahkan periksa sebelum login",
    };
  }

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT_URL,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Email atau password salah" };
        default:
          return { error: "Terjadi kesalahan. Coba lagi" };
      }
    }
    throw error;
  }

  return { success: "Login sukses" };
};
