import MovieContainer from "@/containers/movie";
import { notFound } from "next/navigation";

const API_URL = "https://api.themoviedb.org/3/";

const getMovie = async (movieID) => {
  const res = await fetch(
    `${API_URL}/movie/${movieID}?api_key=${process.env.API_KEY}`
  );

  return res.json();
};

async function MoviePage({ params, searchParams }) {
  const movieDetail = await getMovie(params.id);
  if (!movieDetail) {
    notFound();
  }
  if (searchParams.error === "true") {
    throw new Error("Error happened");
  }

  return <MovieContainer movie={movieDetail} />;
}

export default MoviePage;
