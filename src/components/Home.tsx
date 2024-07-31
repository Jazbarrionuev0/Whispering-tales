import { Play } from "lucide-react";
import Image from "next/image";

import Link from "next/link";
import { VerticalCarousel } from "./VerticalCarousel";
import { localLight, lora } from "@/fonts/fonts";

const Home = async () => {
  return (
    <div className="flex justify-between h-screen relative ">
      <Image
        className="w-full h-screen -z-20 absolute top-0 left-0 object-cover"
        src={"/back.jpg"}
        alt="background image"
        width={1920}
        height={1080}
      />
      <div className="flex justify-center flex-col  items-star gap-10 text-white  w-1/2 px-10">
        <h1 className={`${lora.className} text-5xl`}>Where Stories Speak Louder than Words</h1>

        <Link className="flex gap-2 hover:scale-105 transition-all items-center text-lg" href={"/tales"}>
          <div className="bg-white rounded-full flex justify-center items-center p-3">
            <Image className="w-5 h-5 pl-1" src={"/play.png"} alt="background image" width={512} height={512} />
          </div>
          <p className={`${localLight.className} text-xl`}>Ver todos</p>
        </Link>
      </div>
      <div className=" w-1/2 flex justify-center items-center ">
        <VerticalCarousel />
      </div>
    </div>
  );
};

export default Home;
