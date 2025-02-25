"use client";

import Image from "next/image";


import about3Image from "../../../public/images/about-3.jpg";
import Link from "next/link";
import arrowRight from "../../../public/images/right-arrow.svg";
import line from "../../../public/images/line.svg";
import { useEffect, useState } from "react";
import crossIcon from "../../../public/images/cross-icon.svg";
import classNames from "classnames";

const AboutPage = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpenText, setIsOpenText] = useState(false);

  useEffect(() => {}, [isHovered, isOpenText]);

  return (
    <div className="w-full mx-auto h-full mb-[20vh] flex flex-col relative overflow-hidden">
      <div className="relative w-3/4 h-3/4 flex items-center mx-auto justify-around mt-[5vw] text-[rgba(0,0,0,1)]">
        <div className="w-1/2 tb:h-1/2 h-[75%] sm:h-1/3 relative">
         
        </div>
        <div className="relative w-[40%] h-full flex flex-col p-5 tb:p-0 ">
          <div className="absolute top-[15%] tb:top-[25%] left-[30%] w-full transform -translate-x-[50%]">
            <div className="text-[35px] tb:text-[25px] font-fontMarcellus leading-9 opacity-70">
              My Hearts Calling
            </div>
            <div className="text-[14px] tb:text-[10px] font-fontMarcellus leading-snug font-extralight mt-2 opacity-50">
              Calligraphy has always been a source of joy and relaxation for me.
              The rhythmic motion of the pen and the beauty of each letter bring
              a sense of peace and fulfillment. I love sharing this passion with
              others, guiding them to explore their creativity and find their
              voice through the art of writing
            </div>
            <Link
              href="/"
              className={`relative flex items-center w-full h-10 font-fontAchivo uppercase text-sm text-[#d43246] pt-3 pl-8`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Image
                alt="Arrow Right"
                src={arrowRight}
                className={`absolute top-[40%] left-3 w-5 h-5 transition-opacity duration-1000 ${
                  isHovered ? "opacity-100" : "opacity-0"
                }`}
              />
              <Image
                alt="Line"
                src={line}
                className={`absolute top-[40%] left-0 w-5 h-5 transition-opacity duration-1000 ${
                  isHovered ? "opacity-0" : "opacity-100"
                }`}
              />

              <span
                className={`transition-transform duration-1000  ${
                  isHovered ? "translate-x-2" : "translate-x-0"
                }`}
              >
                Get in touch
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="relative w-full h-full flex flex-col pr-[20vw] items-end mt-[70vh] tb:mt-[40vh] text-[rgba(0,0,0,1)]">
        <div className="text-[10vw]  z-50 font-fontMarcellus ">
          What I Offer
        </div>
        <div className="w-1/3 tb:h-1/2 h-full sm:h-1/3 relative order-2">
         
        </div>
        <div className="relative w-1/3 tb:w-1/2 h-full flex flex-col justify-end items-end mb-[-20%] mr-[-3vw] text-end order-1 z-50">
          <div className="text-[3vw] tb:text-[20px] tb:leading-5 font-fontMarcellus leading-9 opacity-70">
            Calligraphy is the dance of ink and paper, where every stroke tells
            a story
          </div>
          <div className="text-[14px] tb:text-[10px] font-fontMarcellus leading-snug font-extralight mt-2 opacity-50">
            Through my courses, I provide a supportive space for learners of all
            levels. Whether youre a complete beginner or looking to refine your
            skills, my goal is to help you develop your unique style and
            confidence in your abilities.
          </div>
          <Link
            href="/"
            className={`relative flex items-center justify-end w-full h-10 font-fontAchivo uppercase text-sm text-[#d43246] pt-3 pl-8`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Image
              alt="Arrow Right"
              src={arrowRight}
              className={`absolute top-[40%] right-24 w-5 h-5 transition-opacity duration-1000 ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
            />
            <Image
              alt="Line"
              src={line}
              className={`absolute top-[40%] right-28 w-5 h-5 transition-opacity duration-1000 ${
                isHovered ? "opacity-0" : "opacity-100"
              }`}
            />

            <span
              className={`transition-transform duration-1000  ${
                isHovered ? "translate-x-2" : "translate-x-0"
              }`}
            >
              Get in touch
            </span>
          </Link>
        </div>
      </div>
      <div className="relative w-full h-full flex items-center mx-auto justify-around mt-[35vh] text-[rgba(0,0,0,1)]">
        <div className="text-[87px] absolute top-0 left-[35%] w-full z-50 font-fontMarcellus tb:mt-[-7vh] mt-[-10vh]   tb:text-[7vw]">
          Who am I
        </div>
        <div className="w-1/3 tb:h-1/2 h-full flex flex-col sm:h-1/3 relative">
          <Image alt="" src={about3Image} className="w-full h-[40vw]" />
          <div className="w-full relative mt-5">
            <div className="flex justify-between">
              <div className="font-fontDancing text-[#57524f]">
                Machi Regaspi
              </div>
              <button type="button" className="">
                <Image
                  alt=""
                  onClick={() => {
                    setIsOpenText(!isOpenText);
                  }}
                  src={crossIcon}
                  className={classNames(
                    isOpenText
                      ? "transform transition-transform rotate-45 duration-700"
                      : "transform transition-transform rotate-0 duration-700",
                    "hover:opacity-60"
                  )}
                />
              </button>
            </div>
            <div
              className={classNames(
                isOpenText ? "opacity-90 " : "opacity-0",
                "transform transition-opacity duration-1000 mb-40",
                "text-[#79726e] w-[80%] text-[14px] tb:text-[10px] mt-4 font-fontMarcellus leading-relaxed font-extralight"
              )}
            >
              As a psychology student, I find that the principles of psychology
              often intertwine with the art of calligraphy. Understanding the
              mind enhances my approach to teaching and practicing this craft,
              allowing me to create a nurturing environment for my students.
            </div>
          </div>
        </div>
        <div className="relative w-[40%] h-full flex flex-col pb-[25vh] tb:p-0 ">
          <div className="absolute top-0 tb:top-[25%] left-[30%] w-full transform -translate-x-[50%]">
            <div className="text-[35px] tb:text-[25px] font-fontMarcellus leading-9 opacity-70">
              Empowered by passion, united through creativity
            </div>
            <div className="text-[#79726e] text-[14px] tb:text-[10px] font-fontMarcellus leading-snug font-extralight mt-2 opacity-80">
              With over nine years of experience, I am deeply passionate about the art of calligraphy.

              in this beautiful art form. Currently, Im also a psychology
              student, which enriches my understanding of creativity and
              mindfulness in calligraphy. Through my courses, I aim to share the
              joy of calligraphy, helping others discover their unique styles
              while fostering a calm and focused mindset. Join me on this
              artistic journey, and lets create something beautiful together! I
              believe that calligraphy is not just about writing; its a form of
              expression that connects us to our thoughts and emotions. My
              journey began nine years ago, and since then, I have immersed
              myself in various styles and techniques, constantly seeking to
              improve and innovate.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
