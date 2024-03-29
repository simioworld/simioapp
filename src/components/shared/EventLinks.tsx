"use client";

import { eventsNavLinks, staatliches } from "@/constants";
import { PlusCircleIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const EventLinks = () => {
  const pathname = usePathname();
  return (
    <nav className="  h-full relative flex flex-col gap-1 text-neutral-200">
      <div className="flex items-center justify-between">
        <Link href={"/dashboard"} className="relative">
          <h4
            className={`${staatliches.className} tracking-wide font-bold uppercase text-3xl text-orange-400   `}
          >
            Eventos
          </h4>
          <h4
            className={`${staatliches.className} absolute tracking-wide font-bold uppercase text-3xl text-slate-300 top-[1px] left-[1px]  mb-1 p-0 hover:underline hover:underline-offset-4 hover:decoration-orange-500  `}
          >
            Eventos
          </h4>
        </Link>
        <div className="group flex flex-row-reverse xs:hidden gap-2 items-center">
          <Link href="/dashboard/create-event" className="">
            <PlusCircleIcon
              size={32}
              className="text-slate-400 hover:text-slate-200 "
            />
          </Link>
          <div className="text-slate-200 w-1/2 font-medium text-xs p-2 text-center bg-transparent/20 rounded-md hidden group-hover:flex ">
            Crear
          </div>
        </div>
      </div>
      <ul className="flex flex-row flex-wrap xs:flex-col  gap-x-2">
        {eventsNavLinks.map((link) => {
          const isActive = pathname === link.path;
          return (
            <li
              key={link.label}
              className={`${
                isActive && "text-orange-400 font-semibold"
              } text-sm border-b-2 border-transparent hover:underline hover:underline-offset-4 hover:decoration-orange-500     `}
            >
              <Link href={link.path}>{link.title}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default EventLinks;
