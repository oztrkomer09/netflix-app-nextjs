import React from "react";
import Link from "next/link";
import Image from "next/image";

function MoviesSection({ title, movies }) {
  return (
    <div className="mt-9">
      <h3 className="mb-3 uppercase text-2xl tracking-tighter">{title}</h3>
      <div className="grid grid-cols-movies auto-rows-[320px] gap-6">
        {movies.map((movie) => (
          <div
            className="overflow-hidden rounded-lg relative shadow-[0_5px_10px_0px_rgba(0,0,0,0.5)] transition-all hover:z-10 hover:scale-125"
            key={movie.id}
          >
            <Link href={`/movie/${movie.id}`}>
              <Image
                fill
                unoptimized
                alt={movie.title}
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

// export { MoviesSectionLoading } from "./loading";
export { MoviesSection };
