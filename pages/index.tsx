import Blogs from "@/components/blogs";
import CountInfos from "@/components/count-infos";
import Features from "@/components/features";
import Faq from "@/components/faq";
import SectionTop from "@/components/section-top";
import Testimonials from "@/components/testimonials";
import TrustedBy from "@/components/trusted-by";
import React from "react";
import dynamic from "next/dynamic";
const Portfolio = dynamic(() => import("@/components/portfolio"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="home-page">
      <SectionTop />
      <TrustedBy />
      <Features />
      <CountInfos />
      <Portfolio />
      <Blogs />
      <Testimonials />
      <Faq />
    </div>
  );
}
