"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Header = () => {
  const pathname = usePathname();
  // States
  const [navToggle, setNavToggle] = useState(false);
  return (
    <header className="sticky top-0 z-50 xl:z-40 flex items-center bg-white justify-between">
      <Link
        className="text-primary font-semibold text-3xl ps-3 py-4 lg:hidden"
        onClick={() => setNavToggle(false)}
        href="/"
      >
        BurgerLabo
      </Link>
      <nav
        className={`absolute ${
          navToggle ? "left-0" : "left-[-120%]"
        } top-[3.5rem] flex w-full flex-col bg-white p-4 xl:p-3 transition-all duration-300 lg:static lg:w-[unset] lg:flex-row items-center gap-8 lg:bg-transparent font-semibold text-gray-500`}
      >
        <Link
          className="text-primary font-semibold text-3xl ps-3 py-4 hidden lg:block"
          onClick={() => setNavToggle(false)}
          href="/"
        >
          BurgerLabo
        </Link>
        <Link
          className={`${
            pathname === "/"
              ? "text-primary"
              : "hover:text-primary duration-300"
          }`}
          onClick={() => setNavToggle(false)}
          href={"/"}
        >
          Home
        </Link>
        <Link
          className={`${
            pathname === "/menu"
              ? "text-primary"
              : "hover:text-primary duration-300"
          }`}
          onClick={() => setNavToggle(false)}
          href={"/menu"}
        >
          Menu
        </Link>
        <Link
          className={`${
            pathname === "/about"
              ? "text-primary"
              : "hover:text-primary duration-300"
          }`}
          onClick={() => setNavToggle(false)}
          href={"/about"}
        >
          About
        </Link>
        <Link
          className={`${
            pathname === "/contact"
              ? "text-primary"
              : "hover:text-primary duration-300"
          }`}
          onClick={() => setNavToggle(false)}
          href={"/contact"}
        >
          Contact
        </Link>
      </nav>
      <nav
        className={`absolute ${
          navToggle ? "left-0" : "left-[-120%]"
        } top-[16.5rem] flex w-full bg-white py-6 lg:p-4 transition-all duration-300 lg:static lg:w-[unset] justify-center items-center gap-4 lg:bg-transparent font-semibold text-gray-500`}
      >
        <Link onClick={() => setNavToggle(false)} href={"/login"}>
          Login
        </Link>
        <Link
          className="bg-primary text-sm px-6 py-2 text-white rounded-full"
          onClick={() => setNavToggle(false)}
          href={"/register"}
        >
          Register
        </Link>
      </nav>

      <label className="swap-rotate swap btn-ghost btn-circle btn bg-white lg:hidden">
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
