import React from "react";
import Banner from "../Banner";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <Banner src="/images/logo.svg" alt="logo" bannerClass="logo" />
    </Link>
  );
}
