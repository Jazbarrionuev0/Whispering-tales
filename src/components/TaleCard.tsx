"use client";
import { Star } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { localLight, lora } from "@/fonts/fonts";

function TaleCard({
  name,
  date,
  image,
  description,
}: {
  name: string;
  date: Date;
  image: string;
  description: string;
}) {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <div className="relative w-full h-full ">
      <Link
        href={""}
        className="w-full h-full   flex flex-col items-start justify-center  gap-2 hover:scale-105 transition-all "
        onMouseOver={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      >
        <div className="top-5 right-10 text-white flex gap-1 ml-auto px-3">
          <Star className="text-yellow-300" /> 4
        </div>
        <div className="bg-white rounded-full flex justify-center items-center p-3 ml-5">
          <Image className="w-5 h-5 pl-1" src={"/play.png"} alt="background image" width={512} height={512} />
        </div>
        <h1 className={`${lora.className} text-xl text-white font-semibold ml-5`}>{name}</h1>
        <p className={`${localLight.className} text-lg  text-gray-400 ml-5`}>{new Date(date).toLocaleDateString()}</p>

        <Image
          className="w-full -z-20 absolute object-cover "
          src={"/cabaña.png"}
          alt="background image"
          width={1920}
          height={1080}
        />
        <div
          className={`bg-black p-5 text-white min-h-[220px] rounded-sm absolute flex justify-center items-center bg-opacity-90  ${
            visible ? "block" : "hidden"
          }`}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt doloribus incidunt ducimus rem quas dolore
          vitae error, porro corporis, perferendis blanditiis earum at reprehenderit vel nesciunt quia ad amet dolorem.
        </div>
      </Link>
    </div>
  );
}

export default TaleCard;
