import Link from "next/link";
import React from "react";

export default function Footer({ href }: { href: string }) {
  return (
    <p className="text-sm text-center">
      {href === "login"
        ? "Already have an account? "
        : "Don't have an account? "}
      <Link className="text-customRed" href={`/Authentication/${href}`}>
        {href === "login" ? "Login" : "Sign Up"}
      </Link>
    </p>
  );
}
