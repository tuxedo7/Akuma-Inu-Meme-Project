import Image from "next/image";
import Link from "next/link";
import React from "react";

const team1 = [
  {
    id: "bored",
    name: "BORED",
    imgSrc: "/team/royalties/1.jpeg",
    href: "https://x.com/boredelonmusk?s=21"
  },
  {
    id: "hunter orrell🔥",
    name: "hunter orrell🔥",
    imgSrc: "/team/royalties/2.jpeg",
    href: "https://x.com/hunterorrell?s=21"
  },
  {
    id: "mattwright.eth | d/acc",
    name: "mattwright.eth | d/acc",
    imgSrc: "/team/royalties/3.jpeg",
    href: "https://x.com/mateo_ventures?s=21"
  },
  {
    id: "Quigs.base.eth",
    name: "Quigs.base.eth",
    imgSrc: "/team/royalties/4.jpeg",
    href: "https://x.com/quigleynft?s=21"
  },
  {
    id: "RENDR | rendə(r)",
    name: "RENDR | rendə(r)",
    imgSrc: "/team/royalties/5.jpeg",
    href: "https://x.com/realrendr?s=21"
  },
  {
    id: "Vitalis (cute/acc)",
    name: "Vitalis (cute/acc)",
    imgSrc: "/team/royalties/6.jpeg",
    href: "https://x.com/vitaliselkins?s=21"
  },
  {
    id: "Christopher Kocurek",
    name: "Christopher Kocurek",
    imgSrc: "/team/royalties/7.jpeg",
    href: "https://x.com/bigironchris?s=21"
  },
  {
    id: "fity.eth",
    name: "fity.eth",
    imgSrc: "/team/royalties/8.jpeg",
    href: "https://x.com/fityeth?s=21"
  }
];

const team2 = [
  {
    id: "RENDR | rendə(r)",
    name: "RENDR | rendə(r)",
    imgSrc: "/team/royalties/5.jpeg",
    href: "https://x.com/realrendr?s=21"
  },
  {
    id: "Vitalis (cute/acc)",
    name: "Vitalis (cute/acc)",
    imgSrc: "/team/royalties/6.jpeg",
    href: "https://x.com/vitaliselkins?s=21"
  },
  {
    id: "Christopher Kocurek",
    name: "Christopher Kocurek",
    imgSrc: "/team/royalties/7.jpeg",
    href: "https://x.com/bigironchris?s=21"
  },
  {
    id: "fity.eth",
    name: "fity.eth",
    imgSrc: "/team/royalties/8.jpeg",
    href: "https://x.com/fityeth?s=21"
  }
];

export const Royalty = () => {
  return (
    <div id="team">
      <div className="text-center pt-[50px] md:pt-[100px] pb-[50px] md:pb-[100px]">
        <p className="max-w-[641px] mx-auto text-[48px] md:text-[100px] font-vallejo uppercase ">
          AKUMANATI <span className="text-red">ROYALTY</span>
        </p>
        <div className="mt-[97px] hidden md:block">
          <div className="max-w-[845px] grid grid-cols-4 gap-6 md:gap-x-28 md:gap-y-10 flex-wrap">
            {team1.map((val, index) => {
              return (
                <Link
                  href={val.href}
                  target="_blank"
                  key={index}
                  className="flex flex-col items-center"
                >
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
                </Link>
              );
            })}
          </div>
          <div className="mt-12  grid grid-cols-4 max-w-[845px] ml-auto gap-6 md:gap-x-28 md:gap-y-10 flex-wrap">
            {team2.map((val, index) => {
              return (
                <Link
                  href={val.href}
                  target="_blank"
                  key={index}
                  className="flex flex-col items-center"
                >
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
                </Link>
              );
            })}
          </div>
        </div>
        <div className="mt-[28px] md:hidden">
          <div className="mt-12  grid grid-cols-3 max-w-[845px] ml-auto gap-6 md:gap-x-28 md:gap-y-10 flex-wrap">
            {[...team1, ...team2].map((val, index) => {
              return (
                <Link
                  target="_blank"
                  href={val.href}
                  key={index}
                  className="flex flex-col items-center"
                >
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
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
