import CategoryContainer from "@/components/CategoryContainer";
import { lora } from "@/fonts/fonts";
import { Category, Tale, User } from "@/types/types";
import { Undo2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const u: User = {
  id: 0,
  name: "a",
  username: "a",
  password: "a",
  tales: [],
};

const c: Category = {
  id: 0,
  name: "",
};
const t: Tale[] = [
  {
    id: 1,
    name: "jenn",
    description: "jenn",
    image: "jenn",
    content: "jenn",
    user: u,
    category: c,
    date: new Date(),
  },
  {
    id: 2,
    name: "lol",
    description: "lol",
    image: "lol",
    content: "lol",
    user: u,
    category: c,
    date: new Date(),
  },
  {
    id: 1,
    name: "jenn",
    description: "jenn",
    image: "jenn",
    content: "jenn",
    user: u,
    category: c,
    date: new Date(),
  },
  {
    id: 2,
    name: "lol",
    description: "lol",
    image: "lol",
    content: "lol",
    user: u,
    category: c,
    date: new Date(),
  },
  {
    id: 1,
    name: "jenn",
    description: "jenn",
    image: "jenn",
    content: "jenn",
    user: u,
    category: c,
    date: new Date(),
  },
  {
    id: 2,
    name: "lol",
    description: "lol",
    image: "lol",
    content: "lol",
    user: u,
    category: c,
    date: new Date(),
  },
];

export default function HomePage() {
  return (
    <main className="flex items-center flex-col relative ">
      <Link href={"/"}>
        <Undo2 className="absolute z-30 top-5 left-5 text-white hover:scale-105 transition-all cursor-pointer" />
      </Link>

      <Image
        className="w-full h-screen -z-20  top-0 left-0 object-cover fixed"
        src={"/back.jpg"}
        alt="background image"
        width={1920}
        height={1080}
      />

      <h1 className={`${lora.className} text-white text-5xl py-10`}>Explore</h1>

      <div className="flex flex-col justify-start  w-full my-10">
        <CategoryContainer id={0} name={"Mystery"} tales={t} />
        <CategoryContainer id={0} name={"Fanatsy"} tales={t} />
        <CategoryContainer id={0} name={"Horror"} tales={t} />
        <CategoryContainer id={0} name={"Romance"} tales={t} />
      </div>
    </main>
  );
}
