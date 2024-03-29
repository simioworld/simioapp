import Link from "next/link";
import { PlusCircleIcon } from "lucide-react";
import EventLinks from "./EventLinks";

const NavEvents = () => {
  return (
    <aside className="flex flex-col flex-start gap-4 relative">
      <nav className="h-full gap-4 relative flex flex-col text-neutral-200">
        <EventLinks />

        <div className="group hidden xs:flex gap-2 items-center">
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
      </nav>
    </aside>
  );
};

export default NavEvents;
