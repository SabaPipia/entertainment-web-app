import Link from "next/link";
import React from "react";

export default function Footer({ href }: { href: string }) {
  return (
    <p className="text-sm text-center">
      Already have an account?{" "}
      <Link className="text-customRed" href={href}>
        Login
      </Link>
    </p>
  );
}
