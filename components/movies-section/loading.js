import React from "react";
import Skeleton from "@/components/skeleton";

function MoviesSectionLoading() {
  return (
    <div className="mt-9 px-12 flex flex-col gap-5">
      <Skeleton width={128} height={36} />
      <div className="grid grid-cols-movies auto-rows-[320px] gap-6">
        {Array(5)
          .fill(null)
          .map((_, index) => (
            <Skeleton key={index} />
          ))}
      </div>
    </div>
  );
}

export default MoviesSectionLoading;
