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
    <section className="w-full h-full flex flex-col items-center justify-center overflow-hidden relative">
      <ImageBackground route={pathname} />
      <div className="w-full flex flex-row justify-between px-2">
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
      <div className="w-full flex flex-col sm:flex-row items-center justify-center p-4 lg:pt-10 ">
        {children}
      </div>
    </section>
  );
};

export default EventLayout;
