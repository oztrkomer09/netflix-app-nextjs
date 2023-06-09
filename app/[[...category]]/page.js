import HomeContainer from "@/containers/home";
import {
  getCategories,
  getPopularMovies,
  getSingleCategory,
  getTopRatedMovies,
} from "@/services/movie";

async function HomePage({ params }) {
  const [
    { results: topRatedMovies },
    { results: popularMovies },
    { genres: categories },
  ] = await Promise.all([
    getTopRatedMovies(),
    getPopularMovies(),
    getCategories(),
  ]);

  let selectedCategory;

  if (params.category?.length > 0) {
    const { results } = await getSingleCategory(params.category[0]);
    selectedCategory = results;
  }

  return (
    <HomeContainer
      categories={categories}
      popularMovies={popularMovies}
      topRatedMovies={topRatedMovies}
      selectedCategory={{
        id: params.category?.[0] ?? "",
        movies: selectedCategory ? selectedCategory.slice(7, 14) : [],
      }}
    />
  );
}

export default HomePage;
