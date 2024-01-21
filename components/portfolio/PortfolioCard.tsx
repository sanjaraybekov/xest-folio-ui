import React from "react";
import Banner from "../Banner";
import { ProjectType } from "../types";

interface Props {
  project: ProjectType;
}

export default function PortfolioCard({ project }: Props) {
  return (
    <div className="portfolio-card">
      <Banner
        src={project.image}
        bannerClass="portfolio-card-banner"
        alt="banner"
      />
      <div className="portfolio-card-content">
        <h6 className="size-7 gradient-text-bg text-bold mb-1">
          {project.type}
        </h6>
        <h4 className="size-3 natural-2 text-bold title m-0">{project.name}</h4>
      </div>
    </div>
  );
}
