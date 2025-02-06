import Link from "next/link";
import React from "react";

export const BuyWithoutFearInternal = () => {
  return (
    <div>
      {" "}
      <p className="text-center text-[48px] font-vallejo uppercase leading-[1] max-w-[230px] md:max-w-[unset] mx-auto">
        Buy without Fear
      </p>
      <div className="mt-4 md:mt-7 flex items-center justify-center gap-5 font-vallejo text-[24px]">
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
    </div>
  );
};
