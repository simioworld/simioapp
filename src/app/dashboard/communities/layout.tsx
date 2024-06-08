"use client";

import ImageBackground from "@/components/shared/ImageBackground";
import SubHeader from "@/components/shared/SubHeader";
import NavCommunities from "@/components/shared/communities/NavCommunities";
import { usePathname } from "next/navigation";
import React from "react";

const CommunitiesLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <section className="overflow-hidden  h-full relative flex flex-col items-center w-full   ">
      <ImageBackground route={pathname} />
      <SubHeader title="Comunidades" path={pathname}>
        <NavCommunities />
      </SubHeader>

      <div className="flex flex-col sm:px-4 sm:flex-row items-center pt-2 sm:pt-10 pb-4 w-full ">
        {children}
      </div>
    </section>
  );
};

export default CommunitiesLayout;
