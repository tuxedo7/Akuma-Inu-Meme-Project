import Image from "next/image";
import Link from "next/link";
import React from "react";

const royalty2 = [
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
  // {
  //   id: "Quigs.base.eth",
  //   name: "Quigs.base.eth",
  //   imgSrc: "/team/royalties/4.jpeg",
  //   href: "https://x.com/quigleynft?s=21"
  // },
  // {
  //   id: "RENDR | rendə(r)",
  //   name: "RENDR | rendə(r)",
  //   imgSrc: "/team/royalties/5.jpeg",
  //   href: "https://x.com/realrendr?s=21"
  // },
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

const royalty1 = [
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
    imgSrc: "/team/fungibles.jpg",
    href: "https://x.com/fungibIes"
  },
  {
    id: "drew",
    name: "DREW AUSTIN",
    imgSrc: "/team/drew-austin.png",
    href: "https://x.com/DrewAustin"
  }
];

export const RoyaltySection = () => {
  return (
    <div id="team">
      <div className=" mt-12 md:mt-24 container py-8 md:py-12 ">
        <p className="text-[60px] uppercase sm:text-[120px] md:text-[150px] max-w-[800px] mx-auto font-vallejo text-center text-red  leading-[1] font-black">
          Akumanati Royalty
        </p>
        <div className="mt-10 md:mt-12 flex items-center justify-center flex-wrap  gap-8 md:gap-12">
          {[...royalty1, ...royalty2].map((val) => (
            <div key={val.id}>
              <Image
                src={val.imgSrc}
                width={200}
                height={200}
                className="rounded-full max-w-[132px] sm:max-w-[200px]"
                alt={val.name}
              />
              <p className="text-center mt-3 font-bold font-futura text-base sm:text-[24px] ">
                {val.name}
              </p>
              <div className="flex items-center justify-center mt-0 md:mt-3">
                <Link target="_blank" href={val.href}>
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="max-w-[31px] sm:max-w-[41px]"
                  >
                    <rect
                      x="0.5"
                      y="0.587891"
                      width="47"
                      height="47"
                      rx="15"
                      fill="url(#paint0_linear_2001_54)"
                    />
                    <path
                      d="M32.3392 11.5879H36.7861L27.071 22.6012L38.5 37.5879H29.5512L22.5421 28.4986L14.5222 37.5879H10.0727L20.4639 25.8079L9.5 11.5879H18.676L25.0116 19.8959L32.3392 11.5879ZM30.7785 34.9479H33.2425L17.3371 14.0892H14.6929L30.7785 34.9479Z"
                      fill="white"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_2001_54"
                        x1="24"
                        y1="24.0879"
                        x2="24"
                        y2="91.8763"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#FF0E1E" />
                        <stop offset="0.93" stopColor="#47050A" />
                      </linearGradient>
                    </defs>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
