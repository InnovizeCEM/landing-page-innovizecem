"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import logoHeader from "../../../public/assets/Logo_white.svg"
import "./NavBar.css"
import Link from "next/link"
import { List } from '@phosphor-icons/react/dist/ssr';
import {useTranslations} from 'next-intl';
import { useLanguageSelector } from '@/hook/useLenguajeSelector';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const t = useTranslations('navbar');
  const { currentLocale, handleChange } = useLanguageSelector();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <section className="section-header">
        <nav className="container-nav">
          <picture className="logo">
            <Image src={logoHeader} alt="logo" loading='lazy' width={170} height={150}/>
          </picture>
          <div className="hamburger" onClick={toggleMenu}>
            <List size={24} />
          </div>
          <li className={`items-header ${menuOpen ? "open" : ""}`}>
            <Link href="#Hero">{t("Home")}</Link>
            <Link href="#About">{t("About")}</Link>
            <Link href="#solutions">{t("Solutions")}</Link>
            <Link href="#Portfolio">{t("Portfolio")}</Link>
            <Link href="#Contact">{t("Contact")}</Link>

            <select value={currentLocale} onChange={handleChange} aria-label="Select language" className='select-language'>
              <option key="es" value="es">Spanish</option>
              <option key="en" value="en">English</option>
            </select>
          </li>
        </nav>
      </section>
    </>
  );
};

export default NavBar;
