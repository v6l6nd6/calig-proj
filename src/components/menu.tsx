import classNames from "classnames";
import Link from "next/link";
import { BurgerMenu } from "./burger-menu";
import logo from "./ui/logo.png";
import LinksHref from "@/components/linksToHref"
import Image from "next/image";
import React from "react";



// Тип для элементов LinksHre

// Убедитесь, что LinksHref имеет правильный тип

export const MenuComponent: React.FC = () => {
  return (
    <div className="w-3/4 h-full font-fontTerminaDemi relative mx-auto mt-[1vw] sm:w-full tb:w-full">
    <div
      className={classNames(
        "flex justify-center w-full h-full uppercase text-sm leading-4 items-center gap-10",
        "tb:hidden p-1",
        "transform scale-y-0.75" // Уменьшаем высоту на 25%
      )}
    >
      {LinksHref.map((item, index) => {
        const isImagePosition = index === Math.floor(LinksHref.length / 2);
        return (
          <React.Fragment key={item.id}>
            {isImagePosition && (
              <div className="max-w-[10vw]">
                <Image src={logo} alt="Description" className="w-full h-full object-cover mt-[2vw]" />
              </div>
            )}
            <Link href={item.to} className="flex-1 text-center">
              {item.name}
            </Link>
          </React.Fragment>
        );
      })}
      
    </div>
    <BurgerMenu />
  </div>
  );
};
