"use client"
import React from 'react'
import "./portfolio.css"
import { useTranslations } from 'next-intl'
import CarouselAllies from '@/components/layout/CarouselAllies'

const Portfolio = () => {

  const t = useTranslations("portfolio")

  return (
    <>
      <section className='section-portfolio' id='Portfolio'>
        <div className="container-description-ptf">
          <h1 className="title-ptf">{t("title")}</h1>
          <p className='description-ptf'>{t("subtile")}</p>
        </div>
        <div className='w-full'>
          <CarouselAllies/>
        </div>
      </section>
    </>
  )
}

export default Portfolio