import React from "react";
import { Loading } from "../Loading";
import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { Id } from "../../../../convex/_generated/dataModel";
import EventCard from "../events/EventCard";

interface CommunityEventsProps {
  communityId: Id<"communities">;
}
const CommunityEvents = ({ communityId }: CommunityEventsProps) => {
  const communityEvents = useQuery(api.community.getCommunityEvents, {
    communityId,
  });
  console.log(communityEvents);
  if (!communityEvents) return <Loading />;
  return (
    <ul className="flex flex-wrap justify-center w-full gap-2">
      {communityEvents?.map((communityEvent) => (
        <li key={communityEvent._id}>
          <EventCard event={communityEvent} />
        </li>
      ))}
    </ul>
  );
};

export default CommunityEvents;
