"use client";

import Link from "next/link";
import Image from "next/image";
import { navItems } from "@/data/data";
import { RiCloseLine, RiMenuLine } from "@remixicon/react";
import { useState } from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const pathName = usePathname();

  return (
    <header className="border-primary-100 fixed top-0 left-0 z-40 w-full border-y bg-white py-4 lg:py-0">
      <div className="container flex items-center justify-between">
        <Link href={"/"}>
          <Image
            src={"/images/logo.png"}
            alt="logo image"
            width={167}
            height={43}
          />
        </Link>

        {/* Mobile */}
        <nav
          className={`absolute top-full left-0 -z-30 flex w-full -translate-y-[170%] items-center justify-center border-y border-b-gray-200 bg-white/60 backdrop-blur-2xl transition-transform lg:hidden ${isOpen ? "translate-y-0 transition-all duration-400" : ""}`}
        >
          <ul className="py-6 text-center">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className={`hover:text-primary-600 inline-block p-1.5 font-medium uppercase transition-colors ${pathName === item.href ? "text-primary-600" : ""}`}
                  onClick={handleClick}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-12">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className={`hover:border-primary-600 hover:text-primary-600 block border-b-[3px] border-white py-4 font-semibold transition-colors ${pathName === item.href ? "text-primary-600 border-primary-600!" : ""}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className="flex size-11 items-center justify-center rounded-lg border border-gray-300 transition-colors hover:bg-gray-100 focus:bg-gray-100 lg:hidden"
          onClick={handleClick}
        >
          {isOpen ? <RiCloseLine /> : <RiMenuLine />}
        </button>
      </div>
    </header>
  );
};

export default Header;
