import EventCard from "./EventCard";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { getEvents } from "@/lib/utils";
import { Loading } from "./Loading";

const EventList = async ({
  query,
  currentPage,
  firstItem,
  itemsPerPage,
}: {
  query: string;
  currentPage: number;
  firstItem: number;
  itemsPerPage: number;
}) => {
  const page = currentPage;

  const events = await getEvents(query);

  if (events === undefined) return <Loading />;

  const totalPages = Math.ceil(events.length / itemsPerPage);

  const lastItem = firstItem + itemsPerPage;

  const eventsToDisplay = events.slice(firstItem, lastItem);

  return (
    <div className="flex flex-col gap-4 w-full">
      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4  lg:px-4 xl:px-12 xl:gap-x-2 ">
        {eventsToDisplay.map((event) => {
          return (
            <li
              key={event.title}
              className="opacity-70 flex justify-center w-full"
            >
              <EventCard event={event} />
            </li>
          );
        })}
      </ul>
      <div className="z-20 w-full flex justify-center gap-16 lg:justify-between lg:px-16">
        {page > 1 ? (
          <Link
            className="text-slate-200/70 bg-transparent/30 rounded-full p-1"
            href={`/dashboard?query=${query}&page=${page - 1}&firstItem=${
              firstItem - itemsPerPage
            }`}
          >
            <ArrowLeft />
          </Link>
        ) : (
          <button className="text-slate-200/70 bg-transparent/30 rounded-full p-1 pointer-events-none">
            <ArrowLeft className="opacity-10" />
          </button>
        )}
        <div className="text-slate-200/70">{page}</div>
        {totalPages > page ? (
          <Link
            className="text-slate-200/70 bg-transparent/30 rounded-full p-1"
            href={`/dashboard?query=${query}&page=${page + 1}&firstItem=${
              firstItem + itemsPerPage
            }`}
          >
            <ArrowRight />
          </Link>
        ) : (
          <button className="text-slate-200/70 bg-transparent/30 rounded-full p-1 pointer-events-none">
            <ArrowRight className="opacity-10" />
          </button>
        )}
      </div>
    </div>
  );
};

export default EventList;
