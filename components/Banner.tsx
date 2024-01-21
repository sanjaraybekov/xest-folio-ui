import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  alt?: string;
  imgClass?: string;
  bannerClass?: string;
}

export default function Banner({
  src,
  imgClass = "",
  bannerClass = "",
  alt = "loading-image",
}: Props) {
  return (
    <div className={`banner ${bannerClass}`}>
      <Image
        src={src}
        alt={alt}
        width={0}
        height={0}
        priority
        sizes={"100vw"}
        style={{ width: "100%", height: "auto" }}
        className={`banner-image ${imgClass}`}
      />
    </div>
  );
}
