"use client";

import Image from "next/image";
import Link from "next/link";
import { links } from "@/lib/links";
import { IoCartOutline, IoSearch } from "react-icons/io5";
import { FaBars, FaRegHeart } from "react-icons/fa";
import { useState } from "react";

function Header() {
  // Menu Bar In Small Screens
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header>
      <div className="container">
        {/* Logo */}
        <Link href="/">
          <Image src="/logo.svg" alt="Logo" width={188} height={188} />
        </Link>

        {/* Nav Links (Iterate From => lib/links.ts) */}
        <ul
          className={`links ${
            showMenu ? "max-lg:!scale-100" : "max-lg:!scale-0"
          }`}
        >
          {links.map((link) => {
            return (
              <li key={link.id}>
                <Link href={link.path}>{link.name}</Link>
              </li>
            );
          })}
        </ul>

        {/* Nav Icons */}
        <ul className="nav-icons">
          <li>
            <IoSearch />
          </li>
          <li>
            <FaRegHeart />
          </li>
          <li>
            <IoCartOutline />
          </li>
          <li onClick={() => setShowMenu(!showMenu)} className="nav-menu">
            <FaBars />
          </li>
        </ul>
      </div>
    </header>
  );
}
export default Header;
