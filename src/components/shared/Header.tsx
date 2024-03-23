import Link from "next/link";
import { ModeToggle } from "../ModeToggle";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import MobileNav from "./MobileNav";
import NavItems from "./NavItems";
import Image from "next/image";
import { Staatliches } from "next/font/google";

const staatliches = Staatliches({ subsets: ["latin"], weight: ["400"] });

const Header = () => {
  return (
    <header className="w-full h-16  p-8 flex justify-between items-center">
      <div className="flex items-center">
        <Image
          src="/assets/logos/helmet-white.svg"
          alt="casco"
          width={"42"}
          height={"42"}
        />
        <Link
          href="/"
          className={`${staatliches.className} text-4xl text-slate-400/90`}
        >
          Simoworld{" "}
        </Link>
      </div>
      {/*       <div className="flex items-center gap-4">
        <div className="md:flex hidden items-center gap-4">
          <NavItems />
        </div>
      </div> */}
      <div className="hidden md:flex">
        {" "}
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
        {/*           <div>
            <ModeToggle />
          </div> */}
      </div>
      <div className="flex md:hidden items-center gap-4">
        <div>
          <SignedIn>
            <div className="flex items-center gap-4">
              <UserButton afterSignOutUrl="/" />
              <MobileNav />
            </div>
          </SignedIn>
          <SignedOut>
            <Button asChild className="rounded-full" size="sm">
              <Link href="/sign-in">Iniciar sesión</Link>
            </Button>
          </SignedOut>
        </div>
        {/*         <div>
          <ModeToggle />
        </div> */}
      </div>
    </header>
  );
};

export default Header;
