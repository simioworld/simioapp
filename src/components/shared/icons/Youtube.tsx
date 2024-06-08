import Image from "next/image";

const YoutubeIcon = () => {
  return (
    <div className="p-1 rounded-md hover:scale-105 transition-all duration-500">
      <Image
        src="/assets/icons/social/youtube.svg"
        width={32}
        height={32}
        alt="Youtube"
      />
    </div>
  );
};

export default YoutubeIcon;
