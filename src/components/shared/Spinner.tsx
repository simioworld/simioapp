import Image from "next/image";
import React from "react";

const Spinner = () => {
  return (
    <div className="h-1/2 w-full flex flex-col justify-center items-center">
      <Image
        src="/assets/loading.svg"
        alt="spinner"
        width={32}
        height={32}
        className="animate-spin duration-700"
      />
    </div>
  );
};

export default Spinner;
