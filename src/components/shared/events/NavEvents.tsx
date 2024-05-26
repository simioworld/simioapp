"use client";

import Link from "next/link";
import Image from "next/image";
import { eventsNavLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Hint from "../Hint";

const NavEvents = () => {
  const pathname = usePathname();

  return (
    <nav>
      <ul className=" flex flex-row w-full items-center gap-2 xl:gap-3 justify-center ">
        {eventsNavLinks.map((link) => {
          const isActive = pathname === link.path;
          return (
            <li
              className={cn(
                `w-full group bg-slate-800 rounded-md p-1 px-2 hover:scale-105 transition-all duration-500`,
                isActive && "outline  outline-orange-500 "
              )}
              key={link.label}
            >
              <Hint
                label={link.title}
                align={"center"}
                side={"bottom"}
                sideOffset={16}
                alignOffset={0}
                className="md:hidden"
              >
                <div className="relative">
                  <Link
                    href={link.path}
                    className="w-full flex items-center justify-center gap-1 py-[2px] md:px-2 "
                  >
                    <Image
                      src={`/assets/icons/${link.label}.svg`}
                      alt={link.title}
                      width={14}
                      height={14}
                    />
                    <h3 className="w-full text-slate-100 text-semibold text-sm hidden md:block">
                      {link.title}
                    </h3>
                  </Link>
                </div>
              </Hint>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavEvents;
