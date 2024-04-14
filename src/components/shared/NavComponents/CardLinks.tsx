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
        <ul className="flex flex-col justify-between gap-4 w-full h-full">
          {dashboardNavLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <li
                key={link.label}
                className={cn(
                  "group rounded-md shadow-xl  bg-slate-600 group-hover:bg-slate-700 opacity-60 group-hover:opacity-100 w-full h-1/4 hover:h-[300%] group-hover:self-start duration-1000 transition-all",
                  isActive &&
                    " bg-slate-700 opacity-100 border-2 border-white flex-0 h-[300%]  "
                )}
              >
                <Link href={link.path} className="text-slate-200 ">
                  <article className="relative  flex flex-col h-full px-2 sm:p-6 pt-3 items-center group-hover:items-start justify-center group-hover:justify-start duration-1000 transition-all text-neutral-200">
                    <Image
                      src={`/assets/images/${link.label}.webp`}
                      alt={link.title}
                      fill
                      style={{ objectFit: "cover", objectPosition: "center" }}
                      className="opacity-50 overflow-hidden rounded-md group-hover:opacity-15"
                    />
                    {/*                <h4
                      className={`${staatliches.className} absolute top-1/2 -translate-y-[40%] left-1/2 -translate-x-[49%]  tracking-wide font-bold uppercase text-[clamp(18px, 1.5vw,2rem)] text-orange-500 opacity-75 bg-transparent/50 px-2 rounded-md`}
                    >
                      {link.title}
                    </h4> */}
                    <div className="w-1/2 group-hover:w-full">
                      <h4
                        className={`z-20 ${staatliches.className} text-center  tracking-wide font-bold text-[clamp(18px,2vw,24px)] text-slate-100 opacity-75 group-hover:opacity-100 group-hover:bg-transparent/80 bg-transparent/50 px-16 rounded-md  `}
                      >
                        {link.title}
                      </h4>
                      <ul className="hidden group-hover:flex justify-center gap-4 text-slate-100 font-semibold">
                        {link.sublinks.map((sublink) => (
                          <li className="cursor-pointer" key={sublink}>
                            {sublink}
                          </li>
                        ))}
                      </ul>
                    </div>
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
