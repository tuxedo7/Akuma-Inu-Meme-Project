"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
// import { Tweet } from "react-tweet";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import SoundCloudPlayer from "../SoundCloudPlayer";

const redSocials = [
  {
    id: 1,
    href: "https://youtube.com/@akumainutoken",
    imgSrc: "/icons/youtube.svg",
  },
  {
    id: 2,
    href: "https://soundcloud.com/inuakuma66",
    imgSrc: "/socials/sound-cloud.svg",
  },
  {
    id: 3,
    href: "https://www.tiktok.com/@baseakumainu",
    imgSrc: "/icons/tiktok.svg",
  },
  {
    id: 5,
    href: "https://x.com/AkumaInuPrime",
    imgSrc: "/icons/x.svg",
  },
  {
    id: 6,
    href: "https://www.instagram.com/baseakumainu?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    imgSrc: "/icons/instagram.svg",
  },
];

const tiktoks = [
  {
    id: "1",
    imgSrc: "/vid-img/1.jpeg",
    url: "https://www.tiktok.com/@baseakumainu/video/7467202082727054610?is_from_webapp=1&web_id=7468642621638084097",
  },
  {
    id: "2",
    imgSrc: "/vid-img/2.jpeg",
    url: "https://www.tiktok.com/@baseakumainu/video/7465855186351820040?is_from_webapp=1&web_id=7468642621638084097",
  },
  {
    id: "3",
    imgSrc: "/vid-img/3.jpeg",
    url: "https://www.tiktok.com/@baseakumainu/video/7465359381563985160?is_from_webapp=1&web_id=7468642621638084097",
  },
  {
    id: "4",
    imgSrc: "/vid-img/4.jpeg",
    url: "https://www.tiktok.com/@baseakumainu/video/7464634384482602258?is_from_webapp=1&web_id=7468642621638084097",
  },
  {
    id: "5",
    imgSrc: "/vid-img/5.jpeg",
    url: "https://www.tiktok.com/@baseakumainu/video/7463597295590755602?is_from_webapp=1&web_id=7468642621638084097",
  },
  {
    id: "6",
    imgSrc: "/vid-img/6.jpeg",
    url: "https://www.tiktok.com/@baseakumainu/video/7463296833956121864?is_from_webapp=1&sender_device=pc&web_id=7468642621638084097",
  },
  {
    id: "7",
    imgSrc: "/vid-img/7.jpeg",
    url: "https://www.tiktok.com/@baseakumainu/video/7462435001624349960?is_from_webapp=1&sender_device=pc&web_id=7468642621638084097",
  },
  {
    id: "8",
    imgSrc: "/vid-img/8.jpeg",
    url: "https://www.tiktok.com/@baseakumainu/video/7461350557710601480?is_from_webapp=1&web_id=7468642621638084097",
  },
];

const tweets = [
  {
    id: "1",
    imgSrc: "/twitter-imgs/1.jpeg",
    url: "https://x.com/AkumaInuPrime/status/1886673833723355491",
  },
  {
    id: "2",
    imgSrc: "/twitter-imgs/2.jpeg",
    url: "https://x.com/AkumaInuPrime/status/1886674039621521483",
  },
  {
    id: "3",
    imgSrc: "/twitter-imgs/3.jpeg",
    url: "https://x.com/Probably0/status/1886674724459356662",
  },
  {
    id: "4",
    imgSrc: "/twitter-imgs/4.jpeg",
    url: "https://x.com/AkumaInuPrime/status/1886708431618498950",
  },
  {
    id: "5",
    imgSrc: "/twitter-imgs/5.jpeg",
    url: "https://x.com/cryptocom/status/1886799378599350722",
  },
  {
    id: "6",
    imgSrc: "/twitter-imgs/6.jpeg",
    url: "https://x.com/AkumaInuPrime/status/1886846389738717346",
  },
  {
    id: "7",
    imgSrc: "/twitter-imgs/7.jpeg",
    url: "https://x.com/AkumaInuPrime/status/1886673833723355491",
  },
  {
    id: "8",
    imgSrc: "/twitter-imgs/8.jpeg",
    url: "https://x.com/PapaPeter007/status/1886654666123174345",
  },
];

