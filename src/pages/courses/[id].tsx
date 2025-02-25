import Image from "next/image";
import { useRouter } from "next/router";
import { FC } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import events from "@/components/ui/eventsArray"

interface Course {
  id: number;
  title: string;
  date: string;
  location: string;
  image: string;
  description: string; // Добавьте описание курса
  openForArr: string[]; // Добавьте массив для открытых категорий
}

interface CoursePageProps {
  events: Course[]; // Передайте массив курсов как пропс
}

const CoursePage: FC<CoursePageProps> = () => {
  const router = useRouter();
  const { id } = router.query;

  // Найдите курс по id
  const course = events.find(event => event.id === Number(id));

  if (!course) {
    return <div>Loading...</div>; // Или обработка случая, когда курс не найден
  }

  return (
    <div className="relative w-[90%] h-full mx-auto">
      <div className="w-[70%] h-full ml-auto">
        <div className="flex flex-col items-start justify-between py-[2vw] bg-[#fff3e2cb]">
          <div className="text-[2vw] font-extrabold leading-none font-fontMarcellus">
            {course.title}
          </div>
        </div>
        <div className="w-full h-full mt-3">
         
       
          <div className="text-[1vw] font-fontTerminaMedium">
            {course.description}
          </div>
        </div>
      </div>
      <div className="absolute top-[-2vw] left-[3vw] w-[23vw] h-full flex flex-col bg-[#fff3e298] gap-y-[5vw] p-[1vw] rounded-md">
        <Image alt="" src={course.image} className="w-full h-full opacity-70 rounded-md" />
        <div className="flex flex-col gap-y-3">
          <div className="flex items-center gap-1 text-[1.5vw] font-fontAchivo">
            <FaRegCalendarAlt /> {course.date}
          </div>
          <div>
            <div className="flex items-center gap-1 text-[1.1vw] font-fontTerminaDemi">
              <FaPeopleGroup /> This event is open to:
            </div>
            <div className="flex flex-wrap gap-x-[2vw] gap-y-[1vw] mt-2">
              {course.openForArr.map((item: string) => (
                <div key={item} className="bg-[#175e54] uppercase min-w-[30%] text-white font-semibold text-center p-1 rounded-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;