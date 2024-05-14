import EventForm from "@/components/shared/events/EventForm";
import { auth } from "@clerk/nextjs";

const UpdateEventsPage = () => {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;

  return (
    <section className="flex flex-col place-items-center py-5 md:py-10 bg-background  text-red-900 font-bold text-4xl  ">
      <h3 className="uppercase">Modificar Evento</h3>
      <EventForm userId={userId} type="Editar" />
    </section>
  );
};

export default UpdateEventsPage;
