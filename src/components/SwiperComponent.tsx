import classNames from 'classnames';
import Link from 'next/link';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';







const images = [
    {name:"Patience",className:"font-fontDancing italic text-[100px] text-[rgba(32,32,32,1)] tracking-normal font-normal "},
    {name:"Aesthetics",className:"font-Triodion italic text-[100px] text-[rgba(32,32,32,1)] tracking-normal font-normal"},
    {name:"Dexterity",className:"font-tekoFont italic text-[100px] text-[rgba(32,32,32,1)] tracking-normal font-normal"},
    {name:"Heritage",className:"font-Pacifico italic text-[100px] text-[rgba(32,32,32,1)] tracking-normal font-normal"},
    {name:"Expression",className:"font-fontTerminaMedium italic text-[100px] text-[rgba(32,32,32,1)] tracking-normal font-normal"},
    
    // Добавьте пути остальных изображений
  ];
  



export const SwiperComponent = ()=>{
   
        return (
          
            <div className="w-full overflow-hidden flex relative mt-5">
            <Swiper
                modules={[Autoplay]}
                spaceBetween={30}
                slidesPerView={3} // Уменьшите значение
                slidesPerGroup={1} // Уменьшите значение
                autoplay={{
                    delay: 0, // Небольшая задержка для непрерывного перемещения
                    disableOnInteraction: false, // Не останавливаться при взаимодействии
                }}
                speed={4000} // Скорость анимации
                loop={true} // Бесконечный цикл
                freeMode={true} // Эффект плавного скольжения
            >
                {images.map((item) => (
                    <SwiperSlide key={item.name} className="relative w-full h-full flex items-center justify-center lowercase">
                        <Link href="/">
                            <div className={classNames(item.className, 'w-full text-center pb-3','tilted-border text-[4vw]')}>{item.name}</div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div> )
     
}