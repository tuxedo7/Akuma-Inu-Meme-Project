import React from "react";
// import { BuyWithoutFearInternal } from "./HomePage/Team/BuyWithoutFearInternal";
import Link from "next/link";
import Image from "next/image";

export const HonoraryMembers = () => {
  return (
    <div id="community" className="relative">
      <div className="relative z-10 container py-6 md:py-8">
        <p className="text-[60px] sm:text-[100px] md:text-[120px] font-vallejo text-red text-center md:text-left">
          HONORARY MEMEBERS OF THE ROYAL AKUMANATI
        </p>
        <div className="text-[24px] md:text-[32px] font-raleway font-bold mt-5 md:mt-8 text-center md:text-left leading-[1.4]">
          <p>Join the most powerful cabal in crypto</p>
          <p>{`Buy 1M Akuma or hold a Probably Nothing Genesis
            NFT`}</p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:justify-between ">
          <div className="mt-8 md:mt-[50px]">
            <p className="  max-w-[342px] md:max-w-[unset] text-[18px] sm:text-[22px] md:text-[35px] break-all mx-auto text-center md:text-right font-futura">
              Join chat:{" "}
              <Link className="underline" href={"https://t.me/TheAkumanati"}>
                t.me/TheAkumanati
              </Link>{" "}
            </p>
            <div className="flex justify-center md:justify-start  gap-6 mt-6">
              <Link target="_blank" href={"https://t.me/akumainuonbase"}>
                <Image
                  src={"/socials/Telegram.png"}
                  width={38}
                  height={32}
                  alt="telegram"
                />
              </Link>
              <Link href={"https://x.com/AkumaInuPrime"} target="_blank">
                <Image
                  src={"/icons/x.svg"}
                  width={38}
                  height={32}
                  alt="telegram"
                />
              </Link>
            </div>
          </div>
          <div>
            <div className="max-w-[336px]">
              <p className="font-black font-futura text-[32px] uppercase">
                BUY WITH HONOR
              </p>
              <div className="grid gap-2 uppercase grid-cols-2 items-center mt-2">
                <Link
                  href={
                    "https://app.uniswap.org/explore/tokens/base0x2f20cf3466f80a5f7f532fca553c8cbc9727fef6"
                  }
                  className="flex items-center justify-center bg-[#ff0328] py-3 px-4 rounded-xl text-black font-futura text-center font-bold"
                >
                  <span>
                    <Image
                      src="/logos/1.png"
                      width={20}
                      height={20}
                      alt="logo"
                      style={{ filter: "brightness(1)" }}
                    />
                  </span>
                  &nbsp;AKUMA
                </Link>
                <Link
                  href={
                    "https://opensea.io/collection/probably-nothing-genesis-nft"
                  }
                  target="_blank"
                  className="flex items-center justify-center bg-[#ff9003] py-3 px-4 rounded-xl text-black font-futura text-center font-bold"
                >
                  <span>
                    <Image
                      src="/logos/2.png"
                      width={20}
                      height={20}
                      alt="logo"
                      style={{ filter: "brightness(1)" }}
                    />
                  </span>
                  &nbsp;GNFT
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Image
        src={"/honorary/honorary-bg.png"}
        width={1440}
        height={1440}
        className="w-full h-full object-cover absolute top-0 left-0 "
        alt="bg"
      />
    </div>
  );
};
