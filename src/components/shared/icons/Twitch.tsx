import Image from "next/image";

const TwitchIcon = () => {
  return (
    <div className="p-1 rounded-md hover:scale-105 transition-all duration-500">
      <Image
        src="/assets/icons/social/twitch.svg"
        width={28}
        height={28}
        alt="Twitch"
      />
    </div>
  );
};

export default TwitchIcon;
