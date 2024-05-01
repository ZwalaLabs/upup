"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "ui";
import { Ama } from "@/routes";

function Navbar() {
  const pathname = usePathname();
  const { status } = useSession();

  const isAuth = status === "authenticated";

  return (
    <nav className="animate-fade-in-down flex h-[8vh] items-center justify-between p-4">
      <Link
        className="flex h-full items-center"
        href={isAuth ? "/dashboard" : "/"}
      >
        <Image
          alt="upup-logo"
          className="h-full w-auto object-contain"
          height={0}
          priority
          src="/logo.png"
          unoptimized
          width={0}
        />

        <h2 className="hidden bg-gradient-to-t from-teal-500 to-cyan-500 bg-clip-text text-2xl font-extrabold text-transparent sm:block md:text-4xl">
          upup
        </h2>
      </Link>
      <ul className="flex items-center justify-between gap-4">
        <li>
          <Ama.Link className="transition-colors hover:text-cyan-500 md:text-lg">
            <Button
              className={`rounded-lg p-2 font-bold underline-offset-4 hover:underline ${
                pathname === "/ama" ? "underline" : ""
              }`}
              variant="secondary"
            >
              Join Room
            </Button>
          </Ama.Link>
        </li>

        {!isAuth ? (
          <li>
            <Button
              className="rounded-lg p-2 font-bold"
              onClick={() => {
                void signIn("", { callbackUrl: "/dashboard" });
              }}
            >
              Sign In
            </Button>
          </li>
        ) : null}

        {isAuth ? (
          <>
            <li>
              <Link
                className={`underline-offset-4 transition-colors hover:text-cyan-500 hover:underline md:text-lg
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
                className="rounded-lg font-bold transition-colors hover:text-cyan-500 md:text-lg"
                onClick={() => {
                  void signOut({ callbackUrl: "/" });
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
