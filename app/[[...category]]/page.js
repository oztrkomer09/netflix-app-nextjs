import HomeContainer from "@/containers/home";
import Movies from "@/mocks/movies.json";

export default function Home({ params }) {
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
