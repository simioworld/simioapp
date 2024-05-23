import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import EventCard from "./events/EventCard";

const CarouselCard = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  const events = useQuery(api.events.getEventsForCarousel);
  const eventsOdds = events?.map((event, index) => {
    if (index % 2 === 0) {
      return event;
    }
  });
  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-3/4 max-w-xs"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {events?.map((event, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <EventCard event={event} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default CarouselCard;
