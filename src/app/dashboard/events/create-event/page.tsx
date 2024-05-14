import EventForm from "@/components/shared/events/EventForm";
import { staatliches } from "@/constants";

const CreateEventPage = () => {
  return (
    <section className="w-full  flex flex-col  gap-0 ">
      <h3
        className={`${staatliches.className} text-3xl text-center text-slate-300`}
      >
        <span className="text-slate-100/80">Crea</span> un evento de simracing
      </h3>
      <EventForm type="Crear" />
    </section>
  );
};

export default CreateEventPage;
