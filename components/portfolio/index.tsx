import React from "react";
import GradientLinkButton from "../gradient-link-button";
import PortfolioCard from "./PortfolioCard";
import { arrayMatrix } from "../utils";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Grid } from "swiper/modules";
import { portfolioBreakpoints } from "../constants";

const projects = [
  {
    image: "/images/portfolio/Rectangle 38.png",
    name: "Greenfy Website",
    type: "UI DESIGN",
  },
  {
    image: "/images/portfolio/Rectangle 39.png",
  },
  {
    image: "/images/portfolio/Rectangle 43.png",
  },
  {
    image: "/images/portfolio/Rectangle 43.png",
  },
  {
    image: "/images/portfolio/Rectangle 39.png",
  },
  {
    image: "/images/portfolio/Rectangle 38.png",
  },
  {
    image: "/images/portfolio/Rectangle 38.png",
  },
  {
    image: "/images/portfolio/Rectangle 39.png",
  },
  {
    image: "/images/portfolio/Rectangle 43.png",
  },
];

export default function Portfolio() {
  const screenWidth = window.innerWidth;

  return (
    <div className="portfolio">
      <div className="container">
        <h6 className="size-7 gradient-text-bg text-bold m-0">PORTFOLIO</h6>
        <div className="portfolio-header flex-item-center justify-content-between">
          <h4 className="size-3 primary-1 text-bold title m-0">
            Some Of Our Best Works
          </h4>
          <GradientLinkButton href="/" className="portfolio-load-btn">
            Load More
          </GradientLinkButton>
        </div>
      </div>
      <div className="container projects">
        {screenWidth > 1023 &&
          arrayMatrix(projects, 3).map((row, i) => (
            <div className={`row ${i % 2 === 1 ? "row-reverce" : ""}`} key={i}>
              <div className="col-md-5 col-sm-6">
                {row[0] && <PortfolioCard project={row[0]} />}
              </div>
              <div className="col-md-4 second-child">
                {row[1] && <PortfolioCard project={row[1]} />}
              </div>
              <div className="col-md-3">
                {row[2] && <PortfolioCard project={row[2]} />}
              </div>
            </div>
          ))}
        {screenWidth < 1024 && (
          <Swiper
            autoplay
            spaceBetween={17}
            slidesPerView={3}
            loop={true}
            modules={[Autoplay, Grid]}
            grid={{
              rows: screenWidth < 768 ? 3 : 1,
              fill: "row",
            }}
            breakpoints={portfolioBreakpoints}
          >
            {projects.map((item, i) => (
              <SwiperSlide key={i}>
                <PortfolioCard project={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
}
