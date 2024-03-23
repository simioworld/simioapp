import Image from "next/image";
import { Staatliches } from "next/font/google";

const staatliches = Staatliches({ subsets: ["latin"], weight: ["400"] });
const Recomendator = () => {
  return (
    <article className="h-full relative p-4 sm:p-6 flex flex-col text-neutral-200">
      <Image
        src={"/assets/images/setup.webp"}
        alt="Setup de un simracer"
        fill
        style={{ objectFit: "cover", objectPosition: "top" }}
        className="opacity-10"
      />
      <h4
        className={`${staatliches.className} tracking-wide font-bold uppercase text-xl text-neutral-300`}
      >
        Recomendador
      </h4>
      <ul className="mt-2 font-light"></ul>
    </article>
  );
};

export default Recomendator;
