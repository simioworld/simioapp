"use client";

import { useParams } from "next/navigation";
import { useQuery } from "convex/react";
import { useSession } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Id } from "../../../../../convex/_generated/dataModel";
import { api } from "../../../../../convex/_generated/api";
import { staatliches } from "@/constants";
import { ArrowBigLeft, ArrowLeft } from "lucide-react";

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
    <section className=" pl-12 pt-12  w-full flex flex-col  items-center justify-center   gap-10">
      <div className="flex flex-col gap-2 sm:flex-row justify-center w-full ">
        <div className="w-full flex justify-center ">
          <Image
            src={`/assets/images/simulators/${event.simulator}.webp`}
            alt={event.simulator}
            width={300}
            height={200}
            priority
            className="w-full  shadow-lg rounded-lg"
          />{" "}
        </div>
        <div className=" flex flex-col py-4 items-center justify-between w-full">
          <div className="w-full flex gap-8 justify-center text-xs sm:text-base">
            <div className="flex gap-1 justify-between ">
              <div className="flex flex-col gap-1">
                <div className="flex gap-1 items-center">
                  <Image
                    src="/assets/icons/location.svg"
                    alt="circuito"
                    width={14}
                    height={14}
                    className=" text-slate-300"
                  />
                  <p className="text-slate-300 text-sm  ">{event.location}</p>
                </div>
                <div className="text-sm flex gap-2 sm:gap-4 items-center">
                  <div className="flex gap-2 items-center">
                    <Image
                      src="/assets/icons/car.svg"
                      alt="coche"
                      width={16}
                      height={16}
                      className=""
                    />
                    <p className="text-sm  text-slate-300">
                      {event.carCategory}
                    </p>
                  </div>
                  <div className="flex gap-1 items-center">
                    <Image
                      src={`/assets/icons/person.svg`}
                      alt={"icono de persona"}
                      width={14}
                      height={14}
                      className="text-slate-300"
                    />
                    <p className="text-sm  text-slate-300">{event.slots}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-sm flex gap-0 items-center">
              <div className=" flex flex-col gap-0 sm:gap-1 ">
                <div className=" flex items-center justify-end gap-1 ">
                  <Image
                    src="/assets/icons/clock.svg"
                    alt="reloj"
                    width={14}
                    height={14}
                    className="text-slate-300"
                  />
                  <p className=" text-right text-sm  text-slate-300">
                    {event.duration} min
                  </p>
                </div>
                <div className="flex items-center justify-end gap-2 sm:gap-4">
                  <Image
                    src="/assets/icons/calendar.svg"
                    alt="calendario"
                    width={14}
                    height={14}
                    className="text-slate-300"
                  />
                  <p className=" text-slate-300 text-sm">
                    {day}/{month}
                  </p>
                </div>
                <p className=" text-right text-sm  text-slate-300">
                  {event.startTime}
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center bg-slate-700 rounded-full px-4 py-2 gap-4">
            <Link
              className={` ${staatliches.className} flex items-center gap-2`}
              href={`${event.discordCommunity} `}
            >
              <Image
                src={"/assets/icons/discord.svg"}
                alt={"discord"}
                width={10}
                height={10}
                className="rounded-full p-1 bg-[#5865F2] h-4 w-4"
              />
              <p className="text-sm  font-bold text-[#b6b8d2]  ">
                {event.community}
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <h2
          className={`${staatliches.className} w-full text-md text-center sm:text-2xl text-orange-500/90 font-bold`}
        >
          {event.title}
        </h2>
        <div className="flex flex-col bg-transparent/10 rounded-md px-8 py-4 pb-8 gap-4 w-3/4">
          <div className=" bg-transparent w-full">
            <p className=" text-sm text-pretty text-slate-300">
              {event.description}
            </p>
          </div>
          <div className="flex items-center w-full justify-between gap-2  rounded-md">
            <div className="text-xs  text-slate-300">
              Creado por <span className="font-bold ">{event.userName}</span> el{" "}
              {creationDate.toLocaleDateString()}
            </div>
          </div>
        </div>
        <div className="relative flex w-full">
          <div className="absolute  text-slate-300 top-1/2 left-1/2 -translate-x-16 -translate-y-1/2">
            <ArrowLeft className="" />
          </div>
          <Link
            className="text-center w-full  text-slate-300 z-20"
            href={`/dashboard`}
          >
            Volver
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EventPage;
