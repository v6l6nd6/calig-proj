import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import palmer3 from "../../public/images/palmer-3.jpg";
import palmer4 from "../../public/images/palmer-4.jpg";
import palmer5 from "../../public/images/palmer-5.jpg";
import palmer6 from "../../public/images/palmer-6.jpg";
import palmer7 from "../../public/images/palmer-7.jpg";

const collections = [
  {
    title: "SEMI-CUSTOM BRANDS",
    image: palmer3,
    image2:palmer4,
    height: "h-80",
    href:'/'
  },
  {
    title: "SHOWIT WEBSITE TEMPLATES",
    image: palmer4,
    image2:palmer3,
    height: "h-96",
    href:'/'
  },
  {
    title: "FLODESK EMAIL TEMPLATES",
    image: palmer5,
    image2:palmer6,
    height: "h-72",
    href:'/'
  },
  {
    title: "FLODESK EMAIL TEMPLATES",
    image: palmer6,
    image2:palmer5,
    height: "h-72",
    href:'/'
  },
  {
    title: "FLODESK EMAIL TEMPLATES",
    image: palmer7,
    image2:palmer4,
    height: "h-72",
    href:'/'
  },
  {
    title: "FLODESK EMAIL TEMPLATES",
    image: palmer3,
    image2:palmer7,
    height: "h-72",
    href:'/'
  },
  {
    title: "FLODESK EMAIL TEMPLATES",
    image: palmer4,
    image2:palmer5,
    height: "h-72",
    href:'/'
  },
  {
    title: "FLODESK EMAIL TEMPLATES",
    image: palmer5,
    image2:palmer6,
    height: "h-72",
    href:'/'
  },
  {
    title: "FLODESK EMAIL TEMPLATES",
    image: palmer6,
    image2:palmer7,
    height: "h-72",
    href:'/'
  },
  {
    title: "FLODESK EMAIL TEMPLATES",
    image: palmer7,
    image2:palmer3,
    height: "h-72",
    href:'/'
  },
  {
    title: "FLODESK EMAIL TEMPLATES",
    image: palmer4,
    image2:palmer5,
    height: "h-72",
    href:'/'
  },
  {
    title: "FLODESK EMAIL TEMPLATES",
    image: palmer3,
    image2:palmer7,
    height: "h-72",
    href:'/'
  },
];

export default function ShopByCollection() {
  return (
    <section className="text-center py-16">
      <h2 className="text-5xl font-serif uppercase">
        SHOP <span className="italic">by</span> COLLECTION
      </h2>
      <div className="max-w-screen-lg mx-auto p-4">
        <div className="grid grid-cols-3 gap-2">
          
{collections.map((src, index) => (
    index === -1 ? (
      <div key={index} className="w-full h-48 md:h-64 lg:h-80"></div>
    ) : (
      <div 
        key={index} 
        className={classNames(
          "relative w-full h-48 md:h-64 lg:h-80", 
          { "col-span-2": [3, 6, 10].includes(index) }
        )}
      >
        <Link href={src.href}>
        <Image 
                src={src.image} 
                alt={`Image ${index + 1}`} 
                layout="fill" 
                objectFit="cover" 
                className="rounded-lg transition-opacity duration-300 hover:opacity-0"
              />
              <Image 
                src={src.image2} 
                alt={`Hover Image ${index + 1}`} 
                layout="fill" 
                objectFit="cover" 
                className="rounded-lg absolute top-0 left-0 opacity-0 transition-opacity duration-300 hover:opacity-100"
              />
              </Link>
      </div>
    )
  ))}
        </div>
      </div>
    </section>
  );
}
