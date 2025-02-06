import Image from "next/image";
import React from "react";

export const KeyPoints = () => {
  return (
    <div className="relative px-4 md:px-0">
      <div className="container z-10 relative">
        <div className="max-w-[1024px] mx-auto  grid grid-cols-1 md:grid-cols-2 py-12 gap-0 md:gap-20 md:place-items-center">
          <div className="relative flex items-center justify-center">
            <Image
              className="max-w-[261px] relative z-10 md:max-w-[unset]"
              src={"/key-points/key-points.png"}
              width={475}
              height={720}
              alt="key points"
            />
            <Image
              src={"/key-points/left.png"}
              width={345}
              height={244}
              alt="key points"
              className="absolute  md:hidden scale-y-[.9] scale-x-[.8] object-left left-[-20%] top-[68%] w-[100%] h-auto -translate-y-1/2"
            />
          </div>
          <div className="relative z-20 mt-4 md:mt-0">
            <p className="text-[48px] md:text-[100px] uppercase font-vallejo">
              KEY <span className="text-red">POINTS</span>
            </p>
            <ul className="text-[18px] flex flex-col gap-5 font-medium pl-8 pt-7 md:pt-9 list-disc">
              <li>Wintermute is lead market maker, DV is supporting</li>
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
      </div>

      {/* left image for desktop */}
      <Image
        src={"/key-points/left.png"}
        width={628}
        height={445}
        alt="key points"
        className="absolute hidden md:block left-[-1%] top-[68%] w-[45%] h-auto -translate-y-1/2"
      />
    </div>
  );
};
