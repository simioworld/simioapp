"use client";

import { headerNavItems } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavItems = () => {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex items-start justify-center md:items-center gap-4 w-full flex-col md:flex-row">
        {headerNavItems.map((link) => {
          const isActive = pathname === link.path;
          return (
            <li
              key={link.label}
              className={`${isActive && "border-b-2 border-b-red-600"}`}
            >
              <Link href={link.path}>{link.label}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavItems;
