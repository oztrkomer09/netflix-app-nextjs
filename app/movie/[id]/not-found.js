import Link from "next/link";

function Movie404() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <h1 className="font-extrabold">
        We couldn't find the movie you are looking for!
      </h1>
      <Link className="underline mt-4" href={"/"}>
        Go to homepage
      </Link>
    </div>
  );
}

export default Movie404;
