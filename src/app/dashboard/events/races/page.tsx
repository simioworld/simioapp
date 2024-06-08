"use client";
import { useQuery } from "convex/react";
import { api } from "../../../../../convex/_generated/api";
import EventCard from "@/components/shared/events/EventCard";
import { staatliches } from "@/constants";

const RaceEvents = () => {
  const raceEvents = useQuery(api.events.getTypeEvents, {
    eventType: "Carrera",
  });

  return (
    <section className="w-full self-stretch  flex flex-col  gap-2 xs:pl-8">
      <h1
        className={`${staatliches.className} text-3xl font-bold text-slate-800/90 `}
      >
        Carreras
      </h1>
      <ul className="flex flex-wrap  gap-3">
        {raceEvents?.map((event) => {
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

export default RaceEvents;
