"use server";

import * as z from "zod";
import { RegisterSchema } from "../schemas";
import bcryptjs from "bcryptjs";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);
  if (!validatedFields.success) return { error: "Invalid input" };

  const { name, email, password } = validatedFields.data;
  const hashedPassword = await bcryptjs.hash(password, 10);

  const existingUser = getUserByEmail(email);
  if (existingUser !== null) return { error: "Email telah digunakan!" };

  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  //TODO: Send verification email

  return { success: "Anda telah terdaftar. Silahkan login!" };
};
