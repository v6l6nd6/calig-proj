import Image from "next/image";
import heart from "../../public/images/heart-1.png";
import spanLine from "../../public/images/line.svg";
import Button from "./ui/Button";


export const AfterFirstSwiperComponent = () => {
  return (
    <div className="relative w-full z-50 py-32 mt-[5vw] flex justify-center items-center">
    <div className="text-gray-800 font-light flex flex-col items-center justify-center w-[45vw] tb:w-[60%] lg:w-[40%] text-center break-words z-50">
      
      <div className="font-fontTerminaMedium text-[1.5vw] lg:text-lg uppercase font-semibold tracking-[0.2em] leading-loose">
      I believe in
      </div>
      
      <div className="font-DancingScript text-[5vw] lg:text-[3.5rem] leading-tight my-8 max-w-[600px] overflow-hidden">
        <i className="uppercase not-italic leading-[1.1] tracking-normal">
        transformative  {" "}
          <span className="font-fontMarcellus relative mx-1">
            power 
            <span>
              <Image
                alt="underline"
                src={spanLine}
                className="absolute bottom-0 left-0 w-full h-[2px]"
              />
            </span>
          </span> 
          of calligraphy to inspire creativity, 
          <span className="font-fontMarcellus mx-1 relative">
          foster mindfulness,{" "}
            <Image
              alt="heart"
              src={heart}
              className="absolute top-[-10px] right-[-10px] w-8 h-8"
            />
          </span>
          and cultivate a deeper connection to the beauty of <span className="font-seriouslyFont uppercase">written expression</span>.
        </i>
      </div>
      <Button href="/shop" text="Shop All" />
     
      
    </div>
  
    {/* <div className="absolute top-[5vw] left-[-3vw]  w-[20vw] lg:w-[15vw] rounded z-20 opacity-70">
      <Image alt="tulip" className="rounded-md" src={tulipa1} />
    </div>
    
    <div className="absolute bottom-[-3vw] tb:bottom-[10vw] right-[2vw] w-[20vw] lg:w-[15vw] opacity-90 rounded z-50">
      <Image alt="tulip" className="rounded-md" src={tulipa2} />
    </div> */}
  </div>
  
  );
};

      