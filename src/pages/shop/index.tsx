import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FC } from "react";
import image1 from "../../../public/images/newPhoto/shop-image-1.jpg";
import image2 from "../../../public/images/newPhoto/shop-image-2.jpg";
import image3 from "../../../public/images/newPhoto/shop-image-3.jpg";
import image4 from "../../../public/images/newPhoto/shop-image-4.jpg";
import gifShop1 from "../../../public/images/shopVideo2.gif"; // Замените на правильный путь к GIF
import gifShop2 from "../../../public/images/shopVideo3.gif"; // Замените на правильный путь к GIF

interface Collection {
  title: string;
  image: StaticImageData;
  gif: StaticImageData; // Изменено на gif
  href: string;
  describe: string;
  id: number;
}

const collections: Collection[] = [
  {
    id: 1,
    title: "SEMI-CUSTOM BRANDS",
    image: image1,
    gif: gifShop1,
    href: "/",
    describe: "amet, neque odit ipsam, aliquam",
  },
  {
    id: 2,
    title: "SHOWIT WEBSITE TEMPLATES",
    image: image2,
    gif: gifShop2,
    href: "/",
    describe: "amet, neque odit ipsam, aliquam",
  },
  {
    id: 3,
    title: "FLODESK EMAIL TEMPLATES",
    image: image3,
    gif: gifShop1,
    href: "/",
    describe: "amet, neque odit ipsam, aliquam",
  },
  {
    id: 4,
    title: "FLODESK EMAIL TEMPLATES",
    image: image4,
    gif: gifShop2,
    href: "/",
    describe: "amet, neque odit ipsam, aliquam",
  }
];

const ShopPage: FC = () => {
  return (
    <div className="w-[90%] h-full mx-auto mb-[7vh]">
      <div className="flex flex-col justify-center items-center w-[50vw] mx-auto mb-10">
        <h1 className="text-[5vw] font-seriouslyFont">My Calligraphy Shop</h1>
        <p className="text-[1vw] font-mono w-3/4 text-center">
          Discover a curated collection of exquisite calligraphy art and tools,
          designed to inspire your creativity and elevate your writing
          experience. Embrace the beauty of handwritten expression today!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-full">
        {collections.map((src, index) => (
          <div
            key={index}
            className={`relative h-[40vw] overflow-hidden flex flex-col`}
          >
            <Link
              href={`/shop/${src.id}`}
              className="relative block w-full h-full"
            >
              {/* Сначала отображаем GIF */}
              <Image
                src={src.gif}
                alt={`GIF ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg transition-opacity duration-300 absolute top-0 left-0 w-full h-full"
              />
              {/* Изображение, которое будет отображаться при наведении */}
              <Image
                src={src.image}
                alt={`Image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg absolute top-0 left-0 opacity-0 transition-opacity duration-300 hover:opacity-100"
              />
            </Link>
            <Link
              href={`/shop/${src.id}`}
              className="flex items-center justify-between font-fontTerminaMedium uppercase text-[0.7vw] px-2 pt-1"
            >
              <div className="">{src.describe}</div>
              <div>Take a peek</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
