"use client";

import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Heart } from "lucide-react";
import { useSearchParams } from "next/navigation";

const Favorites = () => {
  const searchParams = useSearchParams();
  const favorites = searchParams.get("favorites");

  return (
    <Button
      variant={favorites ? "outline" : "ghost"}
      asChild
      size={"sm"}
      className="bg-slate-700 px-2  justify-start"
    >
      <Link
        className=""
        href={{
          pathname: "/dashboard/events ",
          query: { favorites: true },
        }}
      >
        <Heart className="w-8 h-8 bg-slate-800 rounded-md p-1 text-[#aaa] " />
      </Link>
    </Button>
  );
};

export default Favorites;
