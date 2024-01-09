"use client";

import { useRouter } from "next/navigation";

type LoginButtonProps = {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
};

export function LoginButton({
  children,
  mode = "redirect",
  asChild = false,
}: LoginButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push("/login");
  };

  if (mode === "modal") {
    return <span>TODO</span>;
  }

  return (
    <span className='cursor-pointer' onClick={handleClick}>
      {children}
    </span>
  );
}
