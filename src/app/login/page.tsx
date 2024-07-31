"use client";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { AuthRepository } from "@/repositories/auth/authRepository";
import { LoginObject, LoginType, defaultValuesLogin } from "@/validation/zodSchemas/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { Loader2, Undo2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import Cookies from "js-cookie";

export default function HomePage() {
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const form = useForm<LoginType>({
    resolver: zodResolver(LoginObject),
    defaultValues: defaultValuesLogin,
  });

  async function onSubmit(values: LoginType) {
    setIsSubmitted(true);
    const authRepository = new AuthRepository();

    try {
      toast.promise(authRepository.login(values), {
        loading: "Loggeando...",
        success: (res) => {
          axios
            .post("/api/token", {
              ...res,
              rememberMe,
            })
            .then((res) => {
              Cookies.set("tokenUser", JSON.stringify(res.data.data));
              window.location.assign("/");
            });

          return `Login exitoso.`;
        },
        error: () => {
          setIsSubmitted(false);
          return `Credenciales invalidas.`;
        },
      });
    } catch (error) {}
  }
  return (
    <main className="flex w-full justify-center items-center h-full">
      <Image
        className="w-full h-screen -z-20  top-0 left-0 object-cover fixed"
        src={"/back.jpg"}
        alt="background image"
        width={1920}
        height={1080}
      />

      <Link href={"/"} className="z-40">
        <Undo2 className="absolute top-5 left-5 text-white hover:scale-105 transition-all cursor-pointer" />
      </Link>
      <div className="p-16 text-base bg-white w-fit">
        <h2 className="text-6xl font-bold mb-4 text-[#121212]">Iniciar Sesión</h2>
        <p className="text-lg font-extralight mb-10">¡Bienvenido de vuelta! Por favor, inicia sesión en tu cuenta.</p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-normal">Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-normal">Contraseña</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="********" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center justify-between">
              <div className="flex items-center ">
                <Checkbox className="mr-2 text-EC4899" onClick={() => setRememberMe((prev) => !prev)} />
                <p>Mantenerme conectado</p>
              </div>
              <Link href={"/"}>
                <Button variant="link" className="font-light">
                  ¿Olvidaste la contraseña?
                </Button>
              </Link>
            </div>
            <Button type="submit" disabled={isSubmitted} className="w-full py-8 text-xl bg-[#000000]">
              {isSubmitted && <Loader2 className="mr-2 h-6 w-6 animate-spin" />}
              Iniciar Sesión
            </Button>
          </form>
        </Form>
      </div>
    </main>
  );
}
