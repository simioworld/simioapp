import Image from "next/image";
import { Staatliches } from "next/font/google";

const staatliches = Staatliches({ subsets: ["latin"], weight: ["400"] });
const Events = () => {
  return (
    <article className="h-full relative p-4 sm:p-6 flex flex-col text-neutral-200">
      <Image
        src={"/assets/images/fondo.webp"}
        alt="Setup de un simracer"
        fill
        style={{ objectFit: "cover", objectPosition: "top" }}
        className="opacity-10"
      />
      <h4
        className={`${staatliches.className} tracking-wide font-bold uppercase text-2xl text-slate-100`}
      >
        Eventos
      </h4>
      <ul className="mt-2 font-light">
        <li>campeonatos</li>
        <li>carreras</li>
        <li>retos</li>
        <li>resistencias</li>
      </ul>
    </article>
  );
};

export default Events;
