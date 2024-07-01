"use client";
import { SignedIn, UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Carousel from "./Carousel";
import Header from "./Header";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useRouter } from "next/navigation";
import LoaderSpinner from "./LoaderSpinner";
import { cn } from "@/lib/utils";
import { useAudio } from "../../providers/AudioProvider";

const RightSidebar = () => {
  const { user } = useUser();
  const router = useRouter();
  const topPodcasters = useQuery(api.users.getTopUserByPodcastCount);
  const { audio } = useAudio();

  if (!topPodcasters) return <LoaderSpinner />;

  return (
    <section
      className={cn("right_sidebar h-[calc(100vh-5px]", {
        "h-[calc(100vh-140px)]": audio?.audioUrl
      })}
    >
      <SignedIn>
        <Link href={`/profile/${user?.id}`} className="flex gap-3 pb-12 group">
          <UserButton />
          <div className="flex w-full items-center justify-between">
            <h1 className="text-18 truncate text-white-1 font-semibold items-center">
              {user?.fullName}
            </h1>
            <Image
              src="/icons/right-arrow.svg"
              alt="arrow"
              width={24}
              height={24}
              className="group-hover:translate-x-1 transition-all duration-150 "
            />
          </div>
        </Link>
      </SignedIn>
      <section>
        <Header title="Fans Like You" />
        <Carousel fansLikeDetail={topPodcasters!} />
      </section>
      <section className="flex flex-col gap-8 pt-12">
        <Header title="Top Podcasters" />
        <div className="flex flex-col gap-6 ">
          {topPodcasters?.slice(0, 4).map((podcaster) => (
            <div
              key={podcaster._id}
              className="flex cursor-pointer justify-between"
              onClick={() => router.push(`/profile/${podcaster.clerkId}`)}
            >
              <figure className="flex items-center gap-2">
                <Image
                  src={podcaster.imageUrl}
                  alt="avatar"
                  width={44}
                  height={44}
                  className="aspect-square rounded-lg"
                />
                <h2 className="text-14 font-semibold text-white-1 text-overflow">
                  {podcaster?.name}
                </h2>
              </figure>
              <div className="flex items-center justify-center gap-2">
                <p className="text-12 font-normal flex items-center justify-center">
                  {/* {podcaster?.totalPodcasts > 1
                    ? `${podcaster?.totalPodcasts} podcasts`
                    : `${podcaster?.totalPodcasts} podcast`} */}
                  {`${podcaster?.totalPodcasts} podcast${podcaster?.totalPodcasts !== 1 ? "s" : ""}`}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default RightSidebar;
