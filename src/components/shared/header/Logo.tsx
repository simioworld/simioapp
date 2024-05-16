import { staatliches } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/dashboard/events"}>
      <div
        className={` text-4xl text-slate-400/90 flex items-center justify-start`}
      >
        <Image
          src="/assets/logos/helmet-white.svg"
          alt="casco"
          width={"42"}
          height={"42"}
        />

        <h2
          className={`${staatliches.className}  text-4xl bg-clip-text text-transparent bg-[url('/assets/images/humo.webp')] `}
        >
          Simoworld
        </h2>
      </div>
    </Link>
  );
};

export default Logo;
