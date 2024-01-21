import React from "react";
import Banner from "../Banner";
import GradientLinkButton from "../gradient-link-button";

export default function SectionBigBanner() {
  return (
    <div className="section-top">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 p-md-0">
            <div className="section-top-left-side">
              <h1 className="size-1 gradient-text-bg text-ebold m-0">MIAMI</h1>
              <h1 className="size-1 secondry-3 text-ebold m-0">WALKER</h1>
              <h4 className="size-6 natural-5">
                Award Wining product designer based in Georgia. We create
                user-friendly interfaces for fast-growing startups.
              </h4>
              <GradientLinkButton href="/" className="book-call">
                Book A Call
              </GradientLinkButton>
            </div>
          </div>
          <div className="col-md-6 pl-md-0">
            <div className="section-top-right-side">
              <Banner
                src="/images/banner.png"
                alt="banner"
                bannerClass="section-top-banner"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
