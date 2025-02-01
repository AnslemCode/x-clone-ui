import React from "react";
import Image from "./Image";
import PopularTopic from "./PopularTopic";
import Link from "next/link";

const PopularTags = () => {
  return (
    <div className="p-4 rounded-2xl border-[1px] border-borderGray flex flex-col gap-4">
      <h1 className="text-xl font-bold text-textGrayLight">What's happening</h1>
      {/* TREND EVENT */}
      <div className="flex gap-4">
        <div className="relative w-20 h-20 rounded-xl overflow-hidden">
          <Image
            path="general/avatar.png"
            alt="event"
            w={120}
            h={120}
            tr={true}
          />
        </div>
        <div className="flex-1">
          <h1 className="font-bold text-textGrayLight">
            Next js 16 announcement
          </h1>
          <span className="text-sm text-textGray">Happening now</span>
        </div>
      </div>

      {/* TOPIC */}

      <PopularTopic />
      <PopularTopic />
      <PopularTopic />
      <Link href="/" className="text-iconBlue text-xs">
        Show More
      </Link>
    </div>
  );
};

export default PopularTags;
