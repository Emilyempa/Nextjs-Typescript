"use client";
import Link from "next/link";
import React from "react";
import ThemeController from "./ThemeController";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  return (
    <header>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link
                  href="/"
                  className={`${
                    pathname === "/"
                      ? "font-bold text-secondary"
                      : "text-secondary"
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/users"
                  className={`${
                    pathname === "/users"
                      ? "font-bold text-secondary"
                      : "text-secondary"
                  }`}
                >
                  Users
                </Link>
              </li>
            </ul>
          </div>
          <Link href="/" className="btn btn-ghost text-xl">
            NEXT App
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link
                href="/"
                className={`${
                  pathname === "/"
                    ? "font-bold text-secondary"
                    : "text-secondary"
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/users"
                className={`${
                  pathname === "/users"
                    ? "font-bold text-secondary"
                    : "text-secondary"
                }`}
              >
                Users
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <ThemeController />
        </div>
      </div>
    </header>
  );
};

export default Header;
