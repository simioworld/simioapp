import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CommunitySocialStructure } from "@/types";

interface CommunitySocialProps {
  communitySocial: CommunitySocialStructure;
}
const CommunitySocial = ({ communitySocial }: CommunitySocialProps) => {
  return (
    <ul className=" mx-auto flex items-center justify-between gap-2 bg-slate-800 rounded-md px-4 w-fit">
      <li>
        <Link
          href={communitySocial.web ? communitySocial.web : "#"}
          target="_blank"
        >
          Web
        </Link>
      </li>
      <li>
        <Link
          href={
            communitySocial.discordCommunity
              ? communitySocial.discordCommunity
              : "#"
          }
          target="_blank"
        >
          <div className="flex justify-center items-center bg-[#5865F2] rounded-full w-full p-2 hover:scale-105 transition-all duration-500">
            <Image
              src="/assets/icons/discord.svg"
              width={20}
              height={20}
              alt="Discord"
            />
          </div>
        </Link>
      </li>
      <li>
        {communitySocial.instagram && (
          <Link href={communitySocial.instagram} target="_blank">
            <div className="flex justify-center items-center rounded-full w-full p-2 hover:scale-105 transition-all duration-500">
              <Image
                src="/assets/icons/instagram.svg"
                width={36}
                height={36}
                alt="Instagram"
              />
            </div>
          </Link>
        )}
      </li>
      <li>
        {communitySocial.twitter && (
          <Link href={communitySocial.twitter} target="_blank">
            <div className="flex justify-center items-center rounded-full w-full p-2 hover:scale-105 transition-all duration-500 bg-black">
              <Image
                src="/assets/icons/twitter.svg"
                width={20}
                height={20}
                alt="twitter"
                className="invert"
              />
            </div>
          </Link>
        )}
      </li>
      <li>
        {communitySocial.twitch && (
          <Link href={communitySocial.twitch} target="_blank">
            <div className="flex justify-center items-center rounded-full w-full p-2 hover:scale-105 transition-all duration-500  ">
              <Image
                src="/assets/icons/twitch.svg"
                width={36}
                height={36}
                alt="twitch"
                className="rounded-full"
              />
            </div>
          </Link>
        )}
      </li>
      <li>
        {communitySocial.facebook && (
          <Link href={communitySocial.facebook} target="_blank">
            <div className="flex justify-center items-center rounded-full w-full p-2 hover:scale-105 transition-all duration-500">
              <Image
                src="/assets/icons/facebook.svg"
                width={36}
                height={36}
                alt="facebook"
                className="bg-white rounded-full"
              />
            </div>
          </Link>
        )}
      </li>
      <li>
        {communitySocial.youtube && (
          <Link href={communitySocial.youtube} target="_blank">
            <div className="flex justify-center items-center rounded-full w-full p-2 hover:scale-105 transition-all duration-500">
              <Image
                src="/assets/icons/youtube.svg"
                width={36}
                height={36}
                alt="youtube"
                className=" rounded-full"
              />
            </div>
          </Link>
        )}
      </li>
    </ul>
  );
};

export default CommunitySocial;
