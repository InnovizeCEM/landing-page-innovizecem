import React from 'react'
import "./about.css"
import { useTranslations } from 'next-intl';
import CarouselTeam from '@/components/layout/CarouselTeams';

const About = () => {
  const t = useTranslations("about");
  return (
    <>
      <section className='sectionAbout' id='About'>
        <div className='fondoCard'>
          <CarouselTeam/>
        </div>
        <div className='containerDescriptionAbout'>
          <h5>{t("title")}</h5>
          <p>{t('descriptionAbout')}</p>
        </div>
      </section>
    </>
  )
}

export default About