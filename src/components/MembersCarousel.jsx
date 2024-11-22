"use client";
import Autoplay from "embla-carousel-autoplay";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Member data
const membersData = [
  {
    name: "Sudha Rani",
    description: `Sudha Rani is an associate Professor in English and has over 30 years of extensive
      teaching/research experience in English language, literature, memory studies. Being
      an active scholar, she presented and published a lot of research work along with 9
      books which are prescribed in different universities and colleges. Since her research
      area is Memory Studies, she established the Centre for Memory Studies and
      Storytelling at VNR Vignana Jyothi Institute of Engineering and Technology
      (Autonomous), Hyderabad.`,
  },
  {
    name: "Rachel Irdaya Raj",
    description: `Rachel Irdaya Raj is an Assistant Professor in English and has two decades of
      teaching/research experience in English Language, literature, soft skills, Memory
      Studies, gender studies, research methodology, and English for academic writing. She
      has also contributed towards content development for listening skills tests for
      Osmania University. She is involved in establishing The Centre for Memory Studies
      and Storytelling at VNR Vignana Jyothi Institute of Engineering and Technology
      (Autonomous), Hyderabad.`,
  },
];

export function DesktopCarousel() {
  const plugin = React.useRef(Autoplay({ delay: 3000}));

  return (
    <Carousel
      plugins={[plugin.current]}
      className="p-5 lg:max-w-2xl mx-auto"
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {membersData.map((member, index) => (
          <CarouselItem key={index} className="flex">
            <div className="p-1 w-full">
              <Card>
                <CardContent className="p-6">
                  <h1 className="text-2xl font-semibold mb-2">{member.name}</h1>
                  <p className="text-justify">{member.description}</p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="hidden lg:flex">
        <CarouselPrevious aria-label="Previous slide" />
        <CarouselNext aria-label="Next slide" />
      </div>
    </Carousel>
  );
}

export function MobileCarousel() {
  const plugin = React.useRef(Autoplay({ delay: 3000}));

  return (
    <Carousel
      plugins={[plugin.current]}
      className="m-5 mx-auto"
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {membersData.map((member, index) => (
          <CarouselItem key={index} className="flex">
            <div className="p-2 w-full">
              <Card>
                <CardContent className="p-4">
                  <h1 className="text-xl font-semibold mb-2">{member.name}</h1>
                  <p className="text-justify text-sm">{member.description}</p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
