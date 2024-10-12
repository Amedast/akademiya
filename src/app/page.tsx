"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import AdBanner from "./components/AdBanner";

export default function GamesPage() {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  const handleHover = (index: number) => {
    setHoveredImage(index);
  };

  const handleHoverOut = () => {
    setHoveredImage(null);
  };

  return (
    <div>
      <AdBanner
        dataAdFormat="auto"
        dataFullWidthResponsive={true}
        dataAdSlot="9043214754"
      />
      <div className="lg:h-screen flex items-center mt-28 lg:-mt-20 w-full">
        <div className="flex flex-wrap lg:flex-nowrap gap-10 lg:gap-0 items-center justify-center h-40 w-full">
          <Link
            href={"https://starrail.akademiya.app/"}
            className="bg-[url('/games/hsr.webp')] bg-center bg-cover bg-no-repeat h-40 w-[100%] lg:w-[33%] lg:hover:w-[100%] transition-all duration-200 cursor-pointer rounded-md lg:rounded-r-none lg:rounded-l-md"
            onMouseEnter={() => handleHover(0)}
            onMouseLeave={handleHoverOut}
          >
            <div
              className={`bg-background/70 h-full w-ful rounded-md lg:rounded-r-none lg:rounded-l-md`}
            >
              <div
                className={`flex h-full justify-end relative transition-opacity duration-200 ${
                  hoveredImage !== null && hoveredImage !== 0
                    ? "opacity-0"
                    : "opacity-100"
                }`}
              >
                <div className="hidden lg:block lg:w-[40%] absolute bottom-0 left-0">
                  <Image
                    src={"/games/kafka.webp"}
                    alt="Star Rail Akademiya showcase image"
                    width={600}
                    height={600}
                  />
                </div>
                <div className="w-[100%] lg:w-[60%] h-full flex items-center justify-center">
                  <label className="text-xl text-neutral-200 font-bold">
                    Star Rail Akademiya
                  </label>
                </div>
              </div>
            </div>
          </Link>
          <Link
            href={"https://genshin.akademiya.app/"}
            className="bg-[url('/games/genshin.webp')] bg-center bg-cover bg-no-repeat h-40 w-[100%] lg:w-[33%] lg:hover:w-[100%] transition-all duration-200 cursor-pointer rounded-md lg:rounded-none"
            onMouseEnter={() => handleHover(1)}
            onMouseLeave={handleHoverOut}
          >
            <div
              className={`bg-background/70 h-full w-full rounded-md lg:rounded-none`}
            >
              <div
                className={`flex h-full relative transition-opacity duration-200 ${
                  hoveredImage !== null && hoveredImage !== 1
                    ? "opacity-0"
                    : "opacity-100"
                }`}
              >
                <div className="hidden lg:block lg:w-[40%] absolute bottom-0 right-0">
                  <Image
                    src={"/games/furina.webp"}
                    alt="Genshin Akademiya showcase image"
                    width={600}
                    height={600}
                  />
                </div>
                <div className="w-[100%] lg:w-[60%] h-full flex items-center justify-center ">
                  <label className="text-xl text-neutral-200 font-bold">
                    Genshin Akademiya
                  </label>
                </div>
              </div>
            </div>
          </Link>
          <Link
            href={"https://wuwa.akademiya.app/"}
            className="bg-[url('/games/wuwa.webp')] bg-center bg-cover bg-no-repeat h-40 w-[100%] lg:w-[33%] lg:hover:w-[100%] transition-all duration-200 cursor-pointer rounded-md lg:rounded-l-none lg:rounded-r-md"
            onMouseEnter={() => handleHover(2)}
            onMouseLeave={handleHoverOut}
          >
            <div
              className={`bg-background/70 h-full w-full rounded-md lg:rounded-l-none lg:rounded-r-md`}
            >
              <div
                className={`flex h-full  relative transition-opacity duration-200 ${
                  hoveredImage !== null && hoveredImage !== 2
                    ? "opacity-0"
                    : "opacity-100"
                }`}
              >
                <div className="hidden lg:block lg:w-[40%] absolute bottom-0  lg:right-0">
                  <Image
                    src={"/games/changli.webp"}
                    alt="WuWa Akademiya showcase image"
                    width={600}
                    height={600}
                  />
                </div>
                <div className="w-[100%] lg:w-[60%] h-full flex items-center justify-center ">
                  <label className="text-xl text-neutral-200 font-bold">
                    WuWa Akademiya
                  </label>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <AdBanner
        dataAdFormat="auto"
        dataFullWidthResponsive={true}
        dataAdSlot="9043214754"
      />
    </div>
  );
}
