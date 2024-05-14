import EventList from "@/components/shared/events/EventList";
import Spinner from "@/components/shared/Spinner";
import { Suspense } from "react";

const EventPage = ({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
    firstItem?: string;
    itemsPerPage?: string;
    favorites?: string;
  };
}) => {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const firstItem = Number(searchParams?.firstItem) || 0;
  const itemsPerPage = 4;

  return (
    <Suspense key={query + currentPage} fallback={<Spinner />}>
      <EventList
        query={query}
        currentPage={currentPage}
        firstItem={firstItem}
        itemsPerPage={itemsPerPage}
      />
    </Suspense>
  );
};

export default EventPage;
