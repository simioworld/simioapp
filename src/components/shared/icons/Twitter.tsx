import Image from "next/image";

const TwitterIcon = () => {
  return (
    <div className="rounded-md hover:scale-105 transition-all duration-500 p-1">
      <Image
        src="/assets/icons/social/twitter.svg"
        width={28}
        height={28}
        alt="Twitter"
      />
    </div>
  );
};

export default TwitterIcon;
