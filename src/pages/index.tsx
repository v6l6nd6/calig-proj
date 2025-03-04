'use client';

import { AfterFirstSwiperComponent } from "@/components/AfterSwiperComponent";
import { AfterSwiperComponent2 } from "@/components/AfterSwiperComponent2";
import { LastOneComponent } from "@/components/LastOneComponent";
import ShopByCollection from "@/components/ShopByCollection";
import { SwiperComponent } from "@/components/SwiperComponent";
import classNames from "classnames";
import { useEffect, useState } from "react";

const MainComponent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Пример кода для установки isVisible после определенного условия
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000); // Задержка в 1 секунду для демонстрации

    return () => clearTimeout(timer); // Очистка таймера при размонтировании
  }, []);

  return (
    <div className="w-full h-full overflow-hidden">
      <div className="relative h-[2100px] w-full overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          preload="auto" // Оптимизация загрузки видео
          aria-label="Background video of calligraphy art"
        >
          <source src="/images/mainPageVideo1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div
          className={classNames(
            "absolute top-1/3 left-1/2 transform -translate-x-1/2 text-white text-center transition-opacity duration-[1100ms]",
            isVisible ? "opacity-100" : "opacity-0"
          )}
        >
          <h2 className="text-lg font-fontTerminaMedium leading-[40px] uppercase">
            Welcome to the Art of Calligraphy: A Transformative Journey Where Every Stroke Tells a Story, Each Letter Reflects Your Unique Essence, and Creativity Flourishes in Every Expression
          </h2>
        </div>
      </div>
      <SwiperComponent />
      <AfterFirstSwiperComponent />
      <AfterSwiperComponent2 />
      <ShopByCollection />
      <LastOneComponent />
    </div>
  );
};

export default MainComponent;