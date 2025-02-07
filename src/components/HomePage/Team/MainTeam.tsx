import Image from "next/image";
import React from "react";

const team = [
  {
    id: "matt",
    name: "MATT WALLACE",
    imgSrc: "/team/matt.png",
    href: "https://x.com/MattWallace888"
  },
  {
    id: "mario",
    name: "MARIO NAWFAL",
    imgSrc: "/team/mario.png",
    href: "https://x.com/MarioNawfal"
  },
  {
    id: "shiny",
    name: "SHINY",
    imgSrc: "/team/shiny.png",
    href: "https://x.com/ohhshiny"
  },
  {
    id: "gmoney",
    name: "GMONEY",
    imgSrc: "/team/gmoney.png",
    href: "https://x.com/gmoneyNFT"
  },
  {
    id: "meltem",
    name: "MELTEM",
    imgSrc: "/team/meltem.png",
    href: "https://x.com/Melt_Dem"
  },
  {
    id: "fungibles",
    name: "FUNGIBLES",
    imgSrc: "/team/fungibles.png",
    href: "https://x.com/fungibIes"
  },
  {
    id: "drew",
    name: "DREW AUSTIN",
    imgSrc: "/team/drew-austin.png",
    href: "https://x.com/DrewAustin"
  }
];

export const MainTeam = () => {
  return (
    <div className="pt-[48px] md:pt-[69px]">
      <p className="text-[48px] md:text-[100px] font-vallejo uppercase text-red">TEAM</p>
      <p className="font-vallejo text-[32px] md:text-[50px] mt-5 md:mt-[44px] mb-[35px] md:mb-[70px]">
        Akuma Inu boasts one of the most accomplished teams to enter this market.
      </p>
      <div>
        <p className="font-vallejo text-[26px]">They include:</p>
        <ul className="list-disc pl-5 flex flex-col gap-4 mt-5 text-lg font-medium">
          <li>Co-founders of five Coinbase-listed projects</li>
          <li>Tradfi & VC participants at the institutional level both crypto and tech. </li>
          <li>Prominent Industry KOLs that are household names in the crypto space.</li>
          <li>Track record of 9-figure corporate exits outside of crypto. </li>
        </ul>
      </div>
      <div className="mt-[53px] md:mt-[100px] flex items-center justify-center gap-6 md:gap-x-32 md:gap-y-10 flex-wrap">
        {team.map((val) => {
          return (
            <div key={val.id} className="flex flex-col items-center">
              <Image
                className="max-w-[90px] w-full md:max-w-[unset]"
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
  );
};
