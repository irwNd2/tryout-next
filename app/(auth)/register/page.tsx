import { RegisterForm } from "@/components/auth/RegisterForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Daftar - TryOut",
  description: "Silahkan mendaftar untuk mulai belajar bersama kami",
};
export default function RegisterPage() {
  return <RegisterForm />;
}
