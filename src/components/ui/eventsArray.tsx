import { StaticImageData } from "next/image";
import coursesPhoto1 from "../../../public/images/newPhoto/course-1.jpg";
import coursesPhoto2 from "../../../public/images/newPhoto/course-2.jpg";
import coursesPhoto3 from "../../../public/images/newPhoto/course-3.jpg";

export interface Event {
  id: number;

  title: string;

  date: string;

  location: string;

  image: StaticImageData; // Используйте StaticImageData для изображений, импортируемых из папки public
}

const events = [
  {
    id: 1,

    title: "The Elegant Hand: Mastering Calligraphy",

    date: "Tue, Feb 11, 2025",

    location: "Lathrop Library, East Asia Library, 2nd floor",
    description: `Embark on a transformative journey into the art of calligraphy with "The Elegant Hand: Mastering Calligraphy." This comprehensive course is designed for both beginners and those looking to refine their skills. Over the span of several engaging sessions, you will explore the rich history and techniques of calligraphy, learning to create stunning letterforms that express your unique style.

Throughout the course, you will:

    Learn the Fundamentals: Begin with the basics of calligraphy, including essential tools, materials, and techniques. Understand the anatomy of letters and the importance of proper posture and grip.

    Master Various Styles: Dive into different calligraphic styles, from classic scripts like Copperplate and Italic to modern interpretations. Each style will be broken down into manageable steps, allowing you to practice and perfect your technique.

    Develop Your Creativity: Engage in creative exercises that encourage you to experiment with flourishes, layouts, and color. Discover how to incorporate calligraphy into various projects, such as invitations, greeting cards, and personal artwork.

    Receive Personalized Feedback: Benefit from one-on-one guidance and constructive feedback from experienced instructors. This supportive environment will help you grow and gain confidence in your abilities.

    Join a Community of Artists: Connect with fellow calligraphy enthusiasts, share your work, and participate in collaborative projects. Build lasting friendships and inspire one another on your artistic journeys.

By the end of this course, you will have a solid foundation in calligraphy, a portfolio of your work, and the confidence to continue exploring this beautiful art form. Whether you seek to enhance your personal projects or pursue a new creative passion, "The Elegant Hand: Mastering Calligraphy" will equip you with the skills and inspiration to flourish. Join us and let your creativity flow!`,
    openForArr: ["students", "amateurs", "professionals"],
    image: coursesPhoto1, // Замените на ваш путь к изображению
  },

  {
    id: 2,

    title: "Flourishes & Forms: The Art of Calligraphy",

    date: "Wed, Mar 15, 2025",

    location: "Some Other Location",
    description: `Embark on a transformative journey into the art of calligraphy with "The Elegant Hand: Mastering Calligraphy." This comprehensive course is designed for both beginners and those looking to refine their skills. Over the span of several engaging sessions, you will explore the rich history and techniques of calligraphy, learning to create stunning letterforms that express your unique style.

    Throughout the course, you will:
    
        Learn the Fundamentals: Begin with the basics of calligraphy, including essential tools, materials, and techniques. Understand the anatomy of letters and the importance of proper posture and grip.
    
        Master Various Styles: Dive into different calligraphic styles, from classic scripts like Copperplate and Italic to modern interpretations. Each style will be broken down into manageable steps, allowing you to practice and perfect your technique.
    
        Develop Your Creativity: Engage in creative exercises that encourage you to experiment with flourishes, layouts, and color. Discover how to incorporate calligraphy into various projects, such as invitations, greeting cards, and personal artwork.
    
        Receive Personalized Feedback: Benefit from one-on-one guidance and constructive feedback from experienced instructors. This supportive environment will help you grow and gain confidence in your abilities.
    
        Join a Community of Artists: Connect with fellow calligraphy enthusiasts, share your work, and participate in collaborative projects. Build lasting friendships and inspire one another on your artistic journeys.
    
    By the end of this course, you will have a solid foundation in calligraphy, a portfolio of your work, and the confidence to continue exploring this beautiful art form. Whether you seek to enhance your personal projects or pursue a new creative passion, "The Elegant Hand: Mastering Calligraphy" will equip you with the skills and inspiration to flourish. Join us and let your creativity flow!`,
        openForArr: ["students", "amateurs", "professionals"],

    image: coursesPhoto2,
  },
  {
    id: 3,

    title: "Calligraphy Unleashed: From Basics to Brilliance",

    date: "Tue, Feb 11, 2025",

    location: "Lathrop Library, East Asia Library, 2nd floor",
    description: `Embark on a transformative journey into the art of calligraphy with "The Elegant Hand: Mastering Calligraphy." This comprehensive course is designed for both beginners and those looking to refine their skills. Over the span of several engaging sessions, you will explore the rich history and techniques of calligraphy, learning to create stunning letterforms that express your unique style.

    Throughout the course, you will:
    
        Learn the Fundamentals: Begin with the basics of calligraphy, including essential tools, materials, and techniques. Understand the anatomy of letters and the importance of proper posture and grip.
    
        Master Various Styles: Dive into different calligraphic styles, from classic scripts like Copperplate and Italic to modern interpretations. Each style will be broken down into manageable steps, allowing you to practice and perfect your technique.
    
        Develop Your Creativity: Engage in creative exercises that encourage you to experiment with flourishes, layouts, and color. Discover how to incorporate calligraphy into various projects, such as invitations, greeting cards, and personal artwork.
    
        Receive Personalized Feedback: Benefit from one-on-one guidance and constructive feedback from experienced instructors. This supportive environment will help you grow and gain confidence in your abilities.
    
        Join a Community of Artists: Connect with fellow calligraphy enthusiasts, share your work, and participate in collaborative projects. Build lasting friendships and inspire one another on your artistic journeys.
    
    By the end of this course, you will have a solid foundation in calligraphy, a portfolio of your work, and the confidence to continue exploring this beautiful art form. Whether you seek to enhance your personal projects or pursue a new creative passion, "The Elegant Hand: Mastering Calligraphy" will equip you with the skills and inspiration to flourish. Join us and let your creativity flow!`,
        openForArr: ["students", "amateurs", "professionals"],

    image: coursesPhoto3, // Замените на ваш путь к изображению
  },

  
];

export default events;
