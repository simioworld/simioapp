import { imageBackgroundSize, imageBackgroundStyle } from "@/constants";
import Image from "next/image";
import React from "react";

interface ImageBackgroundProps {
  route: string;
}

const ImageBackground = ({ route }: ImageBackgroundProps) => {
  return (
    <Image
      src={`/assets/images/${route}.webp`}
      alt={route}
      fill
      sizes={imageBackgroundSize}
      style={imageBackgroundStyle}
      className="opacity-5  "
    />
  );
};

export default ImageBackground;
