import React from "react";
import Banner from "../Banner";
import { FeatureType } from "../types";

interface Props {
  feature: FeatureType;
}

export default function FeaturesCard({ feature }: Props) {
  return (
    <div className="features-card">
      <Banner
        src={feature.image}
        alt="feature-banner"
        bannerClass="features-card-banner"
      />
      <div className="features-card-body">
        <h4 className="title primary-1 text-bold features-card-body-title">{feature.title}</h4>
        <h6 className="size-6 natural-5 m-0">{feature.description}</h6>
      </div>
    </div>
  );
}
