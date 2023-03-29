"use client";
import Link from "next/link";

function Error() {
  return (
    <div className="h-[515px] flex flex-col justify-center items-center">
      <h1 className="font-extrabold">An error has occured. Sorry for that!</h1>
      <Link className="underline mt-4" href={"/"}>
        Go to homepage
      </Link>
    </div>
  );
}

export default Error;
