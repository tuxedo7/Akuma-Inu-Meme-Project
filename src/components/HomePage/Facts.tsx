import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Facts = () => {
  const facts = [
    {
      id: 1,
      text: "CONTRACT ADDRESS",
      href: "https://basescan.org/token/0x2f20cf3466f80a5f7f532fca553c8cbc9727fef6#balances"
    },
    { id: 2, text: "X", href: "https://x.com/akumainuprime" },
    { id: 3, text: "PUBLIC TG", href: "https://t.me/akumainuonbase" },
    { id: 4, text: "COINGECKO", href: "https://www.coingecko.com/en/coins/akuma-inu" },
    { id: 5, text: "AKUMANATI", href: "https://t.me/theakumanati" },
    { id: 6, text: "ANNOUNCEMENTS", href: "https://t.me/AkumaInuOnBase" },
    {
      id: 7,
      text: "DEXSCREENER",
      href: "https://dexscreener.com/base/0x55f3b570a62a346e98d88e20a36cc41c5da69980"
    },
    { id: 8, text: "CMC", href: "https://coinmarketcap.com/currencies/akuma-inu/" }
  ];

  return (
    <div className="relative">
      <Image
        src={"/facts/bg-facts.png"}
        className="absolute top-0 hidden md:block left-0 w-full h-full object-cover pointer-events-none"
        alt="background facts"
        width={1440}
        height={1440}
      />
      <div className="py-[80px] md:py-[180px] container relative z-10 ">
        <p className="font-vallejo text-[48px] md:text-[100px] text-center">
          <span className="text-red">JUST THE</span> FACTS
        </p>
        <div className="mt-4 md:mt-[56px] grid-cols-2 grid md:grid-cols-3 gap-x-4 gap-y-3  md:gap-6  max-w-[754px] mx-auto ">
          {facts.map((val) => (
            <Link
              className="font-vallejo text-lg md:text-[21px] border-red border p-2 md:p-4 rounded-sm justify-center flex text-center items-center cursor-pointer"
              key={val.id}
              href={val.href}
              target="_blank"
            >
              {val.text}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
