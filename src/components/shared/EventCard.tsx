"use client";

import Image from "next/image";
import { Id } from "../../../convex/_generated/dataModel";
import Link from "next/link";
import { staatliches } from "@/constants";
import { useAuth } from "@clerk/nextjs";
import { useApiMutation } from "@/hooks/useApiMutation";
import { api } from "../../../convex/_generated/api";
import FavoriteButton from "./FavoriteButton";

export interface EventCardProps {
  _id: Id<"events">;
  title: string;
  eventType:
    | "Campeonato"
    | "Carrera"
    | "Entrenamiento"
    | "Reto"
    | "Resistencia";
  carCategory: "GT2" | "GT3" | "GT4" | "Porsche Cup" | "Otra";
  location: string;
  simulator:
    | "ACC"
    | "Assetto Corsa"
    | "Automobilista 2"
    | "F1"
    | "GT7"
    | "iRacing"
    | "Project Cars 2"
    | "RaceRoom"
    | "rFactor 2"
    | "Otro";
  description: string;
  startDate?: string;
  startTime?: string;
  duration: string;
  slots: string;
  community: string;
  discordCommunity: string;
  authorId: string;
  userName: string;
}

const EventCard = ({ event }: { event: EventCardProps }) => {
  const { userId } = useAuth();

  /*   const { mutate: onFavorite, pending: pendingFavorite } = useApiMutation(
    api.event.favorite
  );
  const { mutate: onUnfavorite, pending: pendingUnfavorite } = useApiMutation(
    api.event.unfavorite
  );

  const onToggleFavorite = () => {
    if (event.isFavorite) {
      onUnfavorite(event._id);
    } else {
      onFavorite(event._id);
    }
  }; */
  const month = event.startDate?.split("-")[1];
  const day = event.startDate?.split("-")[2];

  return (
    <Link href={`/dashboard/${event._id}`}>
      <article className="text-neutral-200 flex flex-col  shadow-md rounded-lg  overflow-hidden hover:scale-105 duration-500 transition-all max-w-52 min-w-48">
        <div>
          <Image
            src={`/assets/images/simulators/${event.simulator}.webp`}
            alt={`foto de ${event.simulator}`}
            width={200}
            height={200}
            className="w-full  "
            priority
          />
        </div>
        <div className="p-4 py-2 flex flex-col gap-2 bg-transparent/30 ">
          <div className="flex flex-col">
            <div className="flex gap-1 items-center justify-between">
              <h2
                className={`${staatliches.className} text-orange-500/90 font-bold text-xl`}
              >
                {event.eventType}
              </h2>
              {/*             <FavoriteButton
              isFavorite={event.isFavorite}
              onClick={() => {}}
      
            /> */}
            </div>
            <div className="flex gap-1 justify-between  ">
              <div className="flex gap-1 justify-between  ">
                <div className="flex flex-col gap-0">
                  <div className="flex gap-1 items-center">
                    <Image
                      src="/assets/icons/location.svg"
                      alt="circuito"
                      width={12}
                      height={12}
                      className=""
                    />
                    <p className="text-neutral-200 text-xxs ">
                      {event.location}
                    </p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className="flex gap-1 items-center">
                      <Image
                        src="/assets/icons/car.svg"
                        alt="coche"
                        width={12}
                        height={12}
                        className=""
                      />
                      <p className="text-xxs">{event.carCategory}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 items-center">
                    <Image
                      src={`/assets/icons/person.svg`}
                      alt={"icono de persona"}
                      width={12}
                      height={12}
                      className="text-neutral-200"
                    />
                    <p className="text-xxs">{event.slots}</p>
                  </div>
                </div>
              </div>

              <div className=" flex flex-col ">
                <div className=" flex justify-between gap-1 ">
                  <Image
                    src="/assets/icons/clock.svg"
                    alt="reloj"
                    width={12}
                    height={12}
                    className="text-neutral-200"
                  />
                  <p className="text-xxs text-right ">{event.duration} min</p>
                </div>
                <div className="flex gap-1 justify-between">
                  <Image
                    src="/assets/icons/calendar.svg"
                    alt="calendario"
                    width={12}
                    height={12}
                    className="text-neutral-200"
                  />
                  <p className="text-xxs">
                    {day}/{month}
                  </p>
                </div>
                <p className="text-xxs text-right">{event.startTime} h</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-1">
              <Image
                src={`/assets/images/communities/${event.community
                  .toLowerCase()
                  .replaceAll(" ", "")}.webp`}
                alt={event.community}
                width={12}
                height={12}
                className="rounded-full h-4 w-4"
              />
              <p className="text-xxs capitalize ">{event.community}</p>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default EventCard;
