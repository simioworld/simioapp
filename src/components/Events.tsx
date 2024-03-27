"use client";

import { eventsNavLinks, staatliches } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Events = () => {
  const pathname = usePathname();
  return (
    <nav className="h-full relative  flex flex-col text-neutral-200">
      <h4
        className={`${staatliches.className} tracking-wide font-bold uppercase text-3xl text-slate-100`}
      >
        Eventos
      </h4>
      <ul className=" font-light">
        {eventsNavLinks.map((link) => {
          const isActive = pathname === link.path;
          return (
            <li
              key={link.label}
              className={`${
                isActive && "text-orange-400 font-medium"
              } text-sm border-b-2 border-transparent hover:border-orange-500 hover:border-b-2`}
            >
              <Link href={link.path}>{link.title}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Events;
