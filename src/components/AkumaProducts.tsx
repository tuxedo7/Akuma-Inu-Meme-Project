import Image from "next/image";
import React from "react";
import { BuyWithoutFearInternal } from "./HomePage/Team/BuyWithoutFearInternal";
import Link from "next/link";

export const AkumaProducts = () => {
  return (
    <div id="products" className="py-8">
      <div className="container">
        <p className="text-[60px] sm:text-[120px] md:text-[150px] max-w-[800px] mx-auto font-vallejo text-center text-red  leading-[1] font-black">
          Akuma Products
        </p>
        <p className="text-[22px] sm:text-[32px] font-bold text-center text-justify py-8 leading-[1.2]">
          Akuma Inu is not just a dog. AI stands for Akuma Inu. Our community has fully embraced a
          new meta that encourages builders to build, not PVP. We are not simply another agent or
          launchpad. Akuma Inu’s contribution to crypto will be through spreading the infrastructure
          that becomes the connective tissue for launching and managing memes.
        </p>
        <div className="grid md:grid-cols-2 gap-8 md:gap-16  ">
          <div className="flex flex-col items-center  justify-center">
            <Image src={"/products/1.png"} width={400} height={400} alt="product" />
            <p className="py-3 text-[60px] text-center font-vallejo text-red">AKUMA VAULT</p>
            <p className="text-center mt-4 text-[18px] sm:text-[22px] text-justify font-medium leading-[1.2]">
              Removes the barriers to projects achieving higher market caps, because they can focus
              on building and growing their communities. Akuma Vault will be used by future memes to
              manage their holders, and prevent malicious and stupid behavior.{" "}
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Image src={"/products/2.png"} width={400} height={400} alt="product" />
            <p className="py-3 text-[60px] text-center font-vallejo text-red">AkumaBot</p>
            <p className="text-center mt-4 text-[18px] sm:text-[22px] text-justify font-medium leading-[1.2]">
              Will be the first genuine AI telegram trading bot (taking inspiration from Bonk, our
              team includes Bonk founders). There isn’t a quality base telegram bot currently, and
              we need to change that. Additionally, new memes should use this bot to build their own
              treasuries while benefiting ours.
            </p>
          </div>
        </div>
        <div className="mt-8 md:mt-16 grid md:grid-cols-2 gap-8 md:gap-16">
          <div className="flex justify-center items-center md:block">
            <BuyWithoutFearInternal />
          </div>
          <div className="text-center md:text-right text-[18px] sm:text-[22px] font-medium leading-[1.2]">
            Our road map is <strong className="uppercase">ridiculous</strong>. Follow our
            announcements channel for real-time updates.
            <div className="flex justify-center md:justify-end  gap-6 mt-4">
              <Link target="_blank" href={"https://t.me/akumainuonbase"}>
                <Image src={"/socials/Telegram.png"} width={38} height={32} alt="telegram" />
              </Link>
              <Link href={"https://x.com/AkumaInuPrime"} target="_blank">
                <Image src={"/icons/x.svg"} width={38} height={32} alt="telegram" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
