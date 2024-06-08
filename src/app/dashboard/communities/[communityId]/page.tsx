"use client";

import { useParams } from "next/navigation";
import { Id } from "../../../../../convex/_generated/dataModel";
import { useQuery } from "convex/react";
import { api } from "../../../../../convex/_generated/api";
import { Loading } from "@/components/shared/Loading";
import { staatliches } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import CommunityEvents from "@/components/shared/communities/CommunityEvents";
import CommunitySocial from "@/components/shared/communities/CommunitySocial";

const CommunityPage = () => {
  const { communityId } = useParams<{ communityId: Id<"communities"> }>();

  const community = useQuery(api.community.getCommunity, { communityId });
  if (community === undefined) return <Loading />;

  return (
    <section className="relative p-4 sm:p-6 flex flex-col h-full text-slate-200 gap-4">
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <Image
          src={`${community.logo}`}
          alt={community.name}
          width={250}
          height={100}
        />

        <CommunitySocial communitySocial={community.social} />
      </div>
      <p className="mt-2 font-light">{community.description}</p>

      <ul className=" mt-2 flex justify-center gap-3 font-bold text-orange-500">
        Simuladores:
        {community.simulators?.map((simulator) => (
          <li key={simulator} className="text-slate-200 font-light">
            {simulator}
          </li>
        ))}
      </ul>

      <CommunityEvents communityId={communityId} />

      <div className="relative mt-2 flex w-full">
        <div className="absolute text-slate-300 top-1/2 left-1/2 -translate-x-16 -translate-y-1/2">
          <ArrowLeft className="rounded-full bg-transparent/30 p-1" />
        </div>
        <Link
          className="text-center w-full text-slate-300 z-20"
          href={`/dashboard/communities`}
        >
          Volver
        </Link>
      </div>
    </section>
  );
};

export default CommunityPage;
