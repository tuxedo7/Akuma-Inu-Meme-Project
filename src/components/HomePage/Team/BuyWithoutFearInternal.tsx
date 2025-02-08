"use client";

import { uniswapURL } from "@/lib/constants";
// import { Copy } from "lucide-react";
import Link from "next/link";
import React from "react";
// import { toast } from "react-hot-toast";

export const BuyWithoutFearInternal = () => {
  // const handleCopy = () => {
  //   navigator.clipboard.writeText("0xeEC37AB9bb9058bEEb0B4f931f685Bb74fC42EeA");
  //   toast.success("Copied!");
  // };

  return (
    <div className="max-w-[336px]">
      <p className="font-black font-futura text-[32px] uppercase">BUY WITHOUT FEAR</p>
      <div className="grid gap-2 uppercase grid-cols-2 items-center mt-2">
        <Link
          target="_blank"
          href={"https://link.aarc.xyz/akuma"}
          className="bg-red py-3 px-4 rounded-xl text-black font-futura text-center font-bold"
        >
          fiat
        </Link>
        <Link
          href={uniswapURL}
          target="_blank"
          className="bg-red py-3 px-4 rounded-xl text-black font-futura text-center font-bold"
        >
          crypto
        </Link>
      </div>
    </div>
  );
};
