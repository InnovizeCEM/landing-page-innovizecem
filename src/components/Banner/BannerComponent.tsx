import React from "react";
import Image from "next/image";
import ImageBanner from "../../../public/assets/imagenhero.svg";
import "./banner.css";
import Link from "next/link";
import { useTranslations } from "next-intl";

const BannerComponent = () => {
  const t = useTranslations("hero");

  return (
    <>
      <section className="sectionBanner">
        <article className="containerTextHero">
          <h1>{t("h1Text")}</h1>
          <p>
            <strong>{t("strongText")}</strong>
            <br />
            {t("pText")}
          </p>
          <Link
            className="buttonsectionBanner"
            href="#solutions"
            aria-label="Descubre nuestras soluciones"
          >
            {t("btn")}
          </Link>
        </article>
        <main>
          <Image
            src={ImageBanner}
            className="image-hero-banner"
            alt="Hola"
            width={600}
            loading="lazy"
          />
        </main>
      </section>
    </>
  );
};

export default BannerComponent;
