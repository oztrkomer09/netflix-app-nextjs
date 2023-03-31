import HomeContainer from "@/containers/home";
import Movies from "@/mocks/movies.json";

async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function HomePage({ params }) {
  await delay(2000);

  let categorySelected;

  if (params.category?.length > 0) {
    categorySelected = true;
  }
  return (
    <HomeContainer
      selectedCategory={{
        id: params.category?.[0] ?? "",
        movies: categorySelected ? Movies.results.slice(0, 7) : [],
      }}
    />
  );
}

export default HomePage;
