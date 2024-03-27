import React from "react";
import Events from "../Events";
import Link from "next/link";
import { PlusCircleIcon } from "lucide-react";

const NavEvents = () => {
  return (
    <aside className="flex flex-col flex-start gap-4 relative">
      <nav className="h-full gap-4 relative flex flex-col text-neutral-200">
        <Events />
        <Link href="/dashboard/create-event" className="">
          <PlusCircleIcon size={32} className="text-slate-400 " />
        </Link>
      </nav>
    </aside>
  );
};

export default NavEvents;
