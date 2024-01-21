import React from "react";
import Banner from "../Banner";
import { TerterType } from "../types";

interface Props {
  tester: TerterType;
}

export default function TesterCard({ tester }: Props) {
  return (
    <div className="tester-card">
      <Banner src="/icons/quote.svg" alt="quote-up" bannerClass="quote" />
      <h5 className="size-5 comment" color="#090D23">
        {tester.comment}
      </h5>
      <div className="tester-card-bottom flex-item-center justify-content-between">
        <div className="user flex-item-center">
          <Banner src={tester.image ?? "/icons/user.svg"} />
          <h4 className="size-4 text-medium m-0" color="#090D23">
            {tester.fullName}
          </h4>
        </div>
        <h4
          className="size-5 text-medium flex-item-center m-0 rate"
          color="#090D23"
        >
          <Banner src="/icons/star.svg" alt="star" />
          {tester.rate}
        </h4>
      </div>
    </div>
  );
}
