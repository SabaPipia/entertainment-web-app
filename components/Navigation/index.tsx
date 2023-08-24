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
    <header className="flex bg-semiDarkBlue justify-between p-4">
      <div className="my-auto">
        <Image src={logo} alt="logo" />
      </div>
      <div className="my-auto">
        <ul className="flex gap-4">
          <li>
            <Link href="/home">
              <Image
                src={Home}
                alt="Home logo"
                className={`${
                  activeSection === "/home" ? "brightness-[300]" : ""
                }`}
              />
            </Link>
          </li>
          <li>
            <Link href="/movies">
              <Image
                src={Movie}
                alt="Movie logo"
                className={`${
                  activeSection === "/movies" ? "brightness-[300]" : ""
                }`}
              />
            </Link>
          </li>
          <li>
            <Link href="/tv-series">
              <Image
                src={Series}
                alt="Series logo"
                className={`${
                  activeSection === "/tv-series" ? "brightness-[300]" : ""
                }`}
              />
            </Link>
          </li>
          <li>
            <Link href="/bookmarks">
              <Image
                src={Bookmark}
                alt="Bookmark logo"
                className={`${
                  activeSection === "/bookmarks" ? "brightness-[300]" : ""
                }`}
              />
            </Link>
          </li>
        </ul>
      </div>
      <div className="border-2 border-white rounded-full">
        <Image src={Avatar} width={45} height={45} alt="avatar" />
      </div>
    </header>
  );
}

export default Navigation;
