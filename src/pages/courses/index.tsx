import Image from "next/image";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import Link from "next/link";
import events from "@/components/ui/eventsArray"

const CoursesPage = () => {
  return (
    <div className="mb-20 w-3/4 h-full mx-auto">
      <div className="grid grid-flow-row gap-y-10">
        {events.map(event => {
          const isAvailable = event.id === 1; // Проверяем доступность события
          return (
            <div
              key={event.id}
              className={`relative group grid grid-cols-[4fr,6fr] gap-x-5 grid-rows-1 h-[20vw] tb:h-[25vw] sm:h-[30vw] overflow-hidden text-[#433f3d] bg-[#fff3e2cb] rounded-md transition-transform duration-1000 ${isAvailable ? '' : 'opacity-50 cursor-not-allowed'}`}
            >
              <Link href={`/courses/${event.id}`} className="relative w-[90%] h-[90%] m-auto">
                <Image
                  alt=""
                  src={event.image}
                  className="absolute top-0 left-0 w-full h-full rounded-md"
                />
              </Link>
  
              <div className="flex flex-col items-start justify-between py-[2vw]">
                <div className="text-[1.5vw] uppercase font-fontAchivo">
                  Exhibition
                </div>
  
                <Link
                  href={`/courses/${event.id}`}
                  className={`text-[2vw] font-extrabold leading-none font-fontMarcellus transition-transform duration-1000 hover:translate-x-1 ${isAvailable ? 'hover:text-[#433f3de6]' : 'text-gray-500'}`}
                >
                  {event.title}
                </Link>
  
                <div className="flex items-center gap-2 justify-center">
                  <FaRegCalendarAlt />
                  <div className="text-[1.5vw] font-fontAchivo">{event.date}</div>
                </div>
  
                <div className="flex items-center gap-2 justify-center">
                  <MdLocationOn className="transition-transform duration-1000 hover:translate-x-[-5px]" />
                  <Link
                    href={`courses/${event.id}`}
                    className={`text-[1.5vw] transition-transform duration-[1000ms] hover:translate-x-1 font-Pacifico hover:opacity-80 ${isAvailable ? '' : 'text-[#fff3e2cb]'}`}
                  >
                    {event.location}
                  </Link>
                </div>
              </div>
  
              {/* Temporarily unavailable */}
              {!isAvailable && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 text-white text-[5vw] font-fontAchivo font-bold">
                  Temporarily unavailable
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CoursesPage;
