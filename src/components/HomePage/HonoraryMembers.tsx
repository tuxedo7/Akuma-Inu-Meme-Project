import Image from "next/image";
import Link from "next/link";
import React from "react";
// import { BuyWithoutFearInternal } from "./Team/BuyWithoutFearInternal";

export const HonoraryMembers = () => {
  return (
    <div id="community" className="relative flex items-center min-h-[595px] ">
      <div className="container relative z-10 py-12">
        <div className="grid md:grid-cols-2 md:gap-10 max-w-[791px] mx-auto items-center">
          {/* left side of grid */}
          <div className="font-medium order-2 md:order-[unset] text-lg">
            <p className="text-[48px] text-center md:text-left md:text-[64px] font-vallejo leading-[1]">
              <span className="text-red">HONORARY</span> MEMEBERS
            </p>
            <div className="text-center md:text-left">
              <p className="mt-10">{`Join the most powerful cabal in crypto
  Buy 1M Akuma or hold a Probably Nothing Genesis NFT`}</p>
              <Link href={"https://t.me/akumainuonbase"} className="mt-6 block">
                Join chat: t.me/probablyzero{" "}
              </Link>
            </div>
            <div className="flex justify-center md:justify-start md:items-start gap-6 mt-8">
              <Link target="_blank" href={"https://t.me/akumainuonbase"}>
                <Image src={"/socials/Telegram.png"} width={38} height={32} alt="telegram" />
              </Link>
              <Link href={"https://x.com/AkumaInuPrime"} target="_blank">
                <Image src={"/icons/x.svg"} width={38} height={32} alt="telegram" />
              </Link>
            </div>
          </div>

          {/* right side of grid */}
          <div className="-mt-32 flex flex-col items-center justify-center">
            <Image
              className="max-w-[267px] md:max-w-[unset]"
              src={"/honorary-members/dog-mask.png"}
              width={394}
              height={438}
              alt="dog mask"
            />
            <div className="hidden md:block">
              <div className="max-w-[336px]">
                <p className="font-black font-futura text-[32px] uppercase">BUY WITH HONOR</p>
                <div className="grid gap-2 uppercase grid-cols-2 items-center mt-2">
                  <Link
                    href={
                      "https://app.uniswap.org/explore/tokens/base0x2f20cf3466f80a5f7f532fca553c8cbc9727fef6"
                    }
                    className="bg-red py-3 px-4 rounded-xl text-black font-futura text-center font-bold"
                  >
                    AKUMA
                  </Link>
                  <Link
                    href={"https://opensea.io/collection/probably-nothing-genesis-nft"}
                    target="_blank"
                    className="bg-red py-3 px-4 rounded-xl text-black font-futura text-center font-bold"
                  >
                    Probably GNFT
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image
        src={"/honorary-members/bg.png"}
        width={1440}
        height={1440}
        className="w-full h-full pointer-events-none absolute top-0 left-0"
        alt="background"
      />
    </div>
  );
};
