import Link from "next/link";
import { ModeToggle } from "../ModeToggle";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import MobileNav from "./MobileNav";

import Image from "next/image";
import { staatliches } from "@/constants";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header className="w-full flex justify-between items-center gap-8">
      <Link href={"/dashboard"}>
        <div className="flex items-center">
          <Image
            src="/assets/logos/helmet-white.svg"
            alt="casco"
            width={"42"}
            height={"42"}
          />
          <Link
            href="/dashboard"
            className={`${staatliches.className} text-4xl text-slate-400/90`}
          >
            Simoworld{" "}
          </Link>
        </div>
      </Link>

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
