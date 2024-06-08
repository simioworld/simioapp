import Image from "next/image";

const InstagramIcon = () => {
  return (
    <div className="p-1 rounded-md hover:scale-105 transition-all duration-500">
      <Image
        src="/assets/icons/social/instagram.svg"
        width={28}
        height={28}
        alt="Instagram"
      />
    </div>
  );
};

export default InstagramIcon;
