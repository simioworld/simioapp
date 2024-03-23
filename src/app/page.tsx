"use client";

import { Button } from "@/components/ui/button";
import { useQuery } from "convex/react";
import { Staatliches, Montserrat } from "next/font/google";
import Image from "next/image";
import { api } from "../../convex/_generated/api";
import EventCard, { EventStructure } from "@/components/shared/EventCard";
import CarouselCard from "@/components/shared/CarouselCard";
import Link from "next/link";

const staatliches = Staatliches({ subsets: ["latin"], weight: ["400"] });
const montse = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Home() {
  const events = useQuery(api.events.getEvents);
  const raceroom = events?.filter((event) => event.simulator === "RaceRoom");

  return (
    <main
      className={`${staatliches.className} text-red-800 dark:text-red-100  bg-neutral-300 flex flex-col items-center`}
    >
      <section className="flex w-full flex-col items-center justify-center gap-4 min-h-screen relative ">
        <Image
          src={"/assets/images/fondo.webp"}
          alt="Coche de fondo parado en un circuito"
          fill
          style={{ objectFit: "cover", objectPosition: "top" }}
          className="opacity-20"
        />
        <div className="flex flex-col">
          <h1 className="pt-4 sm:pt-10 z-10 text-center">SIMOWORLD</h1>
          <h2
            className={`${montse.className} px-4 sm:px-36 text-neutral-900/80 font-semibold relative z-10 t leading-snug text-balance text-center`}
          >
            El planificador de eventos de{" "}
            <span className="text-violet-700 uppercase font-bold">
              simracing
            </span>{" "}
          </h2>
        </div>
        <div className="w-full flex justify-center  opacity-60 ">
          <div className="w-full  px-16 flex flex-col justify-center items-center ">
            <div
              className={` bg-neutral-200/750 rounded-lg py-8 px-16 flex justify-center`}
            >
              <CarouselCard />
            </div>
            <p
              className={` bg-neutral-300/60 max-w-fit text-center text-2xl  p-4 uppercase text-neutral-950 font-medium `}
            >
              Busca. Crea. Comparte.
            </p>
          </div>
        </div>
        <div className="rounded-full absolute right-6 top-6 ">
          <Link href="/dashboard">
            <Button
              className="relative z-10 rounded-full text-sm sm:text-2xl  shadow-lg hover:scale-110  hover:bg-red-800 hover:opacity-100
             transition-all duration-500 cursor-pointer bg-[#5451fa] opacity-50 text-neutral-100 py-1 sm:py-5 px-8 sm:px-16 sm:h-10  "
            >
              Inicio
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
