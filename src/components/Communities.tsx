import Image from "next/image";
import { Staatliches } from "next/font/google";

const staatliches = Staatliches({ subsets: ["latin"], weight: ["400"] });
const Communities = () => {
  return (
    <section className="relative p-4 sm:p-6 flex flex-col min-h-screen text-neutral-200">
      <Image
        src={"/assets/images/community.webp"}
        alt="Abrazo de piloto a su equipo"
        fill
        className="absolute opacity-5 object-cover"
      />
      <h4
        className={`${staatliches.className} tracking-wide font-bold uppercase text-xl text-neutral-300`}
      >
        Comunidades
      </h4>
      <ul className="mt-2 font-light"></ul>
    </section>
  );
};

export default Communities;
