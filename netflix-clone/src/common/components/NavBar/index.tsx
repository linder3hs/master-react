"use client";
import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { items } from "./items";
import classNames from "classnames";
import { Toaster } from "sonner";
import { getDataFromTable } from "@/lib/supabase/client";
import { ProfileSupabase } from "@/common";
import { showToast } from "@/common/utils/toast";

export default function NavBar({id}: {id: string}) {
  const pathname = usePathname();

  const [isScroll, setIsScroll] = useState<boolean>(false);

  const [profiles, setProfiles] = useState<ProfileSupabase[]>([])

  const whileList = ["/", "/search"];

  const handleScrolling = useCallback(() => {
    setIsScroll(window.scrollY > 50);
  }, []);

  const handleFetchProfiles = async () => {
    const { data, error } = await getDataFromTable<ProfileSupabase>("profiles", "user_id", id);

    if (error) {
      showToast({ title: error.message, icon: "error" })
      return
    }

    console.log(data)
    setProfiles(data)
  }

  useEffect(() => {
    handleFetchProfiles();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScrolling);
  }, [handleScrolling]);

  return (
    <>
      {whileList.includes(pathname) && (
        <nav
          className={classNames(
            "flex items-center fixed z-10 gap-10 ps-5 md:ps-20 w-full transition-all duration-300",
            {
              "bg-netflix-color-dark": isScroll,
              "bg-transparent": !isScroll,
            }
          )}
        >
          <div>
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="logo"
                width={140}
                height={100}
              />
            </Link>
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
      <Toaster />
    </>
  );
}
