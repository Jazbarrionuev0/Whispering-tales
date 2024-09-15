"use client";
import { Menu, Star } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { localLight, lora } from "@/fonts/fonts";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

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
        <div className="top-2 right-10 text-white flex gap-1 ml-auto px-3">
          <Star className="text-yellow-300" /> 4
        </div>
        <div className="bg-white rounded-full flex justify-center items-center p-3 ml-5">
          <Image className="w-5 h-5 pl-1" src={"/play.png"} alt="background image" width={512} height={512} />
        </div>
        <h1 className={`${lora.className} text-xl text-white font-semibold ml-5`}>{name}</h1>
        <p className={`${localLight.className} text-lg  text-gray-400 ml-5`}>{new Date(date).toLocaleDateString()}</p>
        <div className="bottom-5 right-10 text-white flex gap-1 ml-auto px-3">
          <Dialog>
            <DialogTrigger asChild>
              <Menu className="text-white z-20" />
            </DialogTrigger>
            <DialogContent
              className="sm:max-w-[425px] bg-black border-none
            "
            >
              <DialogHeader>
                <DialogTitle className="text-white">Summary</DialogTitle>
              </DialogHeader>
              <div className="text-gray-400">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet totam ut mollitia, quos saepe laborum
                dolores, minus natus necessitatibus fugit eos asperiores facere suscipit repudiandae recusandae, a
                provident dolorem odio.
              </div>
              <DialogFooter>
                <div className="items-center cursor-pointer flex hover:scale-105 transition-all">
                  <p className="text-white mx-2">Go Read</p>

                  <div className="bg-white rounded-full flex justify-center items-center p-3 ">
                    <Image className="w-5 h-5 pl-1" src={"/play.png"} alt="background image" width={512} height={512} />
                  </div>
                </div>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        <Image
          className="w-full -z-20 absolute object-cover "
          src={"/cabaña.png"}
          alt="background image"
          width={1920}
          height={1080}
        />
      </Link>
    </div>
  );
}

export default TaleCard;
