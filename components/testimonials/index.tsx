import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import TesterCard from "./TesterCard";
import { testemonialBreakpoints } from "../constants";
import { getWindow } from "../next-utils";

const testimonials = [
  {
    image: "/images/testimonials/Ellipse 1.png",
    comment:
      "“Now, i can track my business activity with easier and have a great understandable to operate the products",
    fullName: "Berry Gunawan",
    rate: 3.5,
  },
  {
    image: "/images/testimonials/Ellipse 1-1.png",
    comment:
      "“Now, i can track my business activity with easier and have a great understandable to operate the products",
    fullName: "Janne Cooper",
    rate: 4.3,
  },
  {
    image: "/images/testimonials/Ellipse 1.png",
    comment:
      "“Now, i can track my business activity with easier and have a great understandable to operate the products",
    fullName: "Cobocannaeru",
    rate: 4.7,
  },
  {
    image: "/images/testimonials/Ellipse 1-1.png",
    comment:
      "“Now, i can track my business activity with easier and have a great understandable to operate the products",
    fullName: "Janne Cooper",
    rate: 4.2,
  },
  {
    image: "/images/testimonials/Ellipse 1.png",
    comment:
      "“Now, i can track my business activity with easier and have a great understandable to operate the products",
    fullName: "Cobocannaeru",
    rate: 4.2,
  },
];

export default function Testimonials() {
  return (
    <div className="testimonials">
      <div className="container-fluid">
        <h6 className="size-7 gradient-text-bg text-bold m-auto">
          TESTIMONIALS
        </h6>
        <h4 className="size-3 primary-1 text-bold title">
          What our customer say
        </h4>

        <Swiper
          autoplay
          spaceBetween={0}
          initialSlide={1}
          slidesPerView={2}
          centeredSlides={true}
          autoHeight={true}
          loop={true}
          direction={getWindow().innerWidth < 768 ? "vertical" : "horizontal"}
          breakpoints={testemonialBreakpoints}
          // modules={[Autoplay]}
        >
          {testimonials.map((item, i) => (
            <SwiperSlide key={i}>
              <TesterCard tester={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
