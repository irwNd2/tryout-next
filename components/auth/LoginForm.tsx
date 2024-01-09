import { cn } from "@/lib/utils";
import { CardWrapper } from "./CardWrapper";
import { Poppins } from "next/font/google";

const fonts = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const LoginForm = () => {
  return (
    <div className={cn("w-full flex justify-center", fonts.className)}>
      <CardWrapper
        headerLabel='Masuk dan mulai belajar bersama kami!'
        backButtonLabel='Belum punya akun? Daftar'
        backButtonHref='/register'
        showSocial
      >
        Login form
      </CardWrapper>
    </div>
  );
};
