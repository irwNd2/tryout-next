"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { LoginButton } from "@/components/auth/LoginButton";

const fonst = Poppins({
  subsets: ["latin"],
  weight: ["400", "700", "600"],
});

export default function Home() {
  const titles = ["CPNS!", "TBS!", "LPDP!", "BUMN!"];
  const [currentTitleIndex, setCurrentTitleIndex] = useState<number>(0);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex(
        (prevIndex: number) => (prevIndex + 1) % titles.length
      );
    }, 2500);
    return () => clearInterval(interval);
  }, [titles.length]);
  return (
    <MaxWidthWrapper>
      <main className={cn("flex flex-col mt-20 gap-4", fonst.className)}>
        <div className='text-6xl font-bold'>
          <h1>Belajar Cerdas</h1>
          <h1>Solusi Lulus Seleksi</h1>
          <h2 className='text-sky-600'>{titles[currentTitleIndex]}</h2>
        </div>
        <div className='flex flex-col max-w-xl text-gray-500'>
          <p>Yakin udah siap menghadapi tes seleksi?</p>
          <p>
            Sini belajar bareng, biar kamu makin paham dan pede menghadapi tes
            ujian.
          </p>
        </div>
        <div className='flex gap-2 '>
          <LoginButton>
            <Button
              className='bg-sky-600 font-semibold hover:bg-sky-900'
              size='lg'
            >
              Masuk
            </Button>
          </LoginButton>
          <Button
            size='lg'
            variant='secondary'
            onClick={() => router.push("/register")}
            className='font-semibold text-sky-600'
          >
            Daftar
          </Button>
        </div>
      </main>
    </MaxWidthWrapper>
  );
}
