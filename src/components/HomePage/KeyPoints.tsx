import Image from "next/image";
import React from "react";
import { BuyWithoutFearInternal } from "./Team/BuyWithoutFearInternal";

export const KeyPoints = () => {
  return (
    <div className="relative px-4 md:px-0 py-8 md:py-40">
      <div className="container z-10 relative">
        <div className=" ">
          <div className="relative flex items-center justify-center"></div>
          <div className="relative z-20  mt-4 md:mt-0">
            <p className="text-[60px] text-center md:text-left sm:text-[120px] md:text-[150px] font-vallejo text-red  leading-[1] font-black">
              key points
            </p>
            <ul className="text-[18px] md:text-[24px] leading-[1.4] max-w-[496px] mx-auto md:mx-[unset] text-left -tracking-[.05em] list-inside md:list-outside  flex flex-col gap-5 font-medium pl-2 sm:pl-8 pt-7 md:pt-9 list-disc">
              {/* <li>Wintermute is our lead market maker, DV is supporting</li> */}
              <li>
                Vaults begin unlocking after qualifying CEX listing (facilitated by Wintermute and
                with previous listing relationships) as a % of volume per day
              </li>
              <li>DEX liquidity carefully managed for highest capital efficiency</li>
              <li>Internal wallet visibility amongst 150+ core holders and communities at large</li>
              <li>Over 50 KOLs, with 22M+ reach including:</li>
            </ul>
          </div>
        </div>
        <div className="hidden md:flex relative z-10 items-center justify-end">
          <BuyWithoutFearInternal />
        </div>
        <Image
          alt="cat"
          className="hidden md:block absolute top-[30%] scale-[.9] -translate-y-1/2 right-[-25%] "
          src={"/key-points/keypoints.png"}
          width={798}
          height={18}
        />
      </div>
    </div>
  );
};
