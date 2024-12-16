"use client";

import Link from "next/link";

export function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden px-6 py-24 text-teal-950 sm:py-32 lg:px-8">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl md:text-8xl">
          Host AMAs with
          <br />
          <span className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent">
            zero friction
          </span>
        </h1>

        <p className="mt-12 text-lg leading-8 text-gray-600">
          Create engaging AMA sessions in seconds.
          <br />
          Share the link, answer top questions, done.
        </p>
      </div>

      <div className="mt-6  md:mt-8">
        <Link href="api/auth/signin?callbackUrl=%2Fdashboard">
          <button
            className="relative z-30 box-border flex cursor-pointer items-center justify-center overflow-hidden rounded-md bg-gradient-to-r from-cyan-500 to-teal-500 px-8 py-3 font-bold text-white ring-1 ring-cyan-400 ring-offset-2 ring-offset-indigo-200 transition-all duration-300 hover:ring-offset-cyan-500 focus:outline-none"
            type="button"
          >
            <span className="absolute bottom-0 right-0 -mb-8 -mr-5 h-20 w-8 translate-x-1 rotate-45 transform bg-white opacity-10 transition-all duration-300 ease-out group-hover:translate-x-0" />
            <span className="absolute left-0 top-0 -ml-12 -mt-1 h-8 w-20 -translate-x-1 -rotate-45 transform bg-white opacity-10 transition-all duration-300 ease-out group-hover:translate-x-0" />
            <span className="relative z-20 flex items-center text-sm">
              <svg
                className="relative mr-2 h-5 w-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
              <p className="md:text-lg">Sign Up</p>
            </span>
          </button>
        </Link>

        <p className="mt-2 text-sm text-gray-400">No credit card required</p>
      </div>
    </section>
  );
}
