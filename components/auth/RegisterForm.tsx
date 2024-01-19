"use client";

import { cn } from "@/lib/utils";
import { CardWrapper } from "./CardWrapper";
import { Poppins } from "next/font/google";
import { RegisterSchema } from "@/schemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState, useTransition } from "react";

import {
  Form,
  FormControl,
  FormLabel,
  FormItem,
  FormMessage,
  FormField,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormError } from "@/components/FormError";
import { FormSuccess } from "../FormSuccess";
import { register } from "@/actions/register";

const fonts = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const RegisterForm = () => {
  const [errror, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data: z.infer<typeof RegisterSchema>) => {
    setError("");
    setSuccess("");
    startTransition(() => {
      register(data).then((res) => {
        setSuccess(res.success);
        setError(res.error);
      });
    });
  };

  return (
    <div className={cn("w-full flex justify-center", fonts.className)}>
      <CardWrapper
        headerLabel='Daftar dan mulai belajar bersama kami!'
        backButtonLabel='Sudah punya akun? Login'
        backButtonHref='/login'
        showSocial
      >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
            <div className='flex flex-col gap-3'>
              <FormField
                control={form.control}
                name='name'
                render={({ field }) => {
                  return (
                    <FormItem className='flex flex-col gap-1'>
                      <FormLabel className='text-black'>Nama</FormLabel>
                      <FormControl>
                        <Input
                          type='text'
                          placeholder='Masukkan nama'
                          {...field}
                          disabled={isPending}
                          className={
                            form.formState.errors.name && "border-red-500 "
                          }
                        />
                      </FormControl>
                      <FormMessage
                        {...field}
                        className='!-mt-0.5 text-[10px]'
                      />
                    </FormItem>
                  );
                }}
              />
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => {
                  return (
                    <FormItem className='flex flex-col gap-1'>
                      <FormLabel className='text-black'>Email</FormLabel>
                      <FormControl>
                        <Input
                          type='email'
                          placeholder='Masukkan email'
                          {...field}
                          disabled={isPending}
                          className={
                            form.formState.errors.password && "border-red-500 "
                          }
                        />
                      </FormControl>
                      <FormMessage
                        {...field}
                        className='!-mt-0.5 text-[10px]'
                      />
                    </FormItem>
                  );
                }}
              />
              <FormField
                control={form.control}
                name='password'
                render={({ field }) => {
                  return (
                    <FormItem className='flex flex-col gap-1'>
                      <FormLabel className='text-black'>Kata sandi</FormLabel>
                      <FormControl>
                        <Input
                          disabled={isPending}
                          type='password'
                          placeholder='Masukkan password'
                          {...field}
                          className={
                            form.formState.errors.password && "border-red-500 "
                          }
                        />
                      </FormControl>
                      <FormMessage
                        {...field}
                        className='!-mt-0.5 text-[10px]'
                      />
                    </FormItem>
                  );
                }}
              />
              <FormField
                control={form.control}
                name='confirmPassword'
                render={({ field }) => {
                  return (
                    <FormItem className='flex flex-col gap-1'>
                      <FormLabel className='text-black'>
                        Konfirmasi kata sandi
                      </FormLabel>
                      <FormControl>
                        <Input
                          disabled={isPending}
                          type='password'
                          placeholder='Masukkan password'
                          {...field}
                          className={
                            form.formState.errors.confirmPassword &&
                            "border-red-500 "
                          }
                        />
                      </FormControl>
                      <FormMessage
                        {...field}
                        className='!-mt-0.5 text-[10px]'
                      />
                    </FormItem>
                  );
                }}
              />
            </div>
            <FormError message={errror} />
            <FormSuccess message={success} />
            <Button
              type='submit'
              size='lg'
              className='w-full'
              disabled={isPending}
              variant={isPending ? "ghost" : "default"}
            >
              {isPending ? "Loading..." : "Daftar"}
            </Button>
          </form>
        </Form>
      </CardWrapper>
    </div>
  );
};
