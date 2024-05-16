import Image from "next/image";
import { Staatliches } from "next/font/google";

const staatliches = Staatliches({ subsets: ["latin"], weight: ["400"] });

const Social = () => {
  return (
    <section className="relative min-h-screen p-4 sm:p-6 flex flex-col text-neutral-200 h-full">
      <Image
        src={"/assets/images/social.webp"}
        alt="Pilotos dandose la mano"
        fill
        className="absolute opacity-5  object-cover   "
      />
      <h4
        className={`${staatliches.className} tracking-wide font-bold uppercase text-xl text-neutral-300`}
      >
        Social
      </h4>
      <ul className="mt-2 font-light"></ul>
    </section>
  );
};

export default Social;
