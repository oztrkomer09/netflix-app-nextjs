import Movies from "@/mocks/movies.json";
import Genres from "@/mocks/genres.json";
import { Categories } from "@/components/categories-section";
import { FeaturedMovie } from "@/components/featured-movie";
import { MoviesSection } from "@/components/movies-section";

function HomeContainer({
  topRatedMovies = [],
  popularMovies = [],
  selectedCategory,
}) {
  return (
    <div className="px-12">
      <FeaturedMovie movie={Movies.results[0]} />
      <Categories categories={Genres.genres.slice(0, 5)} />
      {selectedCategory.movies.length > 0 && (
        <MoviesSection
          title={
            Genres.genres.find((genre) => `${genre.id}` === selectedCategory.id)
              ?.name
          }
          movies={selectedCategory.movies}
        />
      )}
      <MoviesSection
        title="Top Rated Films"
        movies={topRatedMovies.slice(1, 7)}
      />
      <MoviesSection
        title="Popular Films"
        movies={popularMovies.slice(7, 13)}
      />
    </div>
  );
}

export default HomeContainer;
