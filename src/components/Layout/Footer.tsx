import Image from "next/image";
import React from "react";

export const Footer = () => {
  return (
    <div className="container flex items-center justify-center bg-gradient-to-b from-[#3B0304] to-[#110C0C]">
      <Image src={"/footer/bottom-img.png"} width={693} height={716} alt="bg" />
    </div>
  );
};
