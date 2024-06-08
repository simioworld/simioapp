import Header from "@/components/shared/header/Header";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" w-full bg-gradient-to-b from-slate-700 via-slate-800  to-slate-700 flex justify-center min-h-screen">
      <div className=" w-full lg:w-3/4 flex flex-col gap-4 p-4">
        <Header />

        <main className=" w-full flex flex-row gap-2 sm:gap-4 rounded-md sm:shadow-md">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
