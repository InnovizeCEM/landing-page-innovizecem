import React from 'react'
import Image from "next/image"
import imagesContact from "../../../public/assets/contact.svg"
import "./contact.css"
import { useTranslations } from 'next-intl'

const Contact = () => {

  const t = useTranslations("contact")

  return (
    <>
      <section className='container-contact' id='Contact'>
        <main className='card-contact'>
          <div className='description-container-contact'>
            <div className='title-contact'>
              <p className='text-2xl font-bold'>{t("title")}</p>   
            </div>
            <div className='description-contact'>
              <p>{t("textUp")}</p>
              <p>{t("textDown")}</p>
            </div>
            <div className='content-btn-contact'>
              <a href="https://wa.me/+573104300153/" className='btn-contact' aria-label='Contact Us Now!'>{t("btn")}</a>
            </div>               
          </div>
          <Image className="image-contact" src={imagesContact} alt="imagen de contacto" width={270} height={410} priority/>
        </main>
      </section>
    </>
  )
}

export default Contact