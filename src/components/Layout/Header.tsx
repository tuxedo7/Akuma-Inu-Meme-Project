import { socials } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const navItems = [
  { id: 1, href: "#", title: "About" },
  { id: 2, href: "#", title: "Token" },
  { id: 3, href: "#", title: "Team" }
];

export const Header = () => {
  return (
    <div className="py-2 md:py-5">
      <div className=" flex items-center justify-between">
        <div className="flex items-center gap-10">
          <div>
            <Image
              className="max-w-[35px] md:max-w-[unset]"
              src="/logo.png"
              width={76}
              height={104}
              alt="Logo"
            />
          </div>
          {navItems.map((val) => (
            <Link
              className="hidden md:block hover:text-red font-vallejo uppercase text-[24px] transition-all duration-300"
              href={val.href}
              key={val.id}
            >
              {val.title}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-6">
          <Link
            href={"#"}
            className="hidden md:block uppercase text-base md:text-[24px] py-2 px-4 md:px-6 text-black rounded-lg font-vallejo border border-[#A6A6A6] [background:linear-gradient(to_bottom,#FF0E1E_50%,#47050A_173%,#47050A_100%)] md:min-w-[261px] text-center"
          >
            buy without fear
          </Link>
          {navItems.map((val) => (
            <Link
              className="block md:hidden hover:text-red font-vallejo uppercase text-base md:text-[24px] transition-all duration-300"
              href={val.href}
              key={val.id}
            >
              {val.title}
            </Link>
          ))}
        </div>
      </div>
      <div className=" justify-end hidden md:flex">
        <div className="flex items-center justify-center mt-0 gap-7">
          {socials.map((val, index) => (
            <Link target="_blank" key={index} href={val.href}>
              <Image
                src={val.img}
                width={20}
                height={20}
                alt={val.title}
                className="w-full h-auto max-w-[20px]"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
