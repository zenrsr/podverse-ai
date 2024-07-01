import React from "react";
import { EmptyStateProps } from "../../types";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const EmptyState = ({
  title,
  buttonLink,
  buttonText,
  search
}: EmptyStateProps) => {
  return (
    <section className="flex-center size-full flex-col gap-3">
      <Image
        src="/icons/emptystate.svg"
        width={250}
        height={250}
        alt="empty state"
      />
      <div className="flex-center w-full max-w-[254px] flex-col gap-3 ">
        <h1 className="text-16 tetx-center font-medium text-white-1">
          {title}
        </h1>
        {search && (
          <p className="text-16 text-center font-medium text-white-2">
            Try adjusting your search to find what you are looking for
          </p>
        )}

        {buttonLink && (
          <Button className="bg-green-1">
            <Link href={buttonLink} className="gap-1 flex">
              <Image
                src="/icons/discover.svg"
                width={20}
                height={20}
                alt="discover"
                className=""
              />
              <h1 className="text-16 font-bold text-black-1">{buttonText}</h1>
            </Link>
          </Button>
        )}
      </div>
    </section>
  );
};

export default EmptyState;
