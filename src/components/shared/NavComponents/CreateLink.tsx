import { PlusCircleIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const CreateLink = () => {
  return (
    <div className="text-slate-400 hover:text-slate-300 w-full  flex flex-row-reverse xs:flex-row  gap-2 items-center transition-all duration-500">
      <Link href="/dashboard/create-event" className="">
        <PlusCircleIcon size={24} />
      </Link>
      <div className="w-1/2 font-medium text-sm p-2 text-right xs:text-left  rounded-md  group-hover:flex  ">
        Crear
      </div>
    </div>
  );
};

export default CreateLink;
