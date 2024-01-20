"use client";

import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { DEFAULT_LOGIN_REDIRECT_URL } from "@/routes";

export const Social = () => {
  const sosialLogin = (provider: "google" | "github") => {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT_URL,
    });
  };

  return (
    <div className='flex items-center w-full gap-x-2'>
      <Button
        variant='outline'
        className='w-full'
        size='lg'
        onClick={() => sosialLogin("google")}
      >
        <FcGoogle className='w-5 h-5' />
      </Button>
      <Button
        variant='outline'
        className='w-full'
        size='lg'
        onClick={() => sosialLogin("github")}
      >
        <FaGithub className='w-5 h-5' />
      </Button>
    </div>
  );
};
