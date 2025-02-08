import Image from "next/image";
import React from "react";

export const AkumaProducts = () => {
  const topText = `Akuma Inu is not just a dog. AI stands for Akuma Inu. Our community has fully embraced a new meta that encourages builders to focus on building instead of PVP. We are not simply another agent or launchpad. Akuma Inu’s contribution to crypto will be through building the infrastructure that becomes the connective tissue for launching and managing memes.`;

  return (
    <div className="relative px-4 md:px-0">
      <Image
        src={"/products/bg.png"}
        className="absolute top-0  left-0 w-full h-full object-cover object-top pointer-events-none"
        alt="background facts"
        width={1440}
        height={1440}
      />
      <div className="container">
        <div className="max-w-[954px] mx-auto relative pt-[80px] pb-[80px] md:pt-[170px] md:pb-[112px] z-10">
          <p className="font-vallejo text-[48px] max-w-[260px] md:max-w-[unset]  md:text-[100px] mb-[30px] md:mb-[60px] text-center md:text-left mx-auto leading-[1]">
            AKUMA <span className="text-red">PRODUCTS</span>
          </p>
          <p className="text-[18px] md:hidden ">{topText}</p>
          <div className="grid  place-items-center pt-[60px] md:grid-cols-2 gap-[60px] md:border-t border-white">
            <div>
              <div>
                <Image
                  className="w-full"
                  src={"/products/1.png"}
                  width={445}
                  height={384}
                  alt="product"
                />
                <p className="text-red text-[60px] font-vallejo leading-[1]">AKUMA VAULT</p>
                <p className="font-medium text-lg mt-6 md:mt-10">
                  Removes the barriers for projects in order to achieve higher market caps, allowing
                  them to focus on building and growing their communities. Akuma Vault will be used
                  by future memes to manage their holders, preventing malicious and stupid behavior.
                </p>
              </div>
            </div>
            <div>
              <p className="text-[18px] hidden md:block">{topText}</p>
              <div className="md:mt-[79px]">
                <Image
                  className="w-full"
                  src={"/products/2.png"}
                  width={445}
                  height={407}
                  alt="product"
                />
                <p className="text-red text-[60px] font-vallejo leading-[1]">AKUMABOT</p>
                <p className="font-medium text-lg mt-6 md:mt-10">
                  Will be the first genuine AI telegram trading bot (taking inspiration from Bonk,
                  our team includes Bonk founders). Currently, a quality telegram bot does not exist
                  on Base; we are going to change that.Taking inspiration from Bonk (several
                  founders of which are on our team), AkumaBot will b a unique I telegram trading
                  bot on Base. Additionally, new memes should use this bot to build their own
                  treasuries while benefiting ours.
                </p>
              </div>
            </div>
          </div>

          <p className="p-4 mt-12 bg-black text-center md:text-right max-w-[774px] mx-auto text-[18px]">
            Our road map is <strong className="uppercase">ridiculous</strong>. Follow our
            announcements channel for real-time updates.
          </p>
        </div>
      </div>
    </div>
  );
};
