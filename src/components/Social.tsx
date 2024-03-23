import Image from "next/image";
import { Staatliches } from "next/font/google";

const staatliches = Staatliches({ subsets: ["latin"], weight: ["400"] });

const Social = () => {
  return (
    <article className="relative p-4 sm:p-6 flex flex-col text-neutral-200 h-full">
      <Image
        src={"/assets/images/social.webp"}
        alt="Pilotos dandose la mano"
        fill
        style={{ objectFit: "cover", objectPosition: "center" }}
        className="opacity-10"
      />
      <h4
        className={`${staatliches.className} tracking-wide font-bold uppercase text-xl text-neutral-300`}
      >
        Social
      </h4>
      <ul className="mt-2 font-light"></ul>
    </article>
  );
};

export default Social;
