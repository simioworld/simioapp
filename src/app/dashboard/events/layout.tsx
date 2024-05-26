"use client";

import Hint from "@/components/shared/Hint";
import ImageBackground from "@/components/shared/ImageBackground";
import SubHeader from "@/components/shared/SubHeader";
import CreateEventIcon from "@/components/shared/events/CreateEvent";
import NavEvents from "@/components/shared/events/NavEvents";
import { usePathname } from "next/navigation";
import React from "react";

const EventLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  return (
    <section className="overflow-hidden  h-full relative flex flex-col items-center w-full   ">
      <ImageBackground route={pathname} />
      <div className="flex flex-row justify-start w-full px-4">
        <SubHeader title="Eventos" path={pathname}>
          <NavEvents />
        </SubHeader>
        <div className="relative">
          <Hint
            label={"Crear evento"}
            align={"end"}
            side={"bottom"}
            sideOffset={28}
            alignOffset={10}
          >
            <CreateEventIcon />
          </Hint>
        </div>
      </div>
      <div className="flex flex-col px-4 sm:flex-row items-center pt-4 lg:pt-10 pb-4 w-full ">
        {children}
      </div>
    </section>
  );
};

export default EventLayout;
