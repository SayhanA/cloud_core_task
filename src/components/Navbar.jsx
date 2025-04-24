"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const navItems = [
    { href: "/products", label: "Products" },
    { href: "/order", label: "Order" },
  ];

  return (
    <nav>
      <div className="mx-auto container py-4 px-4 flex items-center lg:gap-10 gap-5">
        <Link href="/">
          <h2 className="text-xl font-bold">CloudCore</h2>
        </Link>
        <ul className="flex gap-5 items-center">
          {navItems.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={
                  pathname === href
                    ? "text-blue-600 font-semibold"
                    : "text-gray-600 font-semibold"
                }
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
