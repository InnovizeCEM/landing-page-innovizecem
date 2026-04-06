import React from "react";
import Image from "next/image";
import imageFooter from "../../../public/assets/Logo_color.svg";
import {
  InstagramLogoIcon,
  LinkedinLogoIcon,
  WhatsappLogoIcon,
} from "@phosphor-icons/react/dist/ssr";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("footer");

  return (
    <>
      <footer className="w-full h-auto flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-0 lg:justify-between my-2">

        <main className="flex flex-col items-center gap-3 lg:w-1/2">
          <div className="flex flex-col items-center ">
            <Image
              src={imageFooter}
              alt="logo de innova cem sección footer"
              priority
              width={200}
              height={100}
              />
            <p className="w-[80%] lg:w-[40%] text-center">{t("textFooter")}</p>          
          </div>

          <div>
            <p>carolaymeza.py@innovizecem.com</p>
          </div>
        </main>

        <article className="flex flex-col gap-5 items-center mb-5 lg:w-1/2 lg:justify-center">
          <div className="text-sm flex gap-4">
            <a
              href="https://drive.google.com/file/d/1ROD2lieij08omtHY9qjTxensczjuzXXq/view?usp=drive_link"
              target="_blank"
              rel="noopener"
              aria-label="Terminos"
            >
              {t("terms")}
            </a>
            <a
              href="https://drive.google.com/file/d/1_9ZW1rjyqaiD0MPZE803R4z9z-M6ciAp/view?usp=drive_link"
              target="_blank"
              rel="noopener"
              aria-label="Avisos legales"
            >
              {t("legal")}
            </a>
            <a
              href="https://drive.google.com/file/d/1IbUozAXv9lIQzJhU75rCF4BkGZNtyhiS/view?usp=drive_link"
              target="_blank"
              rel="noopener"
              aria-label="politica de privacidad"
            >
              {t("privacy")}
            </a>
          </div>

          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/innovize_cem_sas/"
              target="_blank"
              aria-label="enlace a instagram"
              rel="noopener"
              className="bg-blue-950 text-white rounded-full p-2"
            >
              <InstagramLogoIcon size={18} weight="fill" />
            </a>
            <a
              href="https://www.linkedin.com/company/innovize-cem"
              target="_blank"
              aria-label="enlace a linkedin"
              rel="noopener"
              className="bg-blue-950 text-white rounded-full p-2"
            >
              <LinkedinLogoIcon size={18} weight="fill" />
            </a>
            <a
              href="https://wa.me/+573104300153/"
              target="_blank"
              aria-label="enlace a whatsapp"
              rel="noopener"
              className="bg-blue-950 text-white rounded-full p-2"
            >
              <WhatsappLogoIcon size={18} weight="fill" />
            </a>
          </div>
        </article>
      </footer>
    </>
  );
};

export default Footer;
