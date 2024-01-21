import React from "react";
import GradientLinkButton from "../gradient-link-button";
import BlogCard from "./BlogCard";

const blogs = [
  {
    image: "/images/blogs/image 16.png",
    type: "UI Design",
    date: "22 May  2023",
    title: "What is UI Design in Front End Design?",
    description:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system",
    link: "/",
  },
  {
    image: "/images/blogs/image 17.png",
    type: "UI Design",
    date: "22 May  2023",
    title: "What is UI Design in Front End Design?",
    description:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system",
    link: "/",
  },
  {
    image: "/images/blogs/image 16.png",
    type: "UI Design",
    date: "22 May  2023",
    title: "What is UI Design in Front End Design?",
    description:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system",
    link: "/",
  },
  {
    image: "/images/blogs/image 17.png",
    type: "UI Design",
    date: "22 May  2023",
    title: "What is UI Design in Front End Design?",
    description:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system",
    link: "/",
  },
  {
    image: "/images/blogs/image 16.png",
    type: "UI Design",
    date: "22 May  2023",
    title: "What is UI Design in Front End Design?",
    description:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system",
    link: "/",
  },
  {
    image: "/images/blogs/image 17.png",
    type: "UI Design",
    date: "22 May  2023",
    title: "What is UI Design in Front End Design?",
    description:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system",
    link: "/",
  },
];

export default function Blogs() {
  return (
    <div className="blogs">
      <div className="container">
        <h6 className="size-7 gradient-text-bg text-bold mb-1">LATEST BLOG</h6>
        <div className="blogs-header flex-item-center justify-content-between">
          <h4 className="size-3 secondry-3 text-bold title">
            Check Some of Latest
            <br />
            News & Articles
          </h4>
          <GradientLinkButton href="/" className="blogs-load-btn">
            Load More
          </GradientLinkButton>
        </div>
        <div className="row">
          {blogs.map((blog, i) => (
            <div className="col-md-6" key={i}>
              <BlogCard blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
