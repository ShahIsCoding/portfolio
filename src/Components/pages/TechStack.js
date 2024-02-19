import React from "react";
import bootstrap from "../assets/bootstrap.png";
import reactjs from "../assets/react.png";
import java from "../assets/java.png";
import javascript from "../assets/javascript.png";
import mongodb from "../assets/mongodb.png";
import nodejs from "../assets/nodejs.png";
import redux from "../assets/redux.png";
import sass from "../assets/sass.png";
import html5 from "../assets/html5.png";
import springboot from "../assets/springboot.png";
import tailwindcss from "../assets/tailwindcss.png";
import git from "../assets/git.png";
import css from "../assets/css.png";
import mysql from "../assets/mysql.png";
import Stack from "./Stack";
import Header from "../components/Header";
import Wrapper from "../components/Wrapper";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";

const TechStack = () => {
  const techStack = [
    { name: "HTML5", src: html5 },
    { name: "CSS", src: css },
    { name: "Sass", src: sass },
    { name: "JavaScript", src: javascript },
    { name: "ReactJs", src: reactjs },
    { name: "Bootstrap", src: bootstrap },
    { name: "Tailwind CSS", src: tailwindcss },
    { name: "Redux", src: redux },
    { name: "Node.js", src: nodejs },
    { name: "Java", src: java },
    { name: "SpringBoot", src: springboot },
    { name: "MySQL", src: mysql },
    { name: "MongoDB", src: mongodb },
    { name: "Git", src: git },
  ];

  return (
    <Wrapper addedClass="flex flex-col justify-center">
      <Header
        title="Tech Stack"
        subt="Technologies I’ve been working with recently"
      />
      <div className="scrollbar h-3/4 flex items-center">
        <Swiper
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
          grabCursor={true}
          centeredSlides={true}
          effect="coverflow"
          coverflowEffect={{
            rotate: 10,
            scale: 1.2,
            depth: 300,
          }}
          modules={[Autoplay, EffectCoverflow]}
          autoplay={{
            delay: 1500,
          }}
        >
          {techStack.map(({ src, name }, idx) => {
            return (
              <SwiperSlide key={idx}>
                <Stack src={src} name={name} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </Wrapper>
  );
};

export default TechStack;
