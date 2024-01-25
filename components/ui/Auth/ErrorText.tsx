import React from "react";

export default function ErrorText({
  complete,
  error,
}: {
  complete: string;
  error: string;
}) {
  return (
    <p
      className={`${
        complete ? "text-customGreen" : "text-customRed"
      } text-xs text-center`}
    >
      {complete || error}
    </p>
  );
}
