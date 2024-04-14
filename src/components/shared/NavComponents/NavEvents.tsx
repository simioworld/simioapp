import Link from "next/link";
import { PlusCircleIcon } from "lucide-react";
import EventLinks from "./EventLinks";
import CreateLink from "./CreateLink";

const NavEvents = () => {
  return (
    <aside className="flex flex-col flex-start gap-4 relative sm:max-w-fit">
      <nav className="h-full sm:max-w-fit gap-4 relative flex flex-col text-neutral-200">
        <EventLinks />
        <div className="hidden xs:flex">
          <CreateLink />
        </div>
      </nav>
    </aside>
  );
};

export default NavEvents;
