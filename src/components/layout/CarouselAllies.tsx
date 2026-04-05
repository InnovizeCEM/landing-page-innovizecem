import React from 'react'
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { bussinelogo } from '@/types/types'
import Link from 'next/link'
import dataimage from "../../data/portafolio.json"

import 'swiper/swiper-bundle.css';
import Image from 'next/image';

const CarouselAllies = () => {
  return (
    <Swiper
        modules={[Autoplay]}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
      }}
      speed={2000}
      loop={true}
      slidesPerView={2}
      spaceBetween={20}
      allowTouchMove={false}
      breakpoints={{
        640:  { slidesPerView: 3, spaceBetween: 40 },
        1024: { slidesPerView: 5, spaceBetween: 60 },
      }}
      className="w-full py-4"
      >
        {dataimage.map((data: bussinelogo, index: any ) => (
          <SwiperSlide key={index}>         
            <div className='logos-carrusel-ptf' key={data.id}>
              <Link href={data.url}>
                <Image className="img-ptf" src={data.image} alt={data.name} width={110} height={100} loading='lazy'/>
              </Link>
            </div>
          </SwiperSlide>
          ))}
      </Swiper>
  )
}

export default CarouselAllies