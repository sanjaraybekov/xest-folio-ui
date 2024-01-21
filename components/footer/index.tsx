import Link from "next/link";
import React from "react";
import Logo from "../logo";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-body text-center">
          <div className="gradient-text-bg size-6 text-semi-bold text-uppercase">
            Have you project in mind?
          </div>
          <h2 className="primary-1 size-2 text-bold">
            Let’s Make Something
            <br />
            Great Together!
          </h2>
          <Link
            href="/contact-us"
            className="gradient-circle flex-item-center justify-content-center flex-column"
          >
            <h6 className="mb-3 secondry-3 mt-5">CONTACT WITH US</h6>
            <img src="/icons/arrow.svg" alt="arrow" />
          </Link>
          <Logo />
          <div className="row">
            <div className="col-lg-8 col-md-10 col-12 m-auto  ">
              <div className="footer-body-socials flex-item-center justify-content-between">
                <a href="#" target="_blank">
                  <img src="/icons/facebook.svg" alt="facebook" />
                </a>
                <a href="#" target="_blank">
                  <img src="/icons/linkedin.svg" alt="linkedin" />
                </a>
                <a href="#" target="_blank">
                  <img src="/icons/instagram.svg" alt="instagram" />
                </a>
                <a href="#" target="_blank">
                  <img src="/icons/be.svg" alt="be" />
                </a>
                <a href="#" target="_blank">
                  <img src="/icons/ball.svg" alt="ball" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="absolute-border" />
        <div className="container">
          <div className="flex-item-center justify-content-between">
            <h5 className="corp size-5 natural-4 text-medium m-0">
              © 2023 Ideapeel Inc. All Rights Reserved
            </h5>
            <Link href="/policy" className="corp size-5 natural-4 text-medium">
              Privacy Policy | Terms and Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
