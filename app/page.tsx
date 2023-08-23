"use client";

import { useRouter } from "next/navigation";
export default function Home() {
  // TODO: Check if the user is authenticated before redirecting
  const router = useRouter();
  router.push("/Authentication/login");
  return <main></main>;
}
