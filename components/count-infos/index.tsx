import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { formatNumber } from "../utils";
import { Autoplay } from "swiper/modules";
import { Count } from "../types";

const counts: Count[] = [
  {
    count: 12112,
    title: "Project Complete",
  },
  {
    count: 7500,
    title: "Happy Client",
  },
  {
    count: 16,
    title: "Years Experience",
  },
  {
    count: 270,
    title: "Win Awards",
  },
  {
    count: 9,
    title: "Years Thinking",
  },
];

export default function CountInfos() {
  return (
    <div className="count-infos">
      <div className="container">
        <Swiper
          autoplay
          spaceBetween={10}
          slidesPerView={4}
          loop={true}
          modules={[Autoplay]}
        >
          {counts.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="count-infos-box text-center">
                <h2 className="count-infos-box-count text-bold m-0">
                  {formatNumber(item.count)}
                </h2>
                <h6 className="size-6 primary-1 text-medium m-0">{item.title}</h6>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
