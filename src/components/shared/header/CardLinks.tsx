"use client";

import { dashboardNavLinks, staatliches } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const CardLinksItems = () => {
  const pathname = usePathname();

  return (
    <>
      <nav className="h-full">
        <ul className="flex justify-between gap-2 w-full ">
          {dashboardNavLinks.map((link) => {
            const isActive =
              pathname.includes(link.path) || pathname === link.path;
            return (
              <li
                key={link.label}
                className={cn(
                  "group rounded-md shadow-xl w-1/5  bg-slate-600 group-hover:bg-slate-700 opacity-60 group-hover:opacity-100 duration-1000 transition-all",
                  isActive && " bg-slate-700 opacity-100 border-2 border-white"
                )}
              >
                <Link href={link.path}>
                  <article className="relative flex flex-col max-w-1/5 aspect-video duration-1000 transition-all  opacity-100 group-hover:opacity-100 group-hover:bg-transparent/80 group-hover:rounded-md">
                    <Image
                      src={`/assets/images/${link.label}.webp`}
                      alt={link.title}
                      fill
                      style={{ objectFit: "cover", objectPosition: "top" }}
                      className="opacity-50  rounded-md group-hover:opacity-15 aspect-video h-full"
                    />

                    <h4
                      className={cn(
                        `z-20 ${staatliches.className} group-hover:text-slate-100  opacity-10 group-hover:opacity-100  transition-all duration-500 text-center  tracking-wide font-bold text-[clamp(14px,2vw,36px)]    `,
                        isActive && "text-slate-200 opacity-100"
                      )}
                    >
                      {link.title}
                    </h4>
                  </article>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default CardLinksItems;
