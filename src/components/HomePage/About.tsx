import Image from "next/image";
import React from "react";

export const About = () => {
  return (
    <div className="relative min-h-[623px] -mt-6 pt-[130px] pb-[60px]">
      <Image
        className="absolute top-0 left-0 w-full h-full object-cover"
        width={1440}
        height={623}
        alt="about background"
        src={"/about/about.png"}
      />
      <div className="relative z-10 grid md:grid-cols-2 gap-[30px] lg:gap-[70px] container">
        <div>
          <div className="flex flex-col gap-3 text-[18px]">
            <p>
              Akuma Inu ($AKUMA) is now the fastest growing meme on Base and one of the top 20 memes
              in crypto.
            </p>
            <p>
              The next Shiba or Doge will not just be a jpeg, it has to be unique and permanent
              contribution to crypto.
            </p>
            <p>
              Akuma Inu is the ideal intersection of the top performing category of memes with the
              future of crypto infrastructure. Our contribution to the future of crypto is very
              clear. 
            </p>
          </div>
          <ol className="uppercase font-vallejo hidden md:flex text-[26px]  flex-col gap-1 mt-10">
            <li className="relative">1. &nbsp;Make Defi Safe</li>
            <li className="relative">2. &nbsp;Help Loosen the job impact on ai</li>
            <li className="relative">3. &nbsp;get profits back to vaulters</li>
          </ol>
        </div>
        <div className="flex justify-center items-center">
          <Image src={"/about/right.png"} alt="about " width={577} height={398} className="" />
        </div>
        <ol className="uppercase md:hidden list-decimal flex flex-col gap-1 font-vallejo text-[26px] max-w-[241px] mx-auto  ">
          <li>&nbsp;Make Defi Safe</li>
          <li>&nbsp;Help Loosen the job impact on ai</li>
          <li>&nbsp;get profits back to vaulters</li>
        </ol>
      </div>
    </div>
  );
};
