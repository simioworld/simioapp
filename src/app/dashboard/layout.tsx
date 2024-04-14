import Header from "@/components/shared/Header";
import CardLinksItems from "@/components/shared/NavComponents/CardLinks";
import NavEvents from "@/components/shared/NavComponents/NavEvents";
import Image from "next/image";
import { Suspense } from "react";
import Spinner from "@/components/shared/Spinner";

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

      <main className=" w-full flex flex-row gap-2 sm:gap-4 min-h-[80vh]">
        <section
          className="relative p-4 px-6 xs:p-8  bg-gradient-to-br from-slate-600/80 to-[#374A67]/95 rounded-md shadow-xl flex flex-col items-center xs:items-start xs:flex-row xs:justify-start lg:justify-center gap-y-4 lg:gap-6 w-2/3 flex-grow-1
        "
        >
          <Image
            src={"/assets/images/fondo.webp"}
            alt="Setup de un simracer"
            fill
            style={{ objectFit: "cover", objectPosition: "top" }}
            className="opacity-10  "
          />
          <aside className="self-start  w-full xs:w-2/5 lg:w-1/5">
            <NavEvents />
          </aside>
          <div className="w-full xs:w-3/5 lg:w-4/5">
            <Suspense fallback={<Spinner />}>
              <section>{events}</section>
            </Suspense>
          </div>
        </section>

        <aside className=" w-1/3 min-h-full ">
          <CardLinksItems />
          <div className="flex-1 h-full bg-slate-700 rounded-md shadow-xl hidden">
            {children}
          </div>
        </aside>
      </main>
    </div>
  );
};

export default DashboardLayout;
