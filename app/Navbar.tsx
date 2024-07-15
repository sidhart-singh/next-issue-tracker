"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiSolidBug } from "react-icons/bi";
import classNames from "classnames";

const Navbar = () => {
  const currentPath = usePathname();

  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues/list" },
  ];

  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href={"/"}>
        <BiSolidBug size={"30"} />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link, i) => (
          <li key={i}>
            <Link
              href={link.href}
              className={classNames(
                { "text-zinc-900": link.href === currentPath },
                { "text-zinc-500": link.href !== currentPath },
                { "hover:text-zinc-800 transition-colors": true }
              )}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
