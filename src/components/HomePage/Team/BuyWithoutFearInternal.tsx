"use client";

import { Copy } from "lucide-react";
import Link from "next/link";
import React from "react";
import { toast } from "react-hot-toast";

export const BuyWithoutFearInternal = () => {
  const handleCopy = () => {
    navigator.clipboard.writeText("0xeEC37AB9bb9058bEEb0B4f931f685Bb74fC42EeA");
    toast.success("Copied!");
  };

  return (
    <div>
      {" "}
      <p className="text-center text-[48px] font-vallejo uppercase leading-[1] max-w-[230px] md:max-w-[unset] mx-auto">
        Buy without Fear
      </p>
      <div className=" rounded-xl mt-4 md:mt-7 font-vallejo text-[24px] max-w-[600px] mx-auto ">
        <div className="flex items-center justify-center gap-5 ">
          <Link
            className="w-[131px] h-[44px] bg-red text-black border text-center flex items-center justify-center border-white rounded-lg"
            href={"#"}
          >
            FIAT
          </Link>
          <Link
            className="w-[131px] h-[44px] bg-red text-black border text-center flex items-center justify-center border-white rounded-lg"
            href={"#"}
          >
            CRYPTO
          </Link>
        </div>
        <div className="px-4 flex items-center justify-center mt-4">
          <button
            className="text-sm md:text-lg text-center flex justify-center items-end"
            onClick={handleCopy}
          >
            Ca: 0xeEC37AB9bb9058bEEb0B4f931f685Bb74fC42EeA{" "}
            <span className="ml-2 md:mb-1">
              <Copy className="w-3 md:w-4" />
            </span>{" "}
          </button>
        </div>
      </div>
    </div>
  );
};
