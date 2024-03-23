"use client";

import { useQuery } from "convex/react";
import EventCard from "@/components/shared/EventCard";
import { api } from "../../../../../convex/_generated/api";
import Events from "@/components/Events";

const EventsPage = () => {
  const events = useQuery(api.events.getEvents);
  return (
    <Events />
    /*     <div className="p-3 flex flex-col items-center gap-6">
      <h1 className="text-3xl text-blue-800 font-bold uppercase">Eventos</h1>
      <ul className="flex flex-wrap justify-center min-w-fit gap-3">
        {events?.map((event) => {
          return (
            <li key={event.title} className="">
              <EventCard event={event} />
            </li>
          );
        })}
      </ul>
    </div> */
  );
};

export default EventsPage;
