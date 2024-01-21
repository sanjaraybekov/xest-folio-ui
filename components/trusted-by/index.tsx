import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Banner from "../Banner";
import Link from "next/link";
import { Autoplay } from "swiper/modules";
import { trustedByBreakpoints } from "../constants";

const trusted = [
  {
    image: "/images/trustedby/Logo 01.png",
    link: "/",
  },
  {
    image: "/images/trustedby/Logo 01.png",
    link: "/",
  },
  {
    image: "/images/trustedby/Logo 02.png",
    link: "/",
  },
  {
    image: "/images/trustedby/Logo 03.png",
    link: "/",
  },
  {
    image: "/images/trustedby/Logo 04.png",
    link: "/",
  },
  {
    image: "/images/trustedby/Logo 05.png",
    link: "/",
  },
  {
    image: "/images/trustedby/Logo 01.png",
    link: "/",
  },
  {
    image: "/images/trustedby/Logo 04.png",
    link: "/",
  },
  {
    image: "/images/trustedby/Logo 02.png",
    link: "/",
  },
];

export default function TrustedBy() {
  return (
    <div className="trusted-by">
      <div className="container">
        <h5 className="title size-5 text-center" color="#12141dcc">
          Trusted By
        </h5>
        <Swiper
          autoplay
          spaceBetween={80}
          slidesPerView={5}
          loop={true}
          modules={[Autoplay]}
          breakpoints={trustedByBreakpoints}
        >
          {trusted.map((item, i) => (
            <SwiperSlide key={i}>
              <Link href={item.link} target="_blank">
                <Banner src={item.image} alt="banner" />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
