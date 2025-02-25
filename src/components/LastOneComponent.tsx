import Button from "./ui/ButtonWhite";


export const LastOneComponent = () => {
  return (
    <div className="w-full h-[130vh] relative text-[rgba(248,247,245,1)]">
    <div className="w-full h-full relative">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="/images/lastPageVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center w-3/4 z-20 text-center">
      <div className="mb-4 text-lg md:text-xl lg:text-2xl font-semibold">
        Through the delicate dance of ink and paper, we will uncover the
        secrets of this ancient craft, transforming simple words into exquisite
        visual poetry.
      </div>
      <div className="mb-4 text-sm md:text-base lg:text-lg">
        Each session is designed not only to teach the technical skills of
        calligraphy but also to cultivate a deeper appreciation for the art
        form itself. You will learn to embrace the rhythm of your own unique
        style, allowing your personality to shine through every flourish and
        curve.
      </div>
      <div className="w-1/4 h-full">
        {/* <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
          Shop All
        </button> */}
        <Button href="/shop" text="Shop All" />
      </div>
    </div>
  </div>
  );
};
