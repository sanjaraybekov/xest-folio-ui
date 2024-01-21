import React, { useState } from "react";
import Logo from "../logo";
import Link from "next/link";
import Banner from "../Banner";
import GradientLinkButton from "../gradient-link-button";

export default function Header() {
  const [active, setActive] = useState(false);

  return (
    <div className="header">
      <div className="container">
        <div className="row m-auto justify-content-between flex-item-center">
          <Logo />
          <div className={`navbar ${active ? "active" : ""}`}>
            <Link href="/about-us" className="navbar-item">
              About
            </Link>
            <Link href="/service" className="navbar-item">
              Service
            </Link>
            <Link href="/blogs" className="navbar-item">
              Blogs
            </Link>
            <Link href="/faq" className="navbar-item">
              FAQ
            </Link>
            <GradientLinkButton href="/contacts">Contact Me</GradientLinkButton>
          </div>
          <button
            className="hamburder d-md-none btn"
            onClick={() => setActive(!active)}
          >
            <Banner src="/icons/hamburger.svg" />
          </button>
        </div>
      </div>
    </div>
  );
}
