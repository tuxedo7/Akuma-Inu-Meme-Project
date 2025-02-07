import Image from "next/image";
import React from "react";
import { Header } from "../Layout/Header";
import Link from "next/link";
import { socials } from "@/lib/constants";

export const HeroSection = () => {
  return (
    <div className=" relative ">
      <Image
        width={1400}
        height={1400}
        src={"/hero/bg-hero.png"}
        className="absolute top-0 left-0 w-full h-full object-cover hidden md:block"
        alt="bg image"
      />
      <Image
        width={954}
        height={738}
        src={"/hero/m-bg-hero.png"}
        className="absolute object-cover md:object-[unset] md:top-0 left-0 w-full h-full object-top  md:hidden"
        alt="bg image"
      />
      <div className="relative container z-10 h-full min-h-screen grid grid-rows-[auto,1fr]">
        <Header />
        <div className="flex items-end pb-20 justify-center h-full">
          {/* desktop */}
          <div>
            <Image
              src={"/hero/d-heading.svg"}
              width={817}
              height={241}
              className="w-full h-auto max-w-[817px] mx-auto hidden pointer-events-none  md:block"
              alt="ai memetility of the supercycle"
            />

            {/* mobile */}
            <Image
              src={"/hero/m-heading.svg"}
              width={227}
              height={162}
              className="w-full h-auto max-w-[227px] mx-auto  pointer-events-none md:hidden"
              alt="ai memetility of the supercycle"
            />
            <div className="flex items-center justify-center mt-10">
              <Link
                href={"#"}
                className=" md:hidden uppercase text-[24px] py-2 px-6 md:px-6 text-black rounded-lg font-vallejo border border-[#A6A6A6] [background:linear-gradient(to_bottom,#FF0E1E_50%,#47050A_173%,#47050A_100%)]  min-w-[261px] text-center"
              >
                buy without fear
              </Link>
            </div>
            <div className="flex md:hidden items-center  justify-center mt-8 gap-3.5">
              {socials.map((val, index) => (
                <Link target="_blank" key={index} href={val.href}>
                  <Image
                    src={val.img}
                    width={20}
                    height={20}
                    alt={val.title}
                    className="w-full h-auto max-w-[20px]"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
