"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BuyWithoutFearInternal } from "./Team/BuyWithoutFearInternal";
import { toast } from "react-hot-toast";
import { Copy } from "lucide-react";

export const AiMentality = () => {
  const handleCopy = () => {
    navigator.clipboard.writeText("0xeEC37AB9bb9058bEEb0B4f931f685Bb74fC42EeA");
    toast.success("Copied!");
  };

  return (
    <div id="about" className="relative z-10 container pb-12">
      <div className="grid md:grid-cols-2 gap-2 max-w-[896px] mx-auto pb-12 items-end">
        <div className="max-w-[620px] mt-12 md:mt-0 mx-auto md:max-w-[unset] text-center md:text-left">
          <p className="text-red  text-[60px] sm:text-[80px] font-vallejo font-black uppercase">
            AI MEMETILITY OF THE Supercycle
          </p>
          <div className="flex flex-col gap-6 pt-10 md:pt-[80px] text-base sm:text-[24px] leading-[1.2]">
            <p className="">
              Akuma Inu ($AKUMA) is now the fastest growing meme on Base and one
              of the top 20 memes in crypto.
            </p>
            <p>
              The next Shiba or Doge will not just be a jpeg, it has to be
              unique and permanent contribution to crypto.
            </p>
            <p>
              Akuma Inu is the ideal intersection in the category of top
              performing memes with the future of crypto infrastructure at its
              core. Our contribution to the future of crypto is clear.
            </p>
            <ol className="list-decimal list-inside md:list-outside pl-6">
              <li>Make DeFi safe.</li>
              <li>Help offset the negative impact of AI on jobs</li>
              <li>Redistribute profits back to vaulters</li>
            </ol>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src={"/ai-mentality/ai-memetility.png"}
            width={463}
            height={516}
            className="max-w-[288px] sm:max-w-[436px] md:max-w-[unset]"
            alt="ai memetality"
          />
        </div>
      </div>
      <div className="-mt-12 md:mt-12 flex justify-center flex-col items-center md:grid md:grid-cols-2 gap-8 max-w-[896px] mx-auto">
        <BuyWithoutFearInternal />
        <div className="flex flex-col ">
          <div className="flex items-center font-medium text-center text-xs sm:text-base md:text-[16px]">
            <p>CA:&nbsp;</p>
            <button
              onClick={handleCopy}
              className="bg-white/20 py-3 break-all px-4 rounded-xl flex justify-center gap-2"
            >
              0x2f20cf3466f80a5f7f532fca553c8cbc9727fef6{" "}
              <span>
                {" "}
                <Copy className="w-3" />{" "}
              </span>
            </button>
          </div>
          <div className="flex justify-center md:justify-end  gap-6 mt-4">
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
      </div>
    </div>
  );
};
