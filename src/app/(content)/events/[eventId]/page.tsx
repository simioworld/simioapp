"use client";

import { useParams } from "next/navigation";
import { Id } from "../../../../../convex/_generated/dataModel";
import { useQuery } from "convex/react";
import { api } from "../../../../../convex/_generated/api";
import { useSession } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

const EventPage = () => {
  const { eventId } = useParams<{ eventId: Id<"events"> }>();

  const event = useQuery(api.events.getEvent, { eventId });
  const session = useSession();

  if (!event || !session) {
    return (
      <div className="flex justify-center items-center">...Cargando evento</div>
    );
  }

  if (!event.startDate) {
    return;
  }

  const month = event.startDate.split("-")[1];
  const day = +event.startDate.split("-")[2];

  const creationDate = new Date(event._creationTime);

  return (
    <section className="p-4 sm:p-10 w-full flex flex-col sm:flex-row  items-center justify-center sm:justify-around sm:items-start gap-6">
      <div className="w-full flex justify-center items-start p-4">
        <Image
          src={`/assets/images/simulators/${event.simulator}.webp`}
          alt={event.simulator}
          width={300}
          height={200}
          priority
          className="w-full  shadow-lg rounded-lg"
        />{" "}
      </div>
      <div className="pt-2 px-2 flex flex-col sm:items-start items-center justify-between gap-4 sm:w-full">
        <div className="pt-2 px-2 flex items-center justify-between gap-1">
          <h2 className="text-md sm:text-xl text-blue-800 font-semibold">
            {event.title}
          </h2>

          <Image
            src="/assets/icons/heart.svg"
            alt="corazon"
            width={16}
            height={16}
            className="cursor-pointer sm:hidden"
          />
        </div>
        <div className="p-2 w-full flex gap-5 justify-between text-xs sm:text-base">
          <div className="flex gap-1 justify-between ">
            <div className="flex flex-col gap-0">
              <div className="flex gap-2 items-center">
                <Image
                  src="/assets/icons/location.svg"
                  alt="circuito"
                  width={16}
                  height={16}
                  className=""
                />
                <p className="text-neutral-700 text-sm sm:text-base  ">
                  {event.location}
                </p>
              </div>
              <div className="text-xs sm:text:lg flex gap-2 sm:gap-4 items-center">
                <div className="flex gap-2 items-center">
                  <Image
                    src="/assets/icons/car.svg"
                    alt="coche"
                    width={16}
                    height={16}
                    className=""
                  />
                  <p className="">{event.carCategory}</p>
                </div>
                <div className="flex gap-1 items-center">
                  <Image
                    src={`/assets/icons/person.svg`}
                    alt={"icono de persona"}
                    width={16}
                    height={16}
                    className="text-neutral-700"
                  />
                  <p className="">{event.slots}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-xs sm:text-sm flex gap-0 items-center">
            <div className=" flex flex-col gap-0 sm:gap-1 ">
              <div className=" flex items-center justify-end gap-1 ">
                <Image
                  src="/assets/icons/clock.svg"
                  alt="reloj"
                  width={16}
                  height={16}
                  className="text-neutral-700"
                />
                <p className=" text-right ">{event.duration} min</p>
              </div>
              <div className="flex items-center justify-end gap-2 sm:gap-4">
                <Image
                  src="/assets/icons/calendar.svg"
                  alt="calendario"
                  width={16}
                  height={16}
                  className="text-neutral-700"
                />
                <p className="">
                  {day}/{month}
                </p>
              </div>
              <p className=" text-right">{event.startTime}</p>
            </div>
          </div>
        </div>
        <div className="p-4 bg-[#cecdce]">
          <p className=" text-sm sm:text-base text-pretty">
            {event.description}
          </p>
        </div>
        <div className="p-4 flex items-center w-full justify-between gap-2">
          <div className="flex items-center gap-1">
            <Link
              className="flex items-center gap-1"
              href={`${event.discordCommunity}`}
            >
              <Image
                src={"/assets/icons/discord.svg"}
                alt={"discord"}
                width={10}
                height={10}
                className="rounded-full p-1 bg-[#5865F2] h-4 w-4"
              />
              <p className="text-sm lowercase text-[#5865F2]  ">
                {event.community}
              </p>
            </Link>
          </div>
          <div className="text-xs">
            Creado por <span className="font-bold ">{event.userName}</span> el{" "}
            {creationDate.toLocaleDateString()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventPage;
