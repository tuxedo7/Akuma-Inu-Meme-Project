// import Image from "next/image";
// import Link from "next/link";
import React from "react";

// const team2 = [
//   {
//     id: "matt",
//     name: "MATT WALLACE",
//     imgSrc: "/team/matt.png",
//     href: "https://x.com/MattWallace888"
//   },
//   {
//     id: "mario",
//     name: "MARIO NAWFAL",
//     imgSrc: "/team/mario.png",
//     href: "https://x.com/MarioNawfal"
//   },
//   {
//     id: "shiny",
//     name: "SHINY",
//     imgSrc: "/team/shiny.png",
//     href: "https://x.com/ohhshiny"
//   },
//   {
//     id: "gmoney",
//     name: "GMONEY",
//     imgSrc: "/team/gmoney.png",
//     href: "https://x.com/gmoneyNFT"
//   },
//   {
//     id: "meltem",
//     name: "MELTEM",
//     imgSrc: "/team/meltem.png",
//     href: "https://x.com/Melt_Dem"
//   },
//   {
//     id: "fungibles",
//     name: "FUNGIBLES",
//     imgSrc: "/team/fungibles.png",
//     href: "https://x.com/fungibIes"
//   },
//   {
//     id: "drew",
//     name: "DREW AUSTIN",
//     imgSrc: "/team/drew-austin.png",
//     href: "https://x.com/DrewAustin"
//   }
// ];

export const TeamSection = () => {
  return (
    <div>
      <div className="container pt-12 md:pt-16">
        <p className="text-[60px] uppercase sm:text-[120px] md:text-[150px] max-w-[800px] mx-auto font-vallejo text-center text-red  leading-[1] font-black">
          team
        </p>
        <p className="text-[22px] sm:text-[32px] font-bold text-justify py-8 leading-[1.2]">
          Akuma Inu boasts one of the most accomplished teams to enter this market. They include:
        </p>
        <ul className="list-disc flex flex-col gap-2 list-inside text-[18px] md:text-[24px] font-medium p-4 text-left -tracking-[.05em] leading-[1.4] ">
          <li>Co-founders of five Coinbase-listed projects </li>
          <li>
            Tradfi & VC participants at the institutional level of both crypto and tech industries.
          </li>
          <li>Prominent Industry KOLs that are household names in the crypto space.</li>
          <li>Track record of 9-figure corporate exits outside of crypto. </li>
        </ul>
      </div>
      <div className=" mt-12 md:mt-24 container ">
        {/* <p className="text-[60px] uppercase sm:text-[120px] md:text-[150px] max-w-[800px] mx-auto font-vallejo text-center text-red  leading-[1] font-black">
          PROFILES
        </p> */}
        {/* <div className="mt-10 md:mt-12 flex items-center justify-center flex-wrap  gap-8 md:gap-12">
          {team.map((val) => (
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
                        <stop stop-color="#FF0E1E" />
                        <stop offset="0.93" stop-color="#47050A" />
                      </linearGradient>
                    </defs>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};
