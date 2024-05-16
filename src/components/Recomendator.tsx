import Image from "next/image";
import { Staatliches } from "next/font/google";

const staatliches = Staatliches({ subsets: ["latin"], weight: ["400"] });
const Recomendator = () => {
  return (
    <section className="min-h-screen relative p-4 sm:p-6 flex flex-col text-neutral-200">
      <Image
        src={"/assets/images/setup.webp"}
        alt="Setup de un simracer"
        fill
        className="absolute opacity-5  object-cover   "
      />
      <h4
        className={`${staatliches.className} tracking-wide font-bold uppercase text-xl text-neutral-300`}
      >
        Recomendador
      </h4>
      <ul className="mt-2 font-light"></ul>
    </section>
  );
};

export default Recomendator;