const sounds = [
  {
    id: "1",
    imgSrc: "/sounds/1.png",
    url: "https://soundcloud.com/inuakuma66/akuma-we-told-you",
  },
  {
    id: "2",
    imgSrc: "/sounds/2.png",
    url: "https://soundcloud.com/inuakuma66/congolese-sendor-akuma-inu",
  },
  {
    id: "3",
    imgSrc: "/sounds/3.png",
    url: "https://soundcloud.com/inuakuma66/sendor-akuma-inu",
  },
  {
    id: "4",
    imgSrc: "/sounds/4.png",
    url: "https://soundcloud.com/inuakuma66/pump-pump-the-bags",
  },
  {
    id: "5",
    imgSrc: "/sounds/5.png",
    url: "https://soundcloud.com/inuakuma66/opera",
  },
  {
    id: "6",
    imgSrc: "/sounds/6.png",
    url: "https://soundcloud.com/inuakuma66/we-told-you-duex",
  },
  {
    id: "7",
    imgSrc: "/sounds/7.png",
    url: "https://soundcloud.com/inuakuma66/sets/akuma-inu-soundtrack",
  },
  {
    id: "8",
    imgSrc: "/sounds/8.png",
    url: "https://soundcloud.com/inuakuma66/akuma-inu-on-base-akuma-inu-on",
  },
];

