import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import TaleCard from "./TaleCard";
import { Tale } from "@/types/types";

export function HorizontalCarousel({ tales }: { tales: Tale[] }) {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      orientation="horizontal"
      className="w-full "
    >
      <CarouselContent className="-mt-1 ">
        {tales.map((tale: Tale, index: number) => (
          <CarouselItem key={index} className="pt-1 md:basis-2/6 min-w-[220px]  max-w-[520px]">
            <div className="p-1">
              <Card className="rounded-sm bg-transparent border-none cursor-pointer hover:scale-105 transition-all ">
                <CardContent className="flex items-center justify-center p-6">
                  <TaleCard name={tale.name} date={tale.date} image={tale.image} />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="h-full rounded-sm bg-black border-none text-white bg-opacity-60 hover:bg-black hover:text-white" />
      <CarouselNext className="h-full rounded-sm bg-black border-none text-white bg-opacity-60 hover:bg-black hover:text-white" />
    </Carousel>
  );
}
