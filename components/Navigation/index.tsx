import React, { useEffect, useState } from "react";
import { auth } from "@/firebase/firebase";
import { signOut } from "firebase/auth";
import { clearUser } from "@/store/authActions";
import { useDispatch } from "react-redux";
import { useRouter, usePathname } from "next/navigation";

import Link from "next/link";
import Image from "next/image";
import logo from "@/public/assets/logo.svg";
import Avatar from "@/public/assets/image-avatar.png";

function Navigation() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("/home");
  useEffect(() => {
    setActiveSection(pathname);
  }, [pathname]);
  const router = useRouter();
  const dispatch = useDispatch();
  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(clearUser());
        router.push("/Authentication/login");
      })
      .catch((err) => {});
  };
  return (
    <div className="box-border h-full p-3">
      <header className="bg-semiDarkBlue h-full flex flex-col p-5 rounded-2xl max-md:flex-row max-md:justify-between max-md:items-center">
        <div className="mb-11 mx-auto max-md:m-0">
          <Image src={logo} alt="logo" />
        </div>
        <div className="mb-auto max-md:my-auto">
          <ul className="flex flex-col gap-11 my-auto max-md:flex-row max-md:m-0 max-[400px]:gap-5">
            <li className="mx-auto scale-125">
              <Link href="/home">
                <svg
                  width="20"
                  height="20"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current text-[#5A698F] hover:text-[#FC4747] transition-colors"
                >
                  <path
                    d="M8 0H1C.4 0 0 .4 0 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11H1c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1ZM19 0h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1Z"
                    fill={`${activeSection === "/home" ? "#fff" : ""}`}
                  />
                </svg>
              </Link>
            </li>
            <li className="mx-auto scale-125">
              <Link href="/movies" className="group">
                <svg
                  width="20"
                  height="20"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current text-[#5A698F] hover:text-[#FC4747] transition-colors"
                >
                  <path
                    d="M16.956 0H3.044A3.044 3.044 0 0 0 0 3.044v13.912A3.044 3.044 0 0 0 3.044 20h13.912A3.044 3.044 0 0 0 20 16.956V3.044A3.044 3.044 0 0 0 16.956 0ZM4 9H2V7h2v2Zm-2 2h2v2H2v-2Zm16-2h-2V7h2v2Zm-2 2h2v2h-2v-2Zm2-8.26V4h-2V2h1.26a.74.74 0 0 1 .74.74ZM2.74 2H4v2H2V2.74A.74.74 0 0 1 2.74 2ZM2 17.26V16h2v2H2.74a.74.74 0 0 1-.74-.74Zm16 0a.74.74 0 0 1-.74.74H16v-2h2v1.26Z"
                    fill={`${activeSection === "/movies" ? "#fff" : ""}`}
                  />
                </svg>
              </Link>
            </li>
            <li className="mx-auto scale-125">
              <Link href="/tv-series">
                <svg
                  width="20"
                  height="20"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current text-[#5A698F] hover:text-[#FC4747] transition-colors"
                >
                  <path
                    d="M20 4.481H9.08l2.7-3.278L10.22 0 7 3.909 3.78.029 2.22 1.203l2.7 3.278H0V20h20V4.481Zm-8 13.58H2V6.42h10v11.64Zm5-3.88h-2v-1.94h2v1.94Zm0-3.88h-2V8.36h2v1.94Z"
                    fill={`${activeSection === "/tv-series" ? "#fff" : ""}`}
                  />
                </svg>
              </Link>
            </li>
            <li className="mx-auto scale-125">
              <Link href="/bookmarks">
                <svg
                  width="20"
                  height="20"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current text-[#5A698F] hover:text-[#FC4747] transition-colors"
                >
                  <path
                    d="M15.387 0c.202 0 .396.04.581.119.291.115.522.295.694.542.172.247.258.52.258.82v17.038c0 .3-.086.573-.258.82a1.49 1.49 0 0 1-.694.542 1.49 1.49 0 0 1-.581.106c-.423 0-.79-.141-1.098-.423L8.46 13.959l-5.83 5.605c-.317.29-.682.436-1.097.436-.202 0-.396-.04-.581-.119a1.49 1.49 0 0 1-.694-.542A1.402 1.402 0 0 1 0 18.52V1.481c0-.3.086-.573.258-.82A1.49 1.49 0 0 1 .952.119C1.137.039 1.33 0 1.533 0h13.854Z"
                    fill={`${activeSection === "/bookmarks" ? "#fff" : ""}`}
                  />
                </svg>
              </Link>
            </li>
          </ul>
        </div>
        <div
          className="border-2 border-white rounded-full w-11 max-md:h-full"
          onClick={userSignOut}
        >
          <Image src={Avatar} width={45} height={45} alt="avatar" />
        </div>
      </header>
    </div>
  );
}

export default Navigation;
