import Image from "next/image";

import React from "react";
import { BuyWithoutFearInternal } from "./Team/BuyWithoutFearInternal";

export const BuyWithoutFear = () => {
  return (
    <div className="relative pt-[73px] pb-[100px]">
      <div className="relative z-10 container">
        <BuyWithoutFearInternal />
      </div>

      {/* bg image */}
      <Image
        src={"/buy-without-fear/bg.png"}
        className="absolute  top-0  left-0 w-full h-full object-cover object-bottom pointer-events-none"
        alt="background facts"
        width={1440}
        height={1440}
      />

      {/* desktop icons */}
      <Image
        src={"/buy-without-fear/icons/left.png"}
        width={637}
        height={667}
        alt="left image"
        className="absolute hidden md:block left-0 top-[30%] scale-75 origin-left -translate-y-1/2 pointer-events-none"
      />
      <Image
        src={"/buy-without-fear/icons/right.png"}
        width={412}
        height={514}
        alt="left image"
        className="absolute hidden md:block top-[30%] right-0 scale-75 origin-right -translate-y-1/2 pointer-events-none"
      />

      {/* mobile icons */}
      <Image
        src={"/buy-without-fear/icons/m-left.png"}
        width={191}
        height={187}
        alt="left image"
        className="absolute  md:hidden left-0 top-[15%] scale-90 origin-left -translate-y-1/2 pointer-events-none"
      />
      <Image
        src={"/buy-without-fear/icons/m-right.png"}
        width={184}
        height={184}
        alt="left image"
        className="absolute  md:hidden -top-[0%] right-0 origin-right -translate-y-1/2 pointer-events-none"
      />
    </div>
  );
};
