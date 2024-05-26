import { imageBackgroundSize, imageBackgroundStyle } from "@/constants";
import Image from "next/image";
import React from "react";

interface ImageBackgroundProps {
  route: string;
}

const ImageBackground = ({ route }: ImageBackgroundProps) => {
  const path = route.split("/").at(-1);
  console.log(path);
  return (
    <Image
      src={`/assets/images/${path}.webp`}
      alt={route}
      fill
      sizes={imageBackgroundSize}
      style={imageBackgroundStyle}
      className="opacity-5  "
    />
  );
};

export default ImageBackground;
