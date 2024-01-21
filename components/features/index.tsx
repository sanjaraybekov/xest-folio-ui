import React from "react";
import GradientLinkButton from "../gradient-link-button";
import FeaturesCard from "./FeaturesCard";

const features = [
  {
    image: "/images/features/image 6.png",
    title: "UX Experience",
    description:
      "I design products that are more than pretty. I make them  usable.",
  },
  {
    image: "/images/features/image 19.png",
    title: "Product Analysis",
    description:
      "I design products that are more than pretty. I make them  usable.",
  },
  {
    image: "/images/features/image 18.png",
    title: "UI Design",
    description:
      "I design products that are more than pretty. I make them  usable.",
  },
  {
    image: "/images/features/image 20.png",
    title: "Product Design",
    description:
      "I design products that are more than pretty. I make them  usable.",
  },
];

export default function Features() {
  return (
    <div className="features">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-12 features-left-side">
            <h6 className="size-7 gradient-text-bg text-bold m-0">FEATURES</h6>
            <h4 className="size-3 primary-1 text-bold title">
              Giving Your Business
              <br />
              Some Great Ideas
            </h4>
            <h6 className="size-6 natural-5 description">
              Every designer needs the right tools to do the perfect job.
              Thankfully, we can do that. I design products that are more than
              pretty. I make them shippable and usable.
            </h6>
            <GradientLinkButton href="/contact">Contact Us</GradientLinkButton>
          </div>
          <div className="col-md-3 features-right-side first">
            {features
              .slice(0, Math.round(features.length / 2))
              .map((feature, i) => (
                <FeaturesCard feature={feature} key={i} />
              ))}
          </div>
          <div className="col-md-3 featured-right-side">
            {features
              .slice(Math.round(features.length / 2))
              .map((feature, i) => (
                <FeaturesCard feature={feature} key={i} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
