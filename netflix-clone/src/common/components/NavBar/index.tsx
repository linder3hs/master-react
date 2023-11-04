"use client";
import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { items } from "./items";
import classNames from "classnames";

export default function NavBar() {
  const pathname = usePathname();

  const [isScroll, setIsScroll] = useState(false);

  const whileList = ["/", "/search"];

  const handleScrolling = useCallback(() => {
    setIsScroll(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScrolling);
  }, [handleScrolling]);

  return (
    <>
      {whileList.includes(pathname) && (
        <nav
          className={classNames(
            "flex items-center fixed z-10 gap-10 ps-20 w-full transition-all duration-300",
            {
              "bg-netflix-color-dark": isScroll,
              "bg-transparent":
                !isScroll,
            }
          )}
        >
          <div>
            <Image src="/images/logo.png" alt="logo" width={140} height={100} />
          </div>
          <ul className="flex gap-5">
            {items.map((item) => (
              <li key={item.text}>
                <Link href={item.href} className="text-xs font-light">
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
}
