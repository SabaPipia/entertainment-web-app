import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import logo from "@/public/assets/logo.svg";
import Home from "@/public/assets/icon-nav-home.svg";
import Movie from "@/public/assets/icon-nav-movies.svg";
import Series from "@/public/assets/icon-nav-tv-series.svg";
import Bookmark from "@/public/assets/icon-nav-bookmark.svg";

import Avatar from "@/public/assets/image-avatar.png";
import { usePathname } from "next/navigation";

function Navigation() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("/home");
  useEffect(() => {
    setActiveSection(pathname);
  }, [pathname]);

  return (
    <div className="box-border h-screen p-3">
      <header className="bg-semiDarkBlue h-full flex flex-col p-5 rounded-2xl">
        <div className="mb-11 mx-auto">
          <Image src={logo} alt="logo" />
        </div>
        <div className="mb-auto">
          <ul className="flex flex-col gap-6 my-auto">
            <li className="mx-auto">
              <Link href="/home">
                <Image
                  src={Home}
                  alt="Home logo"
                  className={`${
                    activeSection === "/home" ? "brightness-[300]" : ""
                  } max-w-none w-6`}
                />
              </Link>
            </li>
            <li className="mx-auto">
              <Link href="/movies">
                <Image
                  src={Movie}
                  alt="Movie logo"
                  className={`${
                    activeSection === "/movies" ? "brightness-[300]" : ""
                  }  max-w-none w-6`}
                />
              </Link>
            </li>
            <li className="mx-auto">
              <Link href="/tv-series">
                <Image
                  src={Series}
                  alt="Series logo"
                  className={`${
                    activeSection === "/tv-series" ? "brightness-[300]" : ""
                  } max-w-none w-6`}
                />
              </Link>
            </li>
            <li className="mx-auto">
              <Link href="/bookmarks">
                <Image
                  src={Bookmark}
                  alt="Bookmark logo"
                  className={`${
                    activeSection === "/bookmarks" ? "brightness-[300]" : ""
                  } max-w-none w-6`}
                />
              </Link>
            </li>
          </ul>
        </div>
        <div className="border-2 border-white rounded-full">
          <Image src={Avatar} width={45} height={45} alt="avatar" />
        </div>
      </header>
    </div>
  );
}

export default Navigation;
