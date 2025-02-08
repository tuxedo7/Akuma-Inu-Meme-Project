import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
// import Link from "next/link";
import React from "react";

export const BuildingBounties = () => {
  const data = [
    { id: 1, text: "Memes", isEmpty: false },
    { id: 2, text: "Art", isEmpty: false },
    { id: 3, text: "Integrations", isEmpty: false },
    { id: 4, text: "Apps", isEmpty: false },
    { id: 5, text: "Engagement", isEmpty: false },
    { id: 6, text: "Relationships", isEmpty: false },
    { id: 7, text: "Prediction", isEmpty: false },
    { id: 8, text: "Code", isEmpty: false },
    { id: 9, text: "Deals", isEmpty: false },
    { id: 10, text: "Referrals", isEmpty: false },
  ];

  return (
    <div className="py-12">
      <div className="container">
        <p className="text-[60px] uppercase sm:text-[120px] md:text-[150px]   mx-auto font-vallejo text-center  text-red  leading-[1] font-black">
          WE BUILDING BOUNTIES FOR
        </p>
        <div className="max-w-[941px] mt-[30px] md:mt-[58px] mx-auto flex items-center justify-center flex-wrap gap-4">
          {data.map((val) => (
            <div
              key={val.id}
              className={cn(
                "bg-white/20 flex items-center justify-center rounded-2xl font-medium text-[24px] md:text-[32px] font-raleway",
                "lg:w-[218px] w-[160px] md:w-[180px]   h-[64px] md:h-[74px]"
              )}
            >
              {val.text}
            </div>
          ))}
        </div>
        <div className="text-[24px] md:text-[32px] text-center font-bold my-8 md:my-16 flex flex-col leading-[1.2] gap-8 items-center justify-center">
          <p>Whatever needs to be dreamt up, can be in the Akumanati.</p>
          <p className="flex items-center justify-center gap-2">
            Buy{" "}
            <Link
              href={
                "https://app.uniswap.org/explore/tokens/base/0x2f20cf3466f80a5f7f532fca553c8cbc9727fef6"
              }
              target="_blank"
              className="flex items-center gap-2"
            >
              <span className="underline">1,000,000 AKUMA</span>
            </Link>{" "}
            <span>
              <Image
                style={{ filter: "brightness(1)" }}
                src="/logos/1.png"
                width={20}
                height={20}
                alt="logo"
              />
            </span>
          </p>
          <p className="flex items-center justify-center gap-2">
            Or Hold a{" "}
            <Link
              href={
                "https://opensea.io/collection/probably-nothing-genesis-nft"
              }
              target="_blank"
              className="flex items-center gap-2"
            >
              <span className="underline">Probably Nothing Genesis NFT</span>
            </Link>{" "}
            <span>
              <Image
                src="/logos/2.png"
                width={20}
                height={20}
                alt="logo"
                style={{ filter: "brightness(1)" }}
              />
            </span>
          </p>
          <p className="max-w-[650px] mx-auto">
            Join the most powerful cabal in crypto and come build at light speed
            with us.
          </p>
        </div>
      </div>
    </div>
  );
};
