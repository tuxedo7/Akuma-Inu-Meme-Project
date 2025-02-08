import React from "react";
import { BuyWithoutFearInternal } from "./Team/BuyWithoutFearInternal";
import { cn } from "@/lib/utils";

export const JustTheFacts = () => {
  const bgItem = "bg-gradient-to-b from-[#410004] to-[#8D141C]";
  return (
    <div className="py-6 sm:py-12 md:py-24">
      <div className="container">
        <p className="text-red text-[60px] sm:text-[120px] font-black md:text-[150px] font-vallejo text-center max-w-[320px] mx-auto sm:max-w-[unset]">
          JUST THE FACTS
        </p>
        <div className="mt-2 sm:mt-8 max-w-[790px] mx-auto text-sm sm:text-base md:text-[24px] py-2 flex flex-col gap-2 sm:gap-4">
          <p
            className={cn(
              " py-3.5  px-4 rounded-xl flex md:block flex-col items-center justify-center",
              bgItem
            )}
          >
            <strong>Contract Address:</strong>
            <span className="break-all"> 0x2f20cf3466f80a5f7f532fca553c8cbc9727fef6</span>
          </p>
          <p
            className={cn(
              " py-3.5  px-4 rounded-xl flex md:block flex-col items-center justify-center",
              bgItem
            )}
          >
            <strong>Total Supply:</strong> 666,666,666,666 Tokens
          </p>
          <p
            className={cn(
              " py-3.5  px-4 rounded-xl flex md:block flex-col items-center justify-center",
              bgItem
            )}
          >
            <strong>Live Price:</strong> $0.000180700
          </p>
          <p
            className={cn(
              " py-3.5  px-4 rounded-xl flex md:block flex-col items-center justify-center",
              bgItem
            )}
          >
            <strong>Market Cap:</strong> $118.38m
          </p>
          <p
            className={cn(
              " py-3.5  px-4 rounded-xl flex md:block flex-col items-center justify-center",
              bgItem
            )}
          >
            <strong>Daily Vol:</strong> $7.05m
          </p>
        </div>
        <div className="mt-12 flex items-center justify-center">
          <BuyWithoutFearInternal />
        </div>
      </div>
    </div>
  );
};