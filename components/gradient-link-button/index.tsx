import Link from "next/link";
import React from "react";

interface Props {
  href: string;
  children: any;
  className?: string;
}

export default function GradientLinkButton({
  href,
  children,
  className = "",
}: Props) {
  return (
    <div className="aa">
    <Link href={href} className={`grdient-link-btn ${className}`}>
      {children}
    </Link>
    <div className="bb"></div>
    </div>
  );
}
