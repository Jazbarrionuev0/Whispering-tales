import CategoryContainer from "@/components/CategoryContainer";
import { lora } from "@/fonts/fonts";
import { Category, Tale, User } from "@/types/types";
import { Undo2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className=" ">
      <Link href={"/"}>
        <Undo2 className="absolute top-5 left-5 text-white hover:scale-105 transition-all cursor-pointer" />
      </Link>
    </main>
  );
}
