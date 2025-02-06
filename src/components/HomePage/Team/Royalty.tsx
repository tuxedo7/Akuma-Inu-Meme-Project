import Image from "next/image";
import React from "react";

const team1 = [
  {
    id: "matt",
    name: "MATT WALLACE",
    imgSrc: "/team/matt.png"
  },
  {
    id: "mario",
    name: "MARIO NAWFAL",
    imgSrc: "/team/mario.png"
  },
  {
    id: "shiny",
    name: "SHINY",
    imgSrc: "/team/shiny.png"
  },
  {
    id: "gmoney",
    name: "GMONEY",
    imgSrc: "/team/gmoney.png"
  }
];

const team2 = [
  {
    id: "gmoney",
    name: "GMONEY",
    imgSrc: "/team/gmoney.png"
  },
  {
    id: "meltem",
    name: "MELTEM",
    imgSrc: "/team/meltem.png"
  },
  {
    id: "fungibles",
    name: "FUNGIBLES",
    imgSrc: "/team/fungibles.png"
  },
  {
    id: "drew",
    name: "DREW AUSTIN",
    imgSrc: "/team/drew-austin.png"
  }
];

export const Royalty = () => {
  return (
    <div>
      <div className="text-center pt-[100px] md:pt-[178px] pb-[130px] md:pb-[219px]">
        <p className="max-w-[641px] mx-auto text-[48px] md:text-[100px] font-vallejo uppercase ">
          AKUMANATI <span className="text-red">ROYALTY</span>
        </p>
        <div className="mt-[97px] hidden md:block">
          <div className="max-w-[845px] grid grid-cols-4 gap-6 md:gap-x-28 md:gap-y-10 flex-wrap">
            {team1.map((val, index) => {
              return (
                <div key={index} className="flex flex-col items-center">
                  <Image
                    className="max-w-[90px] w-full md:max-w-[131px]"
                    src={val.imgSrc}
                    width={131}
                    height={131}
                    alt={val.id}
                  />
                  <p className="mt-[18px] text-center font-vallejo text-sm md:text-[21px]">
                    {val.name}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="mt-12  grid grid-cols-4 max-w-[845px] ml-auto gap-6 md:gap-x-28 md:gap-y-10 flex-wrap">
            {team2.map((val, index) => {
              return (
                <div key={index} className="flex flex-col items-center">
                  <Image
                    className="max-w-[90px] w-full md:max-w-[131px]"
                    src={val.imgSrc}
                    width={131}
                    height={131}
                    alt={val.id}
                  />
                  <p className="mt-[18px] text-center font-vallejo text-sm md:text-[21px]">
                    {val.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-[28px] md:hidden">
          <div className="mt-12  grid grid-cols-3 max-w-[845px] ml-auto gap-6 md:gap-x-28 md:gap-y-10 flex-wrap">
            {[...team1, ...team2].map((val, index) => {
              return (
                <div key={index} className="flex flex-col items-center">
                  <Image
                    className="max-w-[90px] w-full md:max-w-[131px]"
                    src={val.imgSrc}
                    width={131}
                    height={131}
                    alt={val.id}
                  />
                  <p className="mt-[18px] text-center font-vallejo text-sm md:text-[21px]">
                    {val.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
