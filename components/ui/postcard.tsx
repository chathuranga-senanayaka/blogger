import React from "react";
import Image, { StaticImageData } from "next/image";

interface PostcardProps {
  title: string;
  description: string;
  image: StaticImageData; // Ensure correct type for imported images
}

const Postcard: React.FC<PostcardProps> = ({ title, description, image }) => {
  return (
    <div className="wrapper md:max-w-[404px] md:min-h-[404px] flex flex-col gap-8">
      <div className="img md:min-w-full md:min-h-[240px] relative">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div className="content flex flex-col gap-6">
        <div className="card-title heading-4">{title}</div>
        <div className="description body-text-normal">{description}</div>
      </div>
    </div>
  );
};

export default Postcard;
