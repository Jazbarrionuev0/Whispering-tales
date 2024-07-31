"use client";
import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import TaleCard from "./TaleCard";
import Autoplay from "embla-carousel-autoplay";

export function VerticalCarousel() {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
          stopOnInteraction: false,
        }),
      ]}
      opts={{
        align: "start",
        loop: true,
      }}
      orientation="vertical"
      className="w-full lg:max-w-xl  md:max-w-lg"
    >
      <CarouselContent className="-mt-1 h-screen ">
        {Array.from({ length: 7 }).map((_, index) => (
          <CarouselItem key={index} className="pt-1 md:basis-2/6 w- ">
            <div className="p-1">
              <Card className="rounded-sm bg-transparent border-none cursor-pointer hover:scale-105 transition-all ">
                <CardContent className="flex items-center justify-center p-6 h-[300px]  ">
                  <TaleCard />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
