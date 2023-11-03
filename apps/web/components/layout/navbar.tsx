"use client";

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "ui";

function Navbar() {
  const pathname = usePathname();
  const { status } = useSession();

  const isAuth = status === "authenticated";

  return (
    <nav className="animate-fade-in-down flex h-[8vh] items-center justify-between p-4">
      <Link className="flex h-full items-center" href="/">
        <Image
          alt="upup-logo"
          className="h-full w-auto object-contain"
          height={0}
          priority
          src="/logo.png"
          unoptimized
          width={0}
        />
        <h2 className="bg-gradient-to-t from-teal-500 to-cyan-500 bg-clip-text text-2xl font-extrabold text-transparent md:text-4xl">
          upup
        </h2>
      </Link>
      <ul className="flex items-center justify-between gap-4">
        {!isAuth ? (
          <li className="">
            <Link href="api/auth/signin">
              <Button className="rounded-lg p-2 font-bold">Sign In</Button>
            </Link>
          </li>
        ) : null}
        {isAuth ? (
          <>
            <li>
              <Link
                className={`md:text-lg
                  ${
                    pathname === "/dashboard"
                      ? "font-bold text-cyan-500 underline"
                      : ""
                  }
                `}
                href="/dashboard"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <button
                className="rounded-lg font-bold md:text-lg"
                onClick={() => {
                  void signOut();
                }}
                type="button"
              >
                Sign Out
              </button>
            </li>
          </>
        ) : null}
      </ul>
    </nav>
  );
}

export default Navbar;