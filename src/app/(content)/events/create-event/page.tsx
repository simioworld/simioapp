import EventForm from "@/components/shared/EventForm";
import { Staatliches } from "next/font/google";

const staatliches = Staatliches({ subsets: ["latin"], weight: ["400"] });

const CreateEventPage = () => {
  return (
    <section className="w-full max-w-sm sm:w-4/5 sm:max-w-lg flex flex-col place-items-center p-2 md:py-4 gap-4 ">
      <h3 className={`${staatliches.className} text-2xl text-neutral-600`}>
        <span className="text-red-700">Crea</span> un evento de simracing
      </h3>
      <EventForm type="Crear" />
    </section>
  );
};

export default CreateEventPage;
