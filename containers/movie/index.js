import { FeaturedMovie } from "@/components/featured-movie";

function MovieContainer({ movie }) {
  return (
    <div className="px-12">
      <FeaturedMovie movie={movie} isCompact={false} />
    </div>
  );
}

export default MovieContainer;
