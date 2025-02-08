// import Image from "next/image";
import Link from "next/link";
import React from "react";

export const WeBuiltAnArmy = () => {
  return (
    <div className="py-10 md:py-20 container ">
      <div className="max-w-[938px] px-4 md:px-0 mx-auto ">
        <p className="text-[60px] uppercase sm:text-[120px] md:text-[150px]   mx-auto font-vallejo text-center md:text-right text-red  leading-[1] font-black">
          WE’VE BUILT AN ARMY
        </p>

        <div className="mt-[18px] md:mt-[76px] items-center grid md:grid-cols-2 gap-6 md:gap-6  ">
          <div>
            <video autoPlay loop muted className="mx-auto max-w-[496px] w-full">
              <source src="/army/army.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="text-[18px] md:text-[22px] font-medium flex flex-col gap-3 md:gap-6 leading-[1.3] text-justify order-[-1] md:order-[3] md:text-left">
            <p>A pipeline of profitable products powered by popular people.</p>
            <p>
              We are building a better future together, at the speed of light, with our wallets
              connected to our skill sets.
            </p>
            <p>
              <Link href={"https://t.me/akumainuonbase"}>Join us</Link> while we flip AI on its head
              and use it to loosen the impact on jobs; not take it.
            </p>
            <p>We are building a new system that pays humans for their creativity and hard work.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
