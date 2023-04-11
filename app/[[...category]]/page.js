import HomeContainer from "@/containers/home";
import Movies from "@/mocks/movies.json";

const API_URL = "https://api.themoviedb.org/3/";

const getTopRatedMovies = async () => {
  const res = await fetch(
    `${API_URL}/movie/top_rated?api_key=${process.env.API_KEY}&page=1`
  );

  return res.json();
};

const getPopularMovies = async () => {
  const res = await fetch(
    `${API_URL}/movie/popular?api_key=${process.env.API_KEY}&page=1`
  );

  return res.json();
};

async function HomePage({ params }) {
  const topRatedPromise = getTopRatedMovies();
  const popularPromise = getPopularMovies();

  const [{ results: topRatedMovies, results: popularMovies }] =
    await Promise.all([topRatedPromise, popularPromise]);

  let categorySelected;

  if (params.category?.length > 0) {
    categorySelected = true;
  }
  return (
    <HomeContainer
      popularMovies={popularMovies}
      topRatedMovies={topRatedMovies}
      selectedCategory={{
        id: params.category?.[0] ?? "",
        movies: categorySelected ? Movies.results.slice(0, 7) : [],
      }}
    />
  );
}

export default HomePage;
