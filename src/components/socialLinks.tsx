import Image from "next/image"
import Link from "next/link"
import React from "react"
import socialMedia from "./LinksToSocMed"


export const SocialLinksComponent = () => {
    return (
      <div className={`flex items-center justify-center h-full w-full gap-3`}>
        {socialMedia.map((item) => (
          <Link key={item.id} href={item.link} className="flex items-center justify-center">
            <Image src={item.icon} alt={item.name} className="w-[1.5vw] h-[1.5vw] tb:w-[20px] tb:h-[20px]" /> {/* Уменьшите размеры иконок */}
          </Link>
        ))}
      </div>
    );
  };

