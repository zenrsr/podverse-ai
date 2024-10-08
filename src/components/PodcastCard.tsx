"use client";
import Image from "next/image";
import React from "react";
import { PodcastCardProps } from "../../types";
import { useRouter } from "next/navigation";

const PodcastCard = ({
  imgUrl,
  title,
  description,
  podcastId
}: PodcastCardProps) => {
  const router = useRouter();
  const handleViews = () => {
    router.push(`/podcasts/${podcastId}`);
  };

  return (
    <div className="cursor-pointer group" onClick={handleViews}>
      <figure className="flex flex-col gap-2">
        <div className=" overflow-hidden">
          <Image
            src={imgUrl}
            width={174}
            height={174}
            alt={title}
            className="aspect-square h-fit w-full rounded-xl 2xl:size-[200px] group-hover:scale-110 transtion-transform duration-300"
          />
        </div>
        <div className="flex flex-col">
          <h1 className="text-16 truncate font-bold text-white-1">{title}</h1>
          <h2 className="text-12 truncate font-normal capitalize text-white-4">
            {description}
          </h2>
        </div>
      </figure>
    </div>
  );
};

export default PodcastCard;
