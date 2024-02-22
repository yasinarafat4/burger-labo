"use client"

import Link from "next/link";
import { useState } from "react";

const Header = () => {
// States
  const [navToggle, setNavToggle] = useState(false);
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between">
      <Link className="text-primary font-semibold text-2xl" href="">
        BurgerLabo
      </Link>
      <nav className={`absolute ${
          navToggle ? "left-0" : "left-[-120%]"
        } top-[4rem] flex w-full flex-col bg-white pb-3 pt-2 transition-all duration-300 lg:p-4 lg:static lg:w-[unset] lg:flex-row items-center gap-8 lg:bg-transparent font-semibold text-gray-500`}
      >
        <Link href={" "}>Home</Link>
        <Link href={" "}>Menu</Link>
        <Link href={" "}>About</Link>
        <Link href={" "}>Contact</Link>
        <Link
          className="bg-primary px-8 py-2 text-white rounded-full"
          href={" "}
        >
          Login
        </Link>
      </nav>
      <label className="swap-rotate swap btn-ghost btn-circle btn ml-2 bg-white lg:hidden">
        <input
          checked={navToggle}
          onChange={() => setNavToggle((pre) => !pre)}
          type="checkbox"
        />
        <svg
          className="swap-off fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 512 512"
        >
          <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
        </svg>
        <svg
          className="swap-on fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 512 512"
        >
          <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
        </svg>
      </label>
    </header>
  );
};

export default Header;
