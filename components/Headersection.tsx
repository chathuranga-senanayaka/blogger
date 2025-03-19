import React from "react";
import { Button } from "./ui/button";
import header_img from "@/public/header_img.png";
import Image from "next/image";

const Headersection = () => {
  return (
    <div className="wrapper md:w-full md:h-[1024px] h-[812px]">
      <div className="header-img relative md:min-h-[730px] min-h-[388px] w-screen">
        <Image
          src={header_img}
          alt="header-img"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div className="header-content w-full md:h-[294px] flex md:items-center md:gap-20 gap-5 md:mx-16 mx-5 flex-col md:flex-row">
        <div className="header-heading heading-1 max-w-[335px] md:max-w-[616px]">
          Welcome to My Creative Blogging Journey
        </div>
        <div className="right flex flex-col md:gap-8 gap-6">
          <div className="description body-text max-w-[335px] md:max-w-[616px]">
            Join me as I explore the world of travel, food, and lifestyle.
            Discover tips, stories, and inspiration to enhance your everyday
            adventures.
          </div>
          <div className="cta flex gap-4">
            <Button>Explore</Button>
            <Button variant={"outline"}>Latest</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Headersection;
