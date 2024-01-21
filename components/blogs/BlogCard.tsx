import React from "react";
import Banner from "../Banner";
import Link from "next/link";
import { BlogType } from "../types";

interface Props {
  blog: BlogType;
}

export default function BlogCard({ blog }: Props) {
  return (
    <div className="blogs-card">
      <div className="blogs-card-header">
        <Banner src={blog.image} alt="blog-banner" />
      </div>
      <div className="blogs-card-body">
        <div className="blogs-card-body-content">
          <h6 className="natural-5 size-8">
            {blog.type} | {blog.date}
          </h6>
          <h4 className="title natural-3 text-bold m-0">{blog.title}</h4>
          <h6 className="size-6 natural-5 description">{blog.description}</h6>
          <Link
            href={blog.link}
            target="_blank"
            className="flex-item-center secondry-3 text-bold"
          >
            READ MORE <img src="/icons/arrow.svg" alt="arrow" />
          </Link>
        </div>
      </div>
    </div>
  );
}
