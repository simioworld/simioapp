import Image from "next/image";
import { Staatliches } from "next/font/google";

const staatliches = Staatliches({ subsets: ["latin"], weight: ["400"] });
const About = () => {
  return (
    <article className="h-full relative p-4 sm:p-6 flex flex-col text-neutral-200">
      <h4
        className={`${staatliches.className} tracking-wide font-bold uppercase text-2xl text-slate-100`}
      >
        A cerca de
      </h4>
      <ul className="mt-2 font-light">
        <li>contacto</li>
        <li>sugerencias</li>
        <li>hoja de ruta</li>
      </ul>
    </article>
  );
};

export default About;
