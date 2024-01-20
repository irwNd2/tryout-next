import { ErrorForm } from "@/components/auth/ErrorForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Error - TryOut",
  description: "Terjadi kesalahan!",
};
const ErrorRegisterPage = () => {
  return <ErrorForm />;
};

export default ErrorRegisterPage;
