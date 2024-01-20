import { LoginForm } from "@/components/auth/LoginForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Masuk - TryOut",
  description: "Silahkan login menggunakan akun yang terdaftar",
};
export default function LoginPage() {
  return <LoginForm />;
}
