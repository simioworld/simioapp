import { Plus } from "lucide-react";
import Link from "next/link";
import React from "react";

const CreateEventIcon = () => {
  return (
    <Link
      href={"/dashboard/events/create-event"}
      className="absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 text-orange-500  hover:rounded-full hover:bg-slate-200/100 transition-all duration-500"
    >
      <Plus />
    </Link>
  );
};

export default CreateEventIcon;
