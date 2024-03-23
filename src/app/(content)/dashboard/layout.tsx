import About from "@/components/About";
import Communities from "@/components/Communities";
import Recomendator from "@/components/Recomendator";
import Social from "@/components/Social";
import Header from "@/components/shared/Header";
import Events from "@/components/Events";
import Box from "@/components/Box";
import Link from "next/link";

const DashboardLayout = ({
  children,
  events,
}: {
  children: React.ReactNode;
  events: React.ReactNode;
}) => {
  return (
    <div className="bg-gradient-to-b w-full from-slate-700 via-slate-800 to-slate-700 min-h-screen">
      <Header />
      <main className=" w-full flex p-8 gap-2">
        <section className="flex-1 bg-gradient-to-br from-slate-600/80 to-[#374A67]/95 rounded-md shadow-xl">
          {events}
        </section>

        <aside className="flex flex-col w-1/3 gap-2 ">
          <nav className=" w-full flex flex-wrap gap-2">
            <div className="w-1/2 bg-slate-600 rounded-md shadow-xl ">
              <Link href="/dashboard/communities">
                <Communities />
              </Link>
            </div>

            <div className="flex-1 bg-slate-600 rounded-md shadow-xl  ">
              <Recomendator />
            </div>
            <div className="w-1/2 bg-slate-600 rounded-md shadow-xl ">
              <Box />
            </div>
            <div className="flex-1 bg-slate-600 rounded-md shadow-xl ">
              <Social />
            </div>
          </nav>

          <div className="flex-1 py-56  bg-slate-600 rounded-md shadow-xl">
            {children}
          </div>
        </aside>
      </main>
    </div>
  );
};

export default DashboardLayout;
