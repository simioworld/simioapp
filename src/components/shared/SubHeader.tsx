import { staatliches } from "@/constants";
import Link from "next/link";
import React from "react";

interface NavEventsProps {
  children?: React.ReactNode;
  title: string;
  path?: string;
}
const SubHeader = ({ children, title, path }: NavEventsProps) => {
  if (!path) return null;
  const splitedPath = path?.split("/").at(2);
  return (
    <header className="w-full flex flex-row md:gap-4 items-center justify-between py-2 relative opacity-80">
      <div className="flex flex-row gap-2 md:gap-4 items-center">
        <Link href={`/dashboard/${splitedPath}`}>
          <h2
            className={`${staatliches.className}  xs:flex text-3xl md:text-4xl text-orange-500 font-bold xs:justify-center`}
          >
            {title}
          </h2>
        </Link>
        {children}
      </div>
    </header>
  );
};

export default SubHeader;
