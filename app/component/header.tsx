"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="h-15  ">
      <nav className="flex items-center justify-between px-5 py-3 lg:px-10  lg:py-2">
        <img
          src="/printforge-logomobile.svg"
          alt="logo"
          className="block md:hidden"
        />
        <img
          src="/printforge-logo.svg"
          alt="logo"
          className="hidden md:block"
        />
        <ul className="flex space-x-4 gap-6">
          <li>3D Modele</li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
