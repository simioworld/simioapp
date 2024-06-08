import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CommunitySocialStructure } from "@/types";
import WebIcon from "../icons/Web";
import DiscordIcon from "../icons/Discord";
import TwitterIcon from "../icons/Twitter";
import InstagramIcon from "../icons/Instagram";
import TwitchIcon from "../icons/Twitch";
import FacebookIcon from "../icons/Facebook";
import YoutubeIcon from "../icons/Youtube";

interface CommunitySocialProps {
  communitySocial: CommunitySocialStructure;
}
const CommunitySocial = ({ communitySocial }: CommunitySocialProps) => {
  return (
    <ul className=" mx-auto flex items-center justify-between sm:gap-2 bg-slate-600 rounded-md px-4 py-2">
      {communitySocial.discord && (
        <li className="w-10 h-10 flex items-center">
          <Link href={communitySocial.discord} target="_blank">
            <DiscordIcon />
          </Link>
        </li>
      )}
      {communitySocial.instagram && (
        <li className="w-10 h-10 flex items-center">
          <Link href={communitySocial.instagram} target="_blank">
            <InstagramIcon />
          </Link>
        </li>
      )}
      {communitySocial.twitter && (
        <li className="w-10 h-10 flex items-center">
          <Link href={communitySocial.twitter} target="_blank">
            <TwitterIcon />
          </Link>
        </li>
      )}
      {communitySocial.twitch && (
        <li className="w-10 h-10 flex items-center">
          <Link href={communitySocial.twitch} target="_blank">
            <TwitchIcon />
          </Link>
        </li>
      )}{" "}
      {communitySocial.facebook && (
        <li className="w-10 h-10 flex items-center">
          <Link href={communitySocial.facebook} target="_blank">
            <FacebookIcon />
          </Link>
        </li>
      )}{" "}
      {communitySocial.youtube && (
        <li className="w-10 h-10 flex items-center">
          <Link href={communitySocial.youtube} target="_blank">
            <YoutubeIcon />
          </Link>
        </li>
      )}{" "}
      {communitySocial.web && (
        <li className="w-10 h-10 flex items-center">
          <Link href={communitySocial.web} target="_blank">
            <WebIcon />
          </Link>
        </li>
      )}
    </ul>
  );
};

export default CommunitySocial;
