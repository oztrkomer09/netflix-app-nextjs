import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaPlus } from "react-icons/fa";

function FeaturedMovie({ movie = {}, isCompact = true }) {
  const { poster_path, title, overview } = movie;

  return (
    <div className="flex flex-col gap-6 my-14">
      <h1 className="text-7xl uppercase tracking-[-1px] font-black leading-[72px] max-w-[25ch]">
        {title}
      </h1>
      <p className="text-2xl max-w-[50ch]">{overview}</p>
      <div className="flex gap-3">
        <Link
          className="flex items-center justify-center bg-[#eee] text-[#222] w-[300px] rounded-full text-xl font-bold"
          href={`/movie/${movie.id}`}
        >
          Play
        </Link>
        <button className="flex items-center justify-center border-2 border-[#eee] rounded-full w-16 h-16 text-[#eee]">
          <FaPlus />
        </button>
      </div>
      <div>
        <div className="absolute top-0 right-0 left-0 bottom-0 -z-10 bg-gradient-to-t from-[#000000] via-[#0000008a] to-[#00000000]"></div>
        <Image
          unoptimized
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt={title}
          className="h-auto -z-20 max-h-screen object-cover"
          fill
        />
      </div>
    </div>
  );
}

// export { FeatureMovieLoading } from "./loading";
export { FeaturedMovie };
