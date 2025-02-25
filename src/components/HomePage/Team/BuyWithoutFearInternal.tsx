"use client";

import { uniswapURL } from "@/lib/constants";
// import { Copy } from "lucide-react";
import Link from "next/link";
import React from "react";
// import { toast } from "react-hot-toast";

export const BuyWithoutFearInternal = () => {
  // const handleCopy = () => {
  //   navigator.clipboard.writeText("0x2f20cf3466f80a5f7f532fca553c8cbc9727fef6");
  //   toast.success("Copied!");
  // };

  return (
    <div className="max-w-[336px]">
      <p className="font-black font-futura text-[30px] uppercase">BUY WITHOUT FEAR</p>
      <div className="grid gap-2 uppercase grid-cols-2 items-center mt-2">
        <Link
          target="_blank"
          href={"https://link.aarc.xyz/akuma"}
          className="bg-red py-3 px-4 rounded-xl text-black font-futura text-center font-bold transaction-all duration-300 hover:scale-105 focus:scale-105"
        >
          fiat
        </Link>
        <Link
          href={uniswapURL}
          target="_blank"
          className="bg-red py-3 px-4 rounded-xl text-black font-futura text-center font-bold transaction-all duration-300 hover:scale-105 focus:scale-105"
        >
          crypto
        </Link>
      </div>
    </div>
  );
};
