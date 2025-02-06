import Image from "next/image";
import React from "react";

export const WeBuiltAnArmy = () => {
  return (
    <div className="py-10 md:py-20 container ">
      <div className="max-w-[938px] px-4 md:px-0 mx-auto ">
        <p className="text-red max-w-[282px] md:max-w-[unset] mx-auto text-[48px] md:text-[100px] font-vallejo text-center ">
          WE’VE BUILT AN ARMY
        </p>
        <div className="mt-[38px] md:mt-[76px] max-w-[833px] mx-auto items-center grid md:grid-cols-[auto,1fr] gap-[62px] md:gap-[108px]">
          <div>
            <Image
              src={"/army/built-army.png"}
              width={354}
              height={459}
              alt="army"
              className="max-w-[245px] mx-auto"
            />
          </div>
          <div className="max-w-[371px] mx-auto text-[18px] font-medium flex flex-col gap-6 leading-[1.3]">
            <p>A pipeline of profitable products powered by popular people.</p>
            <p>
              We are building a better future together, at the speed of light, with our wallets
              connected to our skill sets.
            </p>
            <p>
              Join us (TG icon and link) while we flip AI on its head and use it to loosen the
              impact on jobs, not take it.
            </p>
            <p>
              We are building a new system that pays you for being human and using your creativity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
