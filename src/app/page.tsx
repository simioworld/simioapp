"use client";

import { Button } from "@/components/ui/button";
import { useQuery } from "convex/react";
import { Staatliches, Montserrat } from "next/font/google";
import Image from "next/image";
import { api } from "../../convex/_generated/api";
import EventCard, { EventCardProps } from "@/components/shared/EventCard";
import CarouselCard from "@/components/shared/CarouselCard";
import Link from "next/link";

const staatliches = Staatliches({ subsets: ["latin"], weight: ["400"] });
const montse = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Home() {
  const events = useQuery(api.events.getEventsForCarousel);

  return (
    <main
      className={`${staatliches.className} bg-gradient-to-br from-slate-900/90 to-[#374A67]/95 flex flex-col items-center`}
    >
      <section className="flex w-full flex-col-reverse items-center justify-center gap-4 min-h-screen bg-transparent/40 relative ">
        <Image
          src={"/assets/images/fondo.webp"}
          alt="Coche de fondo parado en un circuito"
          fill
          style={{ objectFit: "cover", objectPosition: "top" }}
          className="opacity-20"
        />
        <div className="flex flex-col">
          <h1 className="pt-4 sm:pt-10  text-center bg-clip-text text-transparent bg-gradient-to-r from-red-400  to-red-500 ">
            SIMOWORLD
          </h1>
          <h2
            className={`${montse.className} px-4 sm:px-36 text-slate-300/80 font-semibold relative z-10 t leading-snug  text-center`}
          >
            El planificador de eventos de{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500  to-red-500 uppercase font-bold">
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
              className={` bg-transparent/60 max-w-fit text-center text-2xl  p-4 uppercase text-slate-300 font-medium `}
            >
              Busca. Crea. Comparte.
            </p>
          </div>
        </div>
        <div className="rounded-full absolute right-6 bottom-6 ">
          <Link href="/dashboard">
            <Button
              className="relative z-10 rounded-full text-sm sm:text-xl  shadow-lg hover:scale-110  hover:bg-red-800/90 hover:opacity-90  bg-clip-text hover:bg-clip-border hover:text-red-800 hover:from-slate-300 hover:to-slate-300
             transition-all duration-500 cursor-pointer text-center text-transparent bg-gradient-to-r from-red-400  to-red-500 py-1 sm:py-5 px-4 sm:px-8 sm:h-10  "
            >
              Inicio
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
