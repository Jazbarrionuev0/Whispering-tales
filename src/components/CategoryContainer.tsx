import { lora } from "@/fonts/fonts";
import { Tale, TaleCategory } from "@/types/types";
import React from "react";
import TaleCard from "./TaleCard";
import { HorizontalCarousel } from "./HorizontalCarousel";

function CategoryContainer({ name, tales }: TaleCategory) {
  return (
    <div className="flex flex-col gap-3 p-5">
      <h3 className={`${lora.className} text-xl text-white`}>{name}</h3>
      <HorizontalCarousel tales={tales} />
    </div>
  );
}

export default CategoryContainer;
