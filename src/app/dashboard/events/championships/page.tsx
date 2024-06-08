"use client";
import { useQuery } from "convex/react";
import { api } from "../../../../../convex/_generated/api";
import EventCard from "@/components/shared/events/EventCard";
import { staatliches } from "@/constants";

const ChampionshipsEvents = () => {
  const championshipEvents = useQuery(api.events.getTypeEvents, {
    eventType: "Campeonato",
  });

  return (
    <section className="w-full justify-center flex flex-col gap-2 xs:pl-8">
      <h1
        className={`${staatliches.className} text-center text-3xl font-bold text-slate-800/70`}
      >
        Campeonatos
      </h1>
      <ul className="flex flex-wrap items-center justify-center gap-3">
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
