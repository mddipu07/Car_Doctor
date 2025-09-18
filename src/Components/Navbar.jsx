"use client";
import Image from "next/image";
import NavImg from "@/assets/images/banner/logo.svg";
import Link from "next/link";
import React from "react";
import { signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const { data: session, status } = useSession();
  const pathname = usePathname();

  const navItems = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "My Bookings", path: "/my-bookings" },
  ];

  const navMenu = () =>
    navItems.map((item) => (
      <li key={item.path}>
        <Link
          href={item.path}
          className={`relative px-3 py-2 transition-all duration-300 ${
            pathname === item.path
              ? "text-primary font-bold after:w-full"
              : "text-gray-600 hover:text-primary after:w-0"
          } after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full`}
        >
          {item.title}
        </Link>
      </li>
    ));

  return (
    <div className="sticky top-0 z-50 bg-white/70 backdrop-blur-md shadow-md">
      <div className="navbar container mx-auto px-4">
        {/* Left side (Logo + Mobile Menu) */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-white/90 backdrop-blur-md rounded-box w-52"
            >
              {navMenu()}
            </ul>
          </div>
          <Link href={"/"} className="text-xl font-bold flex items-center">
            <Image src={NavImg} width={100} height={80} alt="Company Logo" />
          </Link>
        </div>

        {/* Center Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-3">{navMenu()}</ul>
        </div>

        {/* Right Side (Auth + Appointment) */}
        <div className="navbar-end space-x-4">
          {status === "authenticated" ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar ring-2 ring-primary"
              >
                <div className="w-10 rounded-full overflow-hidden">
                  <Image
                    src={session?.user?.image || "/default-avatar.png"}
                    width={40}
                    height={40}
                    alt="user-logo"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-3 shadow-xl menu menu-sm dropdown-content bg-white/90 backdrop-blur-md rounded-xl w-48"
              >
                <li className="font-semibold text-gray-700 mb-2">
                  {session?.user?.name || "User"}
                </li>
                <li>
                  <button
                    onClick={() => signOut()}
                    className="text-red-500 hover:bg-red-100 rounded-lg"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <>
              <Link
                className={`${
                  pathname === "/register"
                    ? "text-primary font-bold underline"
                    : "hover:text-primary"
                }`}
                href={"/register"}
              >
                Register
              </Link>
              <Link
                className={`${
                  pathname === "/login"
                    ? "text-primary font-bold underline"
                    : "hover:text-primary"
                }`}
                href={"/login"}
              >
                Login
              </Link>
            </>
          )}
          <Link
            href="/appointment"
            className="btn bg-gradient-to-r from-primary to-secondary text-white font-semibold shadow-lg border-none"
          >
            Appointment
          </Link>
        </div>
      </div>
    </div>
  );
}
