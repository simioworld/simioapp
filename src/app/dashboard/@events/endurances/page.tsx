"use client";
import { useQuery } from "convex/react";
import { api } from "../../../../../convex/_generated/api";
import EventCard from "@/components/shared/EventCard";
import { staatliches } from "@/constants";

const EnduranceEvents = () => {
  const championshipEvents = useQuery(api.events.getTypeEvents, {
    eventType: "Resistencia",
  });

  return (
    <section className=" w-full self-stretch flex flex-col  gap-2 xs:pl-8">
      <h2
        className={`${staatliches.className} text-3xl font-bold text-slate-800/90 `}
      >
        Resistencias
      </h2>
      <ul className="flex flex-wrap  gap-3">
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

export default EnduranceEvents;
