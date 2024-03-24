"use client";

import { useQuery } from "convex/react";
import EventCard from "@/components/shared/EventCard";
import { api } from "../../../../../convex/_generated/api";
import Events from "@/components/Events";
import Image from "next/image";

const EventsPage = () => {
  const events = useQuery(api.events.getTwoEvents);
  return (
    <div className="h-full flex relative">
      <Image
        src={"/assets/images/fondo.webp"}
        alt="Setup de un simracer"
        fill
        style={{ objectFit: "cover", objectPosition: "bottom" }}
        className="opacity-10 "
      />
      <aside className=" w-1/4 gap-2 h-full">
        <Events />
      </aside>
      <div className="p-3 pt-16 flex flex-col items-center gap-6">
        <h1 className="text-3xl text-slate-800 font-bold  pb-16">
          Próximos eventos
        </h1>
        <ul className="flex flex-wrap justify-center items-center min-w-fit gap-3">
          {events?.map((event) => {
            return (
              <li key={event.title} className="opacity-70">
                <EventCard event={event} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default EventsPage;
