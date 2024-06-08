import Image from "next/image";

const FacebookIcon = () => {
  return (
    <div className="p-1 rounded-md hover:scale-105 transition-all duration-500">
      <Image
        src="/assets/icons/social/facebook.svg"
        width={28}
        height={28}
        alt="Facebook"
      />
    </div>
  );
};

export default FacebookIcon;
