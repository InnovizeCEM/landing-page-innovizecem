"use client";
import React from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "../cardAbout/CardAbout.css";
import Image from "next/image";
import { CaretLeftIcon, CaretRightIcon, HandIcon } from "@phosphor-icons/react/dist/ssr";
import { useTranslations } from "next-intl";
import { person } from "@/types/types";


const CarouselTeam = () => {
  const t = useTranslations("about");
  const people = t.raw("workersOpinion") as person[];

  return (
    <>
    <div className="relative">

      <div className="absolute lg:left-[2%] md:left-[15%] left-[5%] top-1/2 -translate-y-1/2 z-10">
        <button className="swiper-button-prev-custom p-2 rounded-full transition" title="prev">
          <CaretLeftIcon size={32} color="#00266c" />
        </button>
      </div>

      <div className="absolute lg:right-[10%] md:right-[10%] right-[5%] top-1/2 -translate-y-1/2 z-10">
        <button className="swiper-button-next-custom p-2 rounded-full transition" title="next">
          <CaretRightIcon size={32} color="#00266c" />
        </button>
      </div>

      <Swiper
        loop={true}
        spaceBetween={200}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
        className="w-[80%] h-full !m-0 !py-8 !px-20"
      >
        {people.map((person, index) => (
          <SwiperSlide key={index}>
            <div className="containerImageWorkers" key={index}>
              <div className="containerIconWorkers">
                <i className="IconWorkers">
                  <HandIcon size={32} />
                </i>
              </div>
              <Image
                className="image-worker"
                src={person.image}
                alt={person.id}
                width={300}
                height={300}
                loading="lazy"
              />
              <p className="helloWorkers">{person.position}</p>
            </div>
            <div className="containerOpinionWorkers">
              <p className="name-workers">
                <strong>{person.id}</strong>
              </p>
              <p className="opinionWorkers">{person.opinion}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </>
  );
};

export default CarouselTeam;
