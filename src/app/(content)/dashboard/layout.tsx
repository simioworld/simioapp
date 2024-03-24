import About from "@/components/About";
import Header from "@/components/shared/Header";
import CardLinksItems from "@/components/shared/CardLinks";

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
      <main className=" w-full flex p-8 gap-2 h-[90vh] ">
        <section className="flex-1 bg-gradient-to-br from-slate-600/80 to-[#374A67]/95 rounded-md shadow-xl ">
          {events}
        </section>

        <aside className="flex flex-col w-1/3 gap-2 h-full ">
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
