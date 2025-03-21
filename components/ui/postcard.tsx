import React from "react";
import post_img from "@/public/header_img.png";
import Image from "next/image";
import { postData } from "@/db/post";

const Postcard = () => {
  return (
    <div className="wrapper md:max-w-[404px] md:min-h-[404px] flex flex-col gap-8">
      <div className="img md:min-w-full md:min-h-[240px] relative">
        <Image
          src={post_img}
          alt="header-img"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div className="content flex flex-col gap-6">
        <div className="card-title heading-4">{postData.posts.title}</div>
        <div className="description body-text-normal">
          Join us on our journeys to breathtaking destinations.
        </div>
      </div>
    </div>
  );
};

export default Postcard;
