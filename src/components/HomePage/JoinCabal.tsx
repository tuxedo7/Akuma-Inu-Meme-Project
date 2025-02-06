import Image from "next/image";
import Link from "next/link";
import React from "react";

const redSocials = [
  {
    id: 1,
    href: "#",
    imgSrc: "/socials/youtube-red.svg"
  },
  {
    id: 2,
    href: "#",
    imgSrc: "/socials/reddit.svg"
  },
  {
    id: 3,
    href: "#",
    imgSrc: "/socials/tiktok.svg"
  },
  {
    id: 5,
    href: "#",
    imgSrc: "/socials/x.svg"
  },
  {
    id: 6,
    href: "#",
    imgSrc: "/socials/instagram.svg"
  }
];

export const JoinCabal = () => {
  return (
    <div>
      <div className="container relative z-20">
        <div className="max-w-[1017px] mx-auto">
          <div className="grid md:grid-cols-[1fr,auto] items-center">
            <div>
              <p className="text-[48px] md:text-[54px] lg:text-[64px] font-vallejo max-w-[355px] text-center md:text-left mx-auto md:mx-[unset] md:max-w-[489px] ">
                Join the most <span className="text-red">powerful cabal</span>
              </p>
              <p className="mt-[29px] md:mt-[59px] max-w-[342px] md:max-w-[unset] text-[22px] md:text-[35px] break-all font-raleway mx-auto text-center md:text-left">
                Join chat:{" "}
                <Link className="text-red" href={"https://www.t.me/probablyzero"}>
                  t.me/probablyzero
                </Link>{" "}
              </p>
            </div>
            <div className="flex items-center justify-center">
              <Image
                className="-mb-40 max-w-[291px] md:max-w-[475px] w-full"
                src={"/key-points/key-points.png"}
                width={475}
                height={720}
                alt="key points"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full -mt-16 md:-mt-24">
        <div className="container relative z-10">
          <div className="max-w-[1017px] mx-auto pt-[220px] md:py-20">
            <p className="text-[44px] font-vallejo text-center md:text-left">SPREAD THE LOVE</p>
            <div className="mt-8 flex items-center justify-center md:justify-start gap-5 md:gap-8">
              {redSocials.map((val) => (
                <Link key={val.id} href={val.href}>
                  <Image src={val.imgSrc} width={36} height={35} alt={val?.imgSrc} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <Image
          className="absolute top-0 left-0 w-full min-h-[409px] object-cover object-top"
          src={"/footer/bg.png"}
          width={1400}
          height={409}
          alt="bg"
        />
      </div>
    </div>
  );
};
