import { cn } from "@/lib/utils";
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
    {
      id: 11,
      text: (
        <div className="flex flex-col gap-5 text-[18px] font-medium text-left">
          <p>Whatever needs to be dreamt up, can be in the Akumanati.</p>
          <p>Buy 1M $AKUMA: link to uniswap</p>
          <p>Or Hold an Akumanati NFT</p>
          <p>Join the most powerful cabal in crypto and come build at light speed with us.</p>
        </div>
      ),
      isEmpty: false,
      isWide: true // Custom flag for special styling
    }
  ];

  return (
    <div className="py-12">
      <div className="container">
        <p className="text-center mx-auto text-[48px] md:text-[64px] uppercase font-vallejo max-w-[325px] md:max-w-[604px]">
          WE ARE BUILDING BOUNTIES FOR
        </p>
        <div className="max-w-[941px] mt-[30px] md:mt-[58px] mx-auto grid grid-cols-3 md:grid-cols-4 gap-4">
          {data.map((val, index) => (
            <div
              key={val.id}
              className={cn(
                "bg-[#151515] p-4 flex items-center justify-center rounded-lg font-vallejo text-[12px] md:text-[28px]",
                data.length - 2 === index &&
                  "col-span-3 md:col-span-1 w-[calc(30%)] md:w-[100%] mx-auto",
                val.isWide
                  ? "col-span-3 mx-auto  md:col-span-2 md:row-span-2 text-[18px] font-raleway text-left bg-transparent md:p-10 leading-[1.3] "
                  : "lg:w-[218px] h-[45px] md:h-[98px]",
                val.isEmpty && "bg-transparent"
              )}
            >
              {val.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
