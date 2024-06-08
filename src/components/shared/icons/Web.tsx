import Image from "next/image";
import React from "react";

const WebIcon = () => {
  return (
    <div className="p-1 rounded-md hover:scale-105 transition-all duration-500">
      <Image
        src="/assets/icons/social/web.svg"
        alt="web"
        width={28}
        height={28}
      />
    </div>
  );
};

export default WebIcon;
