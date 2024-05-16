import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";

const Auth = () => {
  return (
    <div>
      <div className="hidden md:flex">
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </div>
      <div className="flex md:hidden items-center gap-4">
        <div>
          <SignedIn>
            <div className="flex items-center gap-4">
              <UserButton afterSignOutUrl="/" />
            </div>
          </SignedIn>
          <SignedOut>
            <Button asChild className="rounded-full" size="sm">
              <Link href="/sign-in">Iniciar sesión</Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </div>
  );
};

export default Auth;
