"use client";
import { useQuery } from "convex/react";
import { api } from "../../../../../convex/_generated/api";
import EventCard from "@/components/shared/EventCard";
import { staatliches } from "@/constants";

const ChampionshipsEvents = () => {
  const championshipEvents = useQuery(api.events.getTypeEvents, {
    eventType: "Campeonato",
  });

  return (
    <section className="  flex flex-col  gap-2 pl-8">
      <h2
        className={`${staatliches.className} text-3xl font-bold text-slate-800/90 `}
      >
        Campeonatos
      </h2>
      <ul className="flex justify-center items-center  gap-3">
        {championshipEvents?.map((event) => {
          return (
            <li key={event.title} className="opacity-70">
              <EventCard event={event} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default ChampionshipsEvents;
