"use client";

import { useParams } from "next/navigation";
import { useQuery } from "convex/react";
import { useSession } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Id } from "../../../../../convex/_generated/dataModel";
import { api } from "../../../../../convex/_generated/api";
import { montserrat, staatliches } from "@/constants";
import { ArrowLeft } from "lucide-react";

const EventPage = () => {
  const { eventId } = useParams<{ eventId: Id<"events"> }>();

  const event = useQuery(api.event.getEvent, { eventId });
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
    <section className="relative md:pl-2 w-full pr-2 flex flex-col  xs:items-center justify-center lg:justify-start gap-2 lg:gap-6">
      <div className="flex flex-col lg:gap-8 lg:flex-row justify-center w-full min-w-[285px]  ">
        <div className="w-full relative flex flex-col justify-center">
          <Image
            src={`/assets/images/simulators/${event.simulator}.webp`}
            alt={event.simulator}
            width={400}
            height={200}
            priority
            className="w-full  shadow-lg rounded-t-lg"
          />
          <h2
            className={`${staatliches.className}  text-xl text-center  text-orange-500/80 font-bold  rounded-b-md lg:px-8 xs:p-4 p-2 gap-4 w-full bg-transparent/30`}
          >
            {event.title}
          </h2>
        </div>
        <div className=" flex flex-col py-1 xs:pt-4  justify-between w-full gap-1">
          <div className="w-full flex  justify-between   text-xs sm:text-base">
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
          <div className=" p-1 mt-3 w-full flex justify-between items-center rounded-full bg-transparent/30">
            <Image
              src={`/assets/images/communities/${event.community
                .replaceAll(" ", "")
                .toLowerCase()}.webp`}
              alt={event.community}
              width={16}
              height={16}
              priority
              className="rounded-full shadow-lg h-6 w-6  "
            />
            <p className="text-base  z-20 font-italica  text-slate-300">
              {event.community}
            </p>{" "}
            <Link
              className={` ${montserrat.className} flex items-center gap-2`}
              href={`${event.discordCommunity} `}
              target="_blank"
            >
              <Image
                src={"/assets/icons/discord.svg"}
                alt={"discord"}
                width={16}
                height={16}
                className="rounded-full p-1 bg-[#5865F2] h-6 w-6"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col relative gap-2 items-center">
        <div className="flex flex-col bg-transparent/30 rounded-md xs:px-8 xs:py-4 p-5 xs:pb-8 gap-4 w-full">
          <p className=" text-sm text-pretty text-slate-300">
            {event.description}
          </p>
          <div className="flex items-center w-full justify-between gap-2  rounded-md">
            <div className="text-xs  text-slate-300">
              Creado por <span className="font-bold ">{event.userName}</span> el{" "}
              {creationDate.toLocaleDateString()}
            </div>
          </div>
        </div>
        <div className="relative mt-2 flex w-full">
          <div className="absolute text-slate-300 top-1/2 left-1/2 -translate-x-16 -translate-y-1/2">
            <ArrowLeft className="rounded-full bg-transparent/30 p-1" />
          </div>
          <Link
            className="text-center w-full text-slate-300 z-20"
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
