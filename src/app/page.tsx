// import Image from "next/image";

import { About } from "@/components/HomePage/About";
import { AkumaProducts } from "@/components/HomePage/AkumaProducts";
import { BuildingBounties } from "@/components/HomePage/BuildingBounties";
import { BuyWithoutFear } from "@/components/HomePage/BuyWithoutFear";
import { Facts } from "@/components/HomePage/Facts";
import { HeroSection } from "@/components/HomePage/HeroSection";
import { HonoraryMembers } from "@/components/HomePage/HonoraryMembers";
import { JoinCabal } from "@/components/HomePage/JoinCabal";
import { KeyPoints } from "@/components/HomePage/KeyPoints";
import { Royalty } from "@/components/HomePage/Team/Royalty";
import { Team } from "@/components/HomePage/Team/Team";
import { WeBuiltAnArmy } from "@/components/HomePage/WeBuiltAnArmy";

export default function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <Facts />
      <AkumaProducts />
      <BuyWithoutFear />
      <KeyPoints />
      <Team />
      <HonoraryMembers />
      <div className="container">
        <div className="relative z-10 max-w-[920px] mx-auto">
          <Royalty />
        </div>
      </div>
      <WeBuiltAnArmy />
      <BuildingBounties />
      <JoinCabal />
    </>
  );
}
