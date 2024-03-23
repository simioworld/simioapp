import Image from "next/image";
import { Staatliches } from "next/font/google";

const staatliches = Staatliches({ subsets: ["latin"], weight: ["400"] });

const Box = () => {
  return (
    <article className="relative p-4 sm:p-6 flex flex-col text-neutral-200 h-full">
      <Image
        src={"/assets/images/box.webp"}
        alt="Coches parados en el box"
        fill
        style={{ objectFit: "cover", objectPosition: "center" }}
        className="opacity-10 h-full"
      />
      <h4
        className={`${staatliches.className} tracking-wide font-bold uppercase text-xl text-neutral-300`}
      >
        Box
      </h4>
      <ul className="mt-2 font-light"></ul>
    </article>
  );
};

export default Box;
