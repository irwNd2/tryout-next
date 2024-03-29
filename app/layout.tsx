import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TryOut - Stay curious",
  description:
    "Temukan cerita, pemikiran dan diskursus dari penulis di semua topik",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='h-full'>
      <body className={cn("relative h-full antialiased", inter.className)}>
        <div className='flex-grow flex-1'>{children}</div>
      </body>
    </html>
  );
}
