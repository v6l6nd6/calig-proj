import classNames from "classnames";
import Link from "next/link";

import Links from "./linksToHref";
import { SocialLinksComponent } from "./socialLinks";

export const FooterComponent = () => {
  return (
    <div className="border-y-[1px] border-[rgba(255,255,255,0.6)] relative w-full h-[25vh] tb:h-[65vw] uppercase grid grid-rows-1 grid-cols-3 tb:grid-cols-1 tb:grid-rows-[1fr,3fr,1fr] bg-[rgba(32,32,32,1)] text-[rgba(248,247,245,1)] font-fontTerminaDemi font-normal text-[9px]">
      <div className="flex flex-col tb:flex-row tb:flex-wrap tb:gap-y-[5vw] tb:gap-x-3 items-center justify-center gap-y-3 tb:pt-2">
        {Links.map((linkItem) => (
          <Link
            key={linkItem.id}
            href={linkItem.to}
            className={classNames(
              "transition duration-200 ease-in-out",
              linkItem.id === 3 &&
                "tb:order-last tb:w-full tb:justify-center tb:flex tb:items-center",
              "hover:text-gray-700 hover:bg-opacity-50"
            )}
          >
            {linkItem.name}
          </Link>
        ))}
      </div>

      <div className="w-full h-full flex flex-col items-center tb:grid tb:grid-cols-1 tb:grid-rows-3 border-x-[1px] border-[rgba(255,255,255,0.6)]">
        <div className="w-full h-[9vh] tb:h-7">
          <SocialLinksComponent />
        </div>

        {/* <div className="relative overflow-hidden h-full w-full grid grid-cols-3 tb:grid-cols-1 tb:grid-rows-3 gap-5 px-1 border-y-[1px] tb:border-0 border-[rgba(255,255,255,0.6)] rounded-full">
        {instPhotoArray.map((item, index) => (
          <Link
            key={index}
            href="https://www.instagram.com/"
            className="w-full h-full relative flex mx-auto my-auto"
          >
            <Image
              className="w-full h-full absolute top-0 left-0 object-cover"
              alt="logo"
              src={item.photo}
            />
          </Link>
        ))}
      </div> */}

        <div className="font-fontAchivo flex justify-center items-center text-[7px] tb:text-[5px] w-full h-20 tb:h-7">
          <Link href="/faq">&copy; 2018-2024 Scheffer Designs, Inc.</Link>
          <Link href="/faq">Terms and Conditions</Link>
          <Link href="/faq">PRIVACY POLICY</Link>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center tb:h-9 tb:justify-end">
        <Link href="/faq">FAQ</Link>
        <Link href="/contactus">CONTACT US</Link>
      </div>
    </div>
  );
};
