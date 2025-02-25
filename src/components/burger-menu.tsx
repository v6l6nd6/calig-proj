"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import burgerMenuOpen from "../../public/images/burger-menu-1.svg";
import burgerMenuClose from "../../public/images/burger-menu-2.svg";
import linksToHref from "./linksToHref"; // Убедитесь, что linksToHref имеет правильный тип
import { SocialLinksComponent } from "./socialLinks";

// Тип для элементов linksToHref
type LinkItem = {
  id: number;
  to: string;
  name: string | React.ReactNode;
};

export const BurgerMenu: React.FC = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="hidden tb:block relative w-full h-full">
      <button
        onClick={() => setOpenMenu(!openMenu)}
        className="absolute right-0 top-0 z-20 w-10 h-10"
      >
        <Image
          src={burgerMenuOpen}
          className={`w-full h-full ${!openMenu ? "block" : "hidden"}`}
          alt="Open Menu"
        />
        <Image
          src={burgerMenuClose}
          className={`w-full h-full ${!openMenu ? "hidden" : "block"}`}
          alt="Close Menu"
        />
      </button>
      <div
        className={`fixed top-[5%] right-auto flex gap-y-6 flex-col text-3xl items-center w-full transform transition-transform duration-1000 ease-in-out mt-11 ${
          !openMenu ? "translate-x-full" : "translate-x-0"
        }`}
      >
        {linksToHref.map((item: LinkItem) => (
          <Link key={item.id} href={item.to}>
            {item.name}
          </Link>
        ))}
        <SocialLinksComponent />
      </div>
    </div>
  );
};