"use client";

import useAuth from "@/hooks/useAuth";
import useTheme from "@/hooks/useTheme";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaUserCircle } from 'react-icons/fa';
import userAvatar from "/public/user-avatar.png";

const Header = () => {
  const { user, logout } = useAuth();
  const { uid, displayName, photoURL } = user || {};

  // Hooks
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  // States
  const [navToggle, setNavToggle] = useState(false);

  // Logout functionality
  const handleLogout = async () => {
    await logout();
    toast.success("Logout Successfully!");
  };

  return (
    <header className="sticky top-0 z-50 xl:z-40 flex items-center bg-white justify-between dark:bg-slate-800">
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
        } top-[3.5rem] flex w-full flex-col bg-white dark:bg-slate-800 dark:text-slate-300 p-4 xl:p-3 transition-all duration-300 lg:static lg:w-[unset] lg:flex-row items-center gap-8 lg:bg-transparent font-semibold text-gray-500`}
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
        } top-[16.5rem] flex w-full bg-white dark:bg-slate-800 dark:text-slate-300 py-6 lg:p-4 transition-all duration-300 lg:static lg:w-[unset] justify-center items-center gap-4 lg:bg-transparent font-semibold text-gray-500`}
      >
        {/* Dark & Light Mood Starts */}
        <>
          <label className="swap swap-rotate lg:ml-2">
            <input
              onChange={toggleTheme}
              type="checkbox"
              checked={theme === "dark"}
            />
            <svg
              className="swap-on h-7 w-7 fill-current dark:text-slate-300"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>
            <svg
              className="swap-off h-7 w-7 fill-current dark:text-slate-300"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
        </>

        {uid ? (
          <div className="dropdown-end dropdown">
            <label tabIndex={0} className="btn-ghost btn-circle avatar btn">
              <div className="w-9 rounded-full">
                <Image
                  alt="user-logo"
                  title={displayName}
                  src={photoURL || userAvatar}
                  width={100}
                  height={100}
                  className="border-2 border-primary rounded-full"
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu-compact dropdown-content menu rounded-box mt-3 w-52 bg-base-100 p-2 shadow mx-auto"
            >
              <li className="mb-2 mt-1 text-center font-semibold">
                {displayName || "No user"}
              </li>
              <div className="divider my-0"></div>
              <div className="flex justify-evenly items-center">
              <li>
                <Link
                  href="/"
                  title="Profile"
                >
                  <FaUserCircle className="text-2xl"/>
                </Link>
              </li>
              <li className="">
                <button
                  onClick={handleLogout}
                  className="btn btn-info btn-sm bg-primary content-center text-white"
                >
                  Logout
                </button>
              </li>
              </div>
            </ul>
          </div>
        ) : (
          <>
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
          </>
        )}
      </nav>

      {/* Nav Menu for Mobile And Tablet */}
      <label className="swap-rotate swap btn-ghost btn-circle btn btn-sm mr-3 bg-white text-black lg:hidden">
        <input
          checked={navToggle}
          onChange={() => setNavToggle((pre) => !pre)}
          type="checkbox"
        />
        <svg
          className="swap-off fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 512 512"
        >
          <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
        </svg>
        <svg
          className="swap-on fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 512 512"
        >
          <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
        </svg>
      </label>
    </header>
  );
};

export default Header;
