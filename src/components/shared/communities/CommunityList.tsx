"use client";

import { useQuery } from "convex/react";
import React from "react";
import { api } from "../../../../convex/_generated/api";
import { Loading } from "../Loading";
import Image from "next/image";
import Link from "next/link";
import Hint from "../Hint";

const CommunityList = ({ query }: { query: string }) => {
  const communities = useQuery(api.communities.getCommunities, {
    query: query,
  });

  if (communities === undefined) return <Loading />;

  return (
    <div className="w-full">
      <ul className="flex flex-row flex-wrap w-full gap-2 relative">
        {communities.map((community) => {
          return (
            <li key={community.name} className="  h-full">
              <Hint
                label={community.name}
                align={"center"}
                side={"bottom"}
                sideOffset={16}
                alignOffset={0}
                simulators={community.simulators}
              >
                <Link
                  href={`/dashboard/communities/${community._id}`}
                  className="w-full"
                >
                  <div className="hover:scale-105 bg-slate-950/50 w-full aspect-square rounded-full flex place-content-center border-4 overflow-hidden border-white transition-all duration-500">
                    <Image
                      src={`/assets/images/communities/${community.name
                        .toLowerCase()
                        .replaceAll(" ", "")}.webp`}
                      alt={community.name}
                      width={48}
                      height={48}
                      className="object-contain "
                    />
                  </div>
                </Link>
              </Hint>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CommunityList;
