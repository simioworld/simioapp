import Header from "@/components/shared/Header";
import CardLinksItems from "@/components/shared/CardLinks";
import NavEvents from "@/components/shared/NavEvents";
import Image from "next/image";
import SearchBar from "@/components/shared/SearchBar";

const DashboardLayout = ({
  children,
  events,
}: {
  children: React.ReactNode;
  events: React.ReactNode;
}) => {
  return (
    <div className="bg-gradient-to-b w-full from-slate-700 via-slate-800 to-slate-700 min-h-screen flex flex-col gap-4 p-4 px-6">
      <Header />

      <main className=" w-full flex flex-col-reverse sm:flex sm:flex-row gap-2  min-h-[80vh]">
        <section className="  relative flex-1 p-4 xs:p-8 bg-gradient-to-br from-slate-600/80 to-[#374A67]/95 rounded-md shadow-xl flex flex-col xs:flex-row gap-4 xs:gap-6 ">
          <Image
            src={"/assets/images/fondo.webp"}
            alt="Setup de un simracer"
            fill
            style={{ objectFit: "cover", objectPosition: "bottom" }}
            className="opacity-10 "
          />
          <aside className="">
            <NavEvents />
          </aside>
          {events}
        </section>

        <aside className="flex flex-col w-full sm:w-1/3 gap-2 h-full ">
          <CardLinksItems />
          <div className="flex-1 h-1 bg-slate-700 rounded-md shadow-xl">
            {children}
          </div>
        </aside>
      </main>
    </div>
  );
};

export default DashboardLayout;
