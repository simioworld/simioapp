/* import About from "@/components/About";
import Box from "@/components/Box";
import Communities from "@/components/Communities";
import Events from "@/components/Events";
import Recomendator from "@/components/Recomendator";
import Social from "@/components/Social";

const DashboardPage = () => {
  return (
    <main className="flex justify-between w-full p-8 h-min-screen gap-4">
      <section className="flex-1 grid grid-cols-7 grid-rows-3 h-1/3 w-full  gap-4">
        <div className="col-span-2 bg-slate-600 rounded-md shadow-xl hover:bg-slate-700 hover:scale-105 duration-500 transition-all">
          <Communities />
        </div>
        <div className="row-start-2 col-span-2 bg-slate-600 rounded-md shadow-xl hover:bg-slate-700 hover:scale-105 duration-500 transition-all ">
          <Events />
        </div>
        <div className="row-start-3 col-span-2 bg-slate-600 rounded-md shadow-xl hover:bg-slate-700 hover:scale-105 duration-500 transition-all ">
          <Recomendator />
        </div>

        <div className="row-start-1 col-start-3 col-span-5 row-span-3 bg-gradient-to-br from-slate-600/80 to-[#374A67]/95  rounded-md shadow-xl  duration-500 transition-all "></div>
      </section>
      <aside className="flex flex-col w-min-fit gap-4 ">
        <div className=" bg-slate-600 rounded-md shadow-xl hover:bg-slate-700 hover:scale-105 duration-500 transition-all w-48 h-48">
          <Box />
        </div>
        <div className=" bg-slate-600 rounded-md shadow-xl hover:bg-slate-700 hover:scale-105 duration-500 transition-all w-48 h-48">
          <Social />
        </div>
        <div className="flex-1 bg-slate-600 rounded-md shadow-xl hover:bg-slate-700 hover:scale-105 duration-500 transition-all">
          <About />
        </div>
      </aside>
    </main>
  );
};

export default DashboardPage;
 */
import React from "react";

const page = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center p-4 text-neutral-100/50">
      <h4>Ultimas noticias</h4>
      <p>Comunidades añadidas</p>
    </div>
  );
};

export default page;