export const SpreadTheLove = () => {
  // State to store the URL of the selected track
  const [currentTrack, setCurrentTrack] = useState<string | null>(null);

  // Handle click event on images
  const handleImageClick = (url: string) => {
    setCurrentTrack(url); // Set the SoundCloud URL for the clicked image
  };

  return (
    <div>
      <div className="container py-12 px-6 bg-[#3B0304]">
        <p className="text-center font-vallejo text-[60px] md:text-[80px] font-black text-red">
          SPREAD THE LOVE
        </p>
        <div className="mt-8 flex items-center justify-center  gap-5 md:gap-8">
          {redSocials.map((val) => (
            <Link target="_blank" key={val.id} href={val.href}>
              <Image
                src={val.imgSrc}
                width={36}
                height={35}
                alt={val?.imgSrc}
              />
            </Link>
          ))}
        </div>
        <div className="my-8 py-8 md:px-16 rounded-xl bg-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-6 mb-2">
            <Image
              className="max-w-[43px] md:max-w-[unset]"
              src={"/icons/tiktok.svg"}
              width={61}
              height={72}
              alt="tiktok"
            />
            <div className="h-2 w-2 bg-white rounded-full"></div>
            <Link
              target="_blank"
              href={"https://www.tiktok.com/@baseakumainu"}
              className="hover:text-red"
            >
              <p className="text-[24px] md:text-[32px] font-bold">
                @baseakumainu
              </p>
            </Link>
          </div>

          <div>
            {/* desktop */}
            <div className="hidden md:flex items-center justify-center flex-wrap gap-4">
              {tiktoks.map((val) => (
                <Link
                  key={val.id}
                  className="block w-[190px] h-[190px]"
                  href={val.url}
                  target="_blank"
                >
                  <Image
                    src={val.imgSrc}
                    width={400}
                    height={400}
                    alt="img src"
                    className="!w-[190px] !h-[190px] object-cover rounded-xl"
                  />
                </Link>
              ))}
            </div>

            {/* mobile */}
            <div className="block md:hidden px-4 mt-6 mx-auto">
              <Carousel opts={{ dragFree: true }} className="w-full ">
                <CarouselContent className="w-full">
                  {[...tiktoks].splice(0, 4).map((val, index) => (
                    <CarouselItem className="basis-[unset]" key={index}>
                      <Link
                        key={val.id}
                        className="block w-[190px] h-[190px]"
                        href={val.url}
                        target="_blank"
                      >
                        <Image
                          src={val.imgSrc}
                          width={400}
                          height={400}
                          alt="img src"
                          className="!w-[190px] !h-[190px] object-cover rounded-xl"
                        />
                      </Link>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                {/* <CarouselPrevious />
                <CarouselNext /> */}
              </Carousel>
            </div>
            <div className="block md:hidden px-4 mt-6 mx-auto">
              <Carousel opts={{ dragFree: true }} className="w-full ">
                <CarouselContent className="w-full">
                  {[...tiktoks].splice(4, 8).map((val, index) => (
                    <CarouselItem className="basis-[unset]" key={index}>
                      <Link
                        key={val.id}
                        className="block w-[190px] h-[190px]"
                        href={val.url}
                        target="_blank"
                      >
                        <Image
                          src={val.imgSrc}
                          width={400}
                          height={400}
                          alt="img src"
                          className="!w-[190px] !h-[190px] object-cover rounded-xl"
                        />
                      </Link>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                {/* <CarouselPrevious />
                <CarouselNext /> */}
              </Carousel>
            </div>
          </div>
        </div>
        <div className="my-8 py-8 md:px-16 rounded-xl bg-white/10 mb-2">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-6 mb-4">
            <Image
              className="max-w-[43px] md:max-w-[unset]"
              src={"/icons/x.svg"}
              width={61}
              height={72}
              alt="tiktok"
            />
            <div className="h-2 w-2 bg-white rounded-full"></div>
            <Link
              target="_blank"
              href={"https://x.com/AkumaInuPrime"}
              className="hover:text-red"
            >
              <p className="text-[24px] md:text-[32px] font-bold">
                @akumainuprime
              </p>
            </Link>
          </div>
          <div>
            {/* desktop */}
            <div className="hidden md:flex items-center justify-center flex-wrap gap-4">
              {tweets.map((val) => (
                <Link
                  key={val.id}
                  className="block w-[190px] h-[190px]"
                  href={val.url}
                  target="_blank"
                >
                  <Image
                    src={val.imgSrc}
                    width={400}
                    height={400}
                    alt="img src"
                    className="!w-[190px] !h-[190px] object-cover rounded-xl"
                  />
                </Link>
              ))}
            </div>

            {/* mobile */}
            <div className="block md:hidden px-4  mt-6 mx-auto">
              <Carousel opts={{ dragFree: true }} className="w-full ">
                <CarouselContent className="w-full">
                  {[...tweets].splice(0, 4).map((val, index) => (
                    <CarouselItem className="basis-[unset]" key={index}>
                      <Link
                        key={val.id}
                        className="block w-[190px] h-[190px]"
                        href={val.url}
                        target="_blank"
                      >
                        <Image
                          src={val.imgSrc}
                          width={400}
                          height={400}
                          alt="img src"
                          className="!w-[190px] !h-[190px] object-cover rounded-xl"
                        />
                      </Link>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                {/* <CarouselPrevious />
                <CarouselNext /> */}
              </Carousel>
            </div>
            <div className="block md:hidden px-4  mt-6 mx-auto">
              <Carousel opts={{ dragFree: true }} className="w-full ">
                <CarouselContent className="w-full">
                  {[...tweets].splice(4, 8).map((val, index) => (
                    <CarouselItem className="basis-[unset]" key={index}>
                      <Link
                        key={val.id}
                        className="block w-[190px] h-[190px]"
                        href={val.url}
                        target="_blank"
                      >
                        <Image
                          src={val.imgSrc}
                          width={400}
                          height={400}
                          alt="img src"
                          className="!w-[190px] !h-[190px] object-cover rounded-xl"
                        />
                      </Link>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                {/* <CarouselPrevious />
                <CarouselNext /> */}
              </Carousel>
            </div>

            {/* <Image
            src={"/twitter/x.png"}
            width={832}
            height={495}
            alt="tiktok"
            className="w-full h-auto hidden md:block"
          />
          <Image
            src={"/twitter/m-x.png"}
            width={832}
            height={422}
            alt="tiktok"
            className="w-full h-auto  md:hidden"
          /> */}
          </div>
        </div>
        <div className="my-8 py-8 md:px-16 rounded-xl bg-white/10 mb-2">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-6 mb-4">
            <Image
              className="max-w-[43px] md:max-w-[unset]"
              src={"socials/sound-cloud.svg"}
              width={61}
              height={72}
              alt="tiktok"
            />
            <div className="h-2 w-2 bg-white rounded-full"></div>
            <Link
              target="_blank"
              href={"https://soundcloud.com/inuakuma66"}
              className="hover:text-red"
            >
              <p className="text-[24px] md:text-[32px] font-bold">
                @inuakuma66
              </p>
            </Link>
          </div>
          <div>
            {/* desktop */}
            <div className="hidden md:flex items-center justify-center flex-wrap gap-4">
              {sounds.map((val) => (
                // <Link
                //   key={val.id}
                //   className="block w-[190px] h-[190px]"
                //   href={val.url}
                //   target="_blank"
                // >
                <Image
                  src={val.imgSrc}
                  key={val.id}
                  onClick={() => handleImageClick(val.url)}
                  width={400}
                  height={400}
                  alt="img src"
                  className="!w-[190px] !h-[190px] object-cover rounded-xl cursor-pointer"
                />
                // </Link>
              ))}
            </div>

            {/* mobile */}
            <div className="block md:hidden px-4  mt-6 mx-auto">
              <Carousel opts={{ dragFree: true }} className="w-full ">
                <CarouselContent className="w-full">
                  {[...sounds].splice(0, 4).map((val, index) => (
                    <CarouselItem className="basis-[unset]" key={index}>
                      {/* <Link
                        key={val.id}
                        className="block w-[190px] h-[190px]"
                        href={val.url}
                        target="_blank"
                      > */}
                      <Image
                        src={val.imgSrc}
                        key={val.id}
                        onClick={() => handleImageClick(val.url)}
                        width={400}
                        height={400}
                        alt="img src"
                        className="!w-[190px] !h-[190px] object-cover rounded-xl cursor-pointer"
                      />
                      {/* </Link> */}
                    </CarouselItem>
                  ))}
                </CarouselContent>
                {/* <CarouselPrevious />
                <CarouselNext /> */}
              </Carousel>
            </div>
            <div className="block md:hidden px-4  mt-6 mx-auto">
              <Carousel opts={{ dragFree: true }} className="w-full ">
                <CarouselContent className="w-full">
                  {[...sounds].splice(4, 8).map((val, index) => (
                    <CarouselItem className="basis-[unset]" key={index}>
                      {/* <Link
                        key={val.id}
                        className="block w-[190px] h-[190px]"
                        href={val.url}
                        target="_blank"
                      > */}
                      <Image
                        src={val.imgSrc}
                        key={val.id}
                        onClick={() => handleImageClick(val.url)}
                        width={400}
                        height={400}
                        alt="img src"
                        className="!w-[190px] !h-[190px] object-cover rounded-xl cursor-pointer"
                      />
                      {/* </Link> */}
                    </CarouselItem>
                  ))}
                </CarouselContent>
                {/* <CarouselPrevious />
                <CarouselNext /> */}
              </Carousel>
            </div>
            {currentTrack && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <motion.div
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  className="bg-white p-2 rounded-2xl shadow-xl max-w-md w-full"
                >
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">Modal Title</h2>
                    <button onClick={() => setCurrentTrack(null)}>
                      <X className="w-6 h-6 text-gray-600 hover:text-black" />
                    </button>
                  </div>
                  {currentTrack && <SoundCloudPlayer url={currentTrack} />}
                </motion.div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
