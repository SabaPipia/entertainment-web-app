import Link from "next/link";
import React from "react";

function Error() {
  return (
    <div className="w-screen h-screen text-white flex justify-center items-center flex-col">
      <h1 className="text-[15rem] text-white leading-[13rem] max-[580px]:text-[9rem]">
        404
      </h1>
      <p className="text-xl max-[444px]:text-sm">
        Sorry, we were unable to find that page
      </p>
      <p className="mt-4">
        Start from{" "}
        <Link className="underline hover:text-[#FC4747]" href="/home">
          home page
        </Link>
      </p>
    </div>
  );
}

export default Error;
