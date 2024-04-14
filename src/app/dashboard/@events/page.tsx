"use client";

import { staatliches } from "@/constants";

import { Suspense } from "react";
import Spinner from "@/components/shared/Spinner";
import SearchBar from "@/components/shared/SearchBar";
import EventList from "@/components/shared/EventList";

const EventsPage = ({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
    firstItem?: string;
    itemsPerPage?: string;
  };
}) => {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const firstItem = Number(searchParams?.firstItem) || 0;
  const itemsPerPage = Number(searchParams?.itemsPerPage) || 4;

  return (
    <section className=" flex flex-col items-center w-full space-y-3 lg:space-y-5 lg:px-6">
      <h2
        className={`${staatliches.className} z-20 hidden xs:flex  text-4xl xs:text-3xl text-slate-800/90 font-bold xs:justify-center   `}
      >
        Próximos eventos
      </h2>
      <div className="w-full flex items-center justify-center  lg:max-w-[420px] ">
        <SearchBar placeholder={"Buscar evento..."} firstItem={firstItem} />
      </div>
      <div className="w-full">
        <Suspense key={query + currentPage} fallback={<Spinner />}>
          <EventList
            query={query}
            currentPage={currentPage}
            firstItem={firstItem}
            itemsPerPage={itemsPerPage}
          />
        </Suspense>
      </div>
    </section>
  );
};

export default EventsPage;
