import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { inter } from "@/fonts/fonts";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Whispering Tales",
  description: "Generated by Jazmin Barrionuevo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="absolute top-0 flex justify-end items-end w-full p-4 gap-3 text-white z-30">
          <Link href={"/login"}>
            <p className="cursor-pointer hover:scale-105 transition-all ">Log in</p>
          </Link>
          <Link href={"/signin"}>
            <p className="cursor-pointer hover:scale-105 transition-all">Sign in</p>
          </Link>
        </header>
        {children}
      </body>
    </html>
  );
}
