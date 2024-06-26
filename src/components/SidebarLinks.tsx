"use client";

import { Home, Search } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SidebarLink() {
  const pathname = usePathname();

  const activeLink = "bg-paper-400 text-white";
  const inactiveLink = "bg-transparent text-gray";
  const linkStyle =
    "flex items-center gap-4 px-2 py-3 rounded-md cursor-pointer  hover:text-white";

  return (
    <ul className="flex flex-col items-stretch w-full">
      <Link href="/">
        <li
          className={`${linkStyle} ${
            pathname === "/" ? activeLink : inactiveLink
          }`}
        >
          <Home size={20} />
          <span className="font-semibold hidden sm:block">Home</span>
        </li>
      </Link>

      <Link href="/search">
        <li
          className={`${linkStyle} ${
            pathname === "/search" ? activeLink : inactiveLink
          }`}
        >
          <Search size={20} />
          <span className="font-semibold hidden sm:block">Search</span>
        </li>
      </Link>
    </ul>
  );
}
