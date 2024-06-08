import Image from "next/image";
import React from "react";

const DiscordIcon = () => {
  return (
    <div className=" rounded-md hover:scale-105 transition-all duration-500">
      <Image
        src="/assets/icons/social/discord.svg"
        width={32}
        height={32}
        alt="Discord"
      />
    </div>
  );
};

export default DiscordIcon;
