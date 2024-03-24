import Image from "next/image";
import { Id } from "../../../convex/_generated/dataModel";
import Link from "next/link";

export interface EventStructure {
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
  userId: string;
  userName: string;
}

const EventCard = ({ event }: { event: EventStructure }) => {
  const month = event.startDate?.split("-")[1];
  const day = event.startDate?.split("-")[2];

  return (
    <Link href={`/events/${event._id}`}>
      <article className="text-neutral-200 flex flex-col  shadow-md rounded-lg  overflow-hidden hover:scale-105 duration-500 transition-all">
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
        <div className="p-4 py-2 flex flex-col gap-1 bg-transparent/20 backdrop-blur-sm">
          <div className="flex gap-1 items-center justify-between">
            <h2 className="text-slate-200 font-bold text-lg">
              {event.eventType}
            </h2>
            <Image
              src="/assets/icons/heart.svg"
              alt="corazon"
              width={16}
              height={16}
              className="cursor-pointer"
            />
          </div>
          <div className="flex gap-1 justify-between  ">
            <div className="flex gap-1 justify-between  ">
              <div className="flex flex-col gap-0">
                <div className="flex gap-2 items-center">
                  <Image
                    src="/assets/icons/location.svg"
                    alt="circuito"
                    width={12}
                    height={12}
                    className=""
                  />
                  <p className="text-neutral-200 text-sm ">{event.location}</p>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="flex gap-2 items-center">
                    <Image
                      src="/assets/icons/car.svg"
                      alt="coche"
                      width={14}
                      height={14}
                      className=""
                    />
                    <p className="text-xs">{event.carCategory}</p>
                  </div>
                  <div className="flex gap-1 items-center">
                    <Image
                      src={`/assets/icons/person.svg`}
                      alt={"icono de persona"}
                      width={12}
                      height={12}
                      className="text-neutral-200"
                    />
                    <p className="text-xs">{event.slots}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-0 items-center">
              <div className=" flex flex-col gap-0 ">
                <div className=" flex justify-end gap-1 ">
                  <Image
                    src="/assets/icons/clock.svg"
                    alt="reloj"
                    width={12}
                    height={12}
                    className="text-neutral-200"
                  />
                  <p className="text-xs text-right ">{event.duration} min</p>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    src="/assets/icons/calendar.svg"
                    alt="calendario"
                    width={12}
                    height={12}
                    className="text-neutral-200"
                  />
                  <p className="text-xs">
                    {day}/{month}
                  </p>
                </div>
                <p className="text-xs text-right">{event.startTime} h</p>
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
                width={14}
                height={14}
                className="rounded-full h-4 w-4"
              />
              <p className="text-sm capitalize ">{event.community}</p>
            </div>
            <div className="text-xxs">Creado por {event.userName}</div>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default EventCard;
