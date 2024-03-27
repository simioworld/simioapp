"use client";

import { useQuery } from "convex/react";
import EventCard from "@/components/shared/EventCard";
import { staatliches } from "@/constants";
import { api } from "../../../../convex/_generated/api";

const EventsPage = () => {
  const events = useQuery(api.events.getEvents);
  if (!events) return [];

  return (
    <section className="w-full pl-8 flex flex-col gap-2 ">
      <h2
        className={`${staatliches.className} text-3xl text-slate-800/90 font-bold `}
      >
        Próximos eventos
      </h2>
      <ul className="flex flex-wrap gap-3">
        {events.slice(0, 4).map((event) => {
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

export default EventsPage;
