"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="h-15  ">
      <nav className="flex items-center justify-between px-5 py-3 lg:px-10  lg:py-2">
      <Link href="/" className=" md:hidden"> <img
          src="/printforge-logomobile.svg"
          alt="logo"
          className="block md:hidden"
        /></Link> 
       <Link href="/" className="md:block"> <img
          src="/printforge-logo.svg"
          alt="logo"
          className="hidden md:block"
        /></Link>
        <ul className="flex space-x-4 gap-6">
          <li><Link href="/3d-models"  className="text-sm uppercase">3D Modele</Link></li>
          <li>
            <Link href="/about" className="text-sm uppercase">About</Link>
          </li>
          <li>
            <Link href="/posts" className="text-sm uppercase">Posts</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
