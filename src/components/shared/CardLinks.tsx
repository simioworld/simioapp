"use client";

import { dashboardNavLinks, staatliches } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const CardLinksItems = () => {
  const pathname = usePathname();

  return (
    <>
      <nav>
        <ul className="grid grid-cols-2 gap-2">
          {dashboardNavLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <li
                key={link.label}
                className={`${
                  isActive && "bg-slate-700 border-2 border-white"
                }  bg-slate-600 rounded-md shadow-xl hover:bg-slate-700 hover:scale-105 duration-500 transition-all`}
              >
                <Link href={link.path} className="text-slate-200 ">
                  <article className="relative flex flex-col py-4 pt-6 items-center justify-center text-neutral-200">
                    <Image
                      src={`/assets/images/${link.label}.webp`}
                      alt={link.title}
                      fill
                      style={{ objectFit: "cover", objectPosition: "center" }}
                      className="opacity-10"
                    />
                    <h4
                      className={`${staatliches.className} tracking-wide font-bold uppercase text-[clamp(14px,1.5vw,2rem)] text-neutral-300`}
                    >
                      {link.title}
                    </h4>
                    <ul className="mt-2 font-light"></ul>
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
