import { cn } from "@/lib/utils";
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
    { id: 10, text: "Referrals", isEmpty: false }
  ];

  return (
    <div className="py-12">
      <div className="container">
        <p className="text-center mx-auto text-[48px] md:text-[64px] uppercase font-vallejo max-w-[325px] md:max-w-[604px]">
          WE ARE BUILDING BOUNTIES FOR
        </p>
        <div className="max-w-[941px] mt-[30px] md:mt-[58px] mx-auto flex items-center justify-center flex-wrap gap-4">
          {data.map((val) => (
            <div
              key={val.id}
              className={cn(
                "bg-[#151515] p-4 flex items-center justify-center rounded-lg font-vallejo text-[12px] md:text-[28px]",

                "lg:w-[218px] w-[160px] md:w-[180px] px-4  h-[45px] md:h-[98px]",
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
