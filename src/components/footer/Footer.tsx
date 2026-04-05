import React from 'react'
import "./footer.css"
import Image from 'next/image';
import imageFooter from "../../../public/assets/Logo_color.svg"
import { InstagramLogoIcon, LinkedinLogoIcon, WhatsappLogoIcon } from '@phosphor-icons/react/dist/ssr';
import { useTranslations } from 'next-intl';

const Footer = () => {

  const t = useTranslations("footer");

  return (
    <>
      <footer className='section-footer'>
        <div className='article-footer'>
            <div className='logo-footer-ctn'>
              <Image src={imageFooter} alt="logo de innova cem sección footer" loading="lazy" width={180} height={85}/>
              <p className='description-Article'>{t("textFooter")}</p>
            </div>
            <div className='links_legal_files'>
              <a href="https://drive.google.com/file/d/1ROD2lieij08omtHY9qjTxensczjuzXXq/view?usp=drive_link" target='_blank' rel='noopener' aria-label="Terminos">{t("terms")}</a>
              <a href="https://drive.google.com/file/d/1_9ZW1rjyqaiD0MPZE803R4z9z-M6ciAp/view?usp=drive_link" target='_blank' rel='noopener' aria-label="Avisos legales">{t("legal")}</a>
              <a href="https://drive.google.com/file/d/1IbUozAXv9lIQzJhU75rCF4BkGZNtyhiS/view?usp=drive_link" target='_blank' rel='noopener' aria-label="politica de privacidad">{t("privacy")}</a>
            </div>
        </div> 

        <div className='main-footer'>
          <div>
              <p>carolaymeza.py@innovizecem.com</p>
          </div>          
          <div className='items-footer-links'>
            <a href="https://www.instagram.com/innovize_cem_sas/" target='_blank' aria-label="enlace a instagram" rel='noopener'>
              <InstagramLogoIcon size={18} weight="fill" />
            </a>
            <a href="https://www.linkedin.com/company/innovize-cem" target='_blank' aria-label="enlace a linkedin" rel='noopener'>
              <LinkedinLogoIcon size={18} weight="fill" />
            </a>
            <a href="https://wa.me/+573104300153/" target='_blank' aria-label="enlace a whatsapp" rel='noopener'>
              <WhatsappLogoIcon size={18} weight="fill" />
            </a>
          </div>
        </div> 
      </footer>
    </>
  )
}

export default Footer