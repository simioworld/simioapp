import { Link, PlusCircleIcon } from "lucide-react";

interface CreateItemProps {
  classname: string;
}
const CreateItem = ({ classname }: CreateItemProps) => {
  return (
    <div className={classname}>
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
  );
};

export default CreateItem;
