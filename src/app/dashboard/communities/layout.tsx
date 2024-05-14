"use client";

import ImageBackground from "@/components/shared/ImageBackground";
import SubHeader from "@/components/shared/SubHeader";
import NavCommunities from "@/components/shared/communities/NavCommunities";
import { usePathname } from "next/navigation";
import React from "react";

const CommunitiesLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const route = pathname.split("/").at(-1);
  if (!route) return null;

  return (
    <section className="overflow-hidden  h-full relative flex flex-col items-center w-full   ">
      <ImageBackground route={route} />
      <SubHeader
        title="Comunidades"
        path={route}
        children={<NavCommunities />}
      />

      <div className="flex flex-col px-4 sm:flex-row items-center  pt-10 pb-4 w-full ">
        {children}
      </div>
    </section>
  );
};

export default CommunitiesLayout;
