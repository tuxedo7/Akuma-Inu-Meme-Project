import Image from "next/image";
import Link from "next/link";
import React from "react";

const redSocials = [
  {
    id: 1,
    href: "https://youtube.com/@akumainutoken",
    imgSrc: "/socials/youtube-red.svg"
  },
  {
    id: 2,
    href: "https://soundcloud.com/inuakuma66",
    imgSrc: "/socials/discord.svg"
  },
  {
    id: 3,
    href: "https://www.tiktok.com/@baseakumainu",
    imgSrc: "/socials/tiktok.svg"
  },
  {
    id: 5,
    href: "https://x.com/AkumaInuPrime",
    imgSrc: "/socials/x.svg"
  },
  {
    id: 6,
    href: "https://www.instagram.com/baseakumainu?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
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
              <div className=" mt-6 text-center md:text-left text-[16px] font-medium flex flex-col gap-4 leading-[1.3]">
                <p>A pipeline of profitable products powered by popular people.</p>
                <p>
                  We are building a better future together, at the speed of light, with our wallets
                  connected to our skill sets.
                </p>
                <p>
                  <Link href={"https://t.me/TheAkumanati"}>Join us</Link> while we flip AI on its
                  head and use it to loosen the impact on jobs; not take it.
                </p>
                <p>
                  We are building a new system that pays humans for their creativity and hard work.
                </p>
              </div>
              <p className="mt-[29px] md:mt-[59px] max-w-[342px] md:max-w-[unset] text-[22px] md:text-[35px] break-all font-raleway mx-auto text-center md:text-left">
                Join chat:{" "}
                <Link className="text-red" href={"https://t.me/TheAkumanati"}>
                  t.me/TheAkumanati
                </Link>{" "}
              </p>
            </div>

            <div className="flex items-center justify-center">
              <Image
                className="-mb- max-w-[291px] md:max-w-[475px] w-full"
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
