import { buyWithoutFearUrl, socials } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const navItems = [
  { id: 1, href: "#about", title: "About" },
  { id: 2, href: "#products", title: "Products" },
  { id: 3, href: "#team", title: "Team" },
  { id: 4, href: "#community", title: "community" }
];

export const Header = () => {
  return (
    <div className="py-2 md:py-5">
      <div className=" flex items-center justify-between">
        <div className="flex items-center gap-3 lg:gap-10 xl:gap-16">
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
        <div className="flex items-center gap-4 md:gap-6">
          <div>
            <div className=" justify-end hidden md:flex">
              <div className="flex items-center justify-center mt-0 gap-1 md:gap-3">
                {socials.map((val, index) => (
                  <Link target="_blank" key={index} href={val.href}>
                    <Image
                      src={val.img}
                      width={20}
                      height={20}
                      alt={val.title}
                      className="w-full h-auto max-w-[21px]"
                    />
                  </Link>
                ))}
              </div>
            </div>
            <Link
              href={buyWithoutFearUrl}
              className="hidden  mt-5 uppercase text-base md:text-[24px] py-4 px-2 md:px-2  font-futura rounded-lg font-bold tracking- [background:linear-gradient(to_bottom,#FF0E1E_50%,#47050A_173%,#47050A_100%)] text-white  w-[215px] h-[50px] md:flex items-center justify-center text-center"
            >
              BUY WITH HONOR
            </Link>
          </div>
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
    </div>
  );
};
