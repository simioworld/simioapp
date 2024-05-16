import Image from "next/image";
import { Staatliches } from "next/font/google";
import { Button } from "./ui/button";
import Link from "next/link";
import { Heart } from "lucide-react";

const staatliches = Staatliches({ subsets: ["latin"], weight: ["400"] });

const Box = () => {
  return (
    <section className="relative p-4 sm:p-6 flex flex-col text-neutral-200 min-h-screen">
      <Image
        src={"/assets/images/box.webp"}
        alt="Coches parados en el box"
        fill
        className="absolute opacity-5  object-cover   "
      />
      <h4
        className={`${staatliches.className} tracking-wide font-bold uppercase text-xl text-neutral-300`}
      >
        Box
      </h4>

      <Button
        variant={"outline"}
        asChild
        size={"lg"}
        className="bg-slate-700 px-2 w-full justify-start"
      >
        <Link
          className="text-white"
          href={{ pathname: "/", query: { favorites: true } }}
        >
          <Heart className="h-4 w-4 mr-2" /> Favoritos
        </Link>
      </Button>
    </section>
  );
};

export default Box;
