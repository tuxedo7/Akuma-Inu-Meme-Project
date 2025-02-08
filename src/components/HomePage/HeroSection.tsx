import Image from "next/image";
import React from "react";
import { Header } from "../Layout/Header";
import Link from "next/link";
import { buyWithoutFearUrl, socials } from "@/lib/constants";
import { cn } from "@/lib/utils";

export const HeroSection = () => {
  return (
    <div className="relative">
      {/* <Image
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
      /> */}
      <div className={cn("relative  z-10 h-full ", "")}>
        <div className="container">
          <Header />
        </div>
        <div className="mt-8 max-w-[1024px] mx-auto max-md:overflow-hidden">
          <Image
            className="scale-[1.8] origin-top !min-w-[unset] !w-full hidden md:block"
            src={"/hero/hero.png"}
            width={1476}
            height={978}
            alt="hero"
          />
          <Image
            className="scale-[1.05] origin-top !w-full sm:block md:hidden hidden"
            src={"/hero/hero-tb-1.png"}
            width={838}
            height={671}
            alt="hero"
          />
          <Image
            className="scale-[2.5] origin-top !w-full sm:hidden "
            src={"/hero/hero-mb.png"}
            width={380}
            height={304}
            alt="hero"
          />
          <div className="relative z-10 flex flex-col items-center justify-center mt-40 sm:mt-[-200px] md:hidden">
            <div className=" justify-end  flex">
              <div className="flex items-center justify-center mt-0 gap-1 md:gap-3">
                {socials.map((val, index) => (
                  <Link target="_blank" key={index} href={val.href}>
                    <Image
                      src={val.img}
                      width={20}
                      height={20}
                      alt={val.title}
                      className="w-full h-auto max-w-[21px]"
                    />
                  </Link>
                ))}
              </div>
            </div>
            <Link
              href={buyWithoutFearUrl}
              className="   mt-5 uppercase text-base md:text-[24px] py-4 px-2 md:px-2  font-futura rounded-lg font-bold tracking- [background:linear-gradient(to_bottom,#FF0E1E_50%,#47050A_173%,#47050A_100%)] text-white  w-[215px] h-[50px] md:flex items-center justify-center text-center"
            >
              BUY WITHOUT FEAR
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
