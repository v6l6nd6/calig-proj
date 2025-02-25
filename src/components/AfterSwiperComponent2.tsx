import ButtonWhite from "./ui/ButtonWhite";

export const AfterSwiperComponent2 = () => {
  return (
    <div className="w-full h-[70vw] tb:h-screen flex tb:flex-col -z-10">
      <div className="w-1/2 tb:w-full h-full tb:h-1/2 relative ">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
        >
          <source src="/images/mainPageVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute tb:w-full tb:mt-[50vw] top-[1vw] tb:top-0 left-[3vw] tb:text-center tb:left-0 flex flex-col justify-center tb:items-center items-start text-[rgba(248,247,245,1)]">
          <div className="font-fontAchivo uppercase text-[2.5vw] tb:text-[5vw] text-left w-[75%]">
            Calligraphy is not just about writing. It is a transformative
            experience that enriches lives, fosters connections, and celebrates
            the beauty of human expression. Each stroke serves as a reminder
            that art can be a powerful catalyst for change, inspiring
            individuals to see the world—and themselves—in a new light.
          </div>
        </div>
      </div>
      <div className="w-1/2 tb:w-full h-full tb:h-1/2 bg-[rgba(32,32,32,1)] text-[rgba(255,255,255,1)] flex flex-col items-center justify-center text-center gap-y-[10vw]">
        <div className="w-[70%] flex flex-col justify-center items-center gap-6">
          <div className="font-fontAchivo uppercase text-[25px]">
            Elegant Expression
          </div>
          <div className="text-[16px] w-[70%]">
            Calligraphy is the art of transforming words into visual poetry,
            where each stroke becomes a reflection of the soul and a celebration
            of creativity
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="font-tekoFont text-[35px]">
            Ready to take the lesson?
          </div>
          <ButtonWhite href="/courses" text="let's go" />
        </div>
      </div>
    </div>
  );
};
