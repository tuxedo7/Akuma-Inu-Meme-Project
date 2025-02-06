import React from "react";
import { MainTeam } from "./MainTeam";
import { Royalty } from "./Royalty";
import Image from "next/image";

export const Team = () => {
  return (
    <div className="relative mt-8 md:mt-16">
      <div className="container">
        <div className="relative z-10 max-w-[920px] border-t border-white mx-auto">
          <MainTeam />
          <Royalty />
        </div>
      </div>

      <Image
        width={1400}
        height={2800}
        alt="bg"
        src={"/team/team-bg.png"}
        className="absolute hidden md:block bottom-0 left-0  w-full h-[88%] object-top object-cover"
      />
    </div>
  );
};
