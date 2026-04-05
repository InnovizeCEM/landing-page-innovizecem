"use client"
import React from "react";
import "./solution.css";
import { useTranslations } from "next-intl";
import { Servicio } from "@/types/types";


const Solution = () => {

  const t = useTranslations("solutions" );
  const services = t.raw("solution") as Servicio[]

  return (
    <>
      <section className="section-solution" id="solutions">
        <div className="curve-fondo-solution"></div>
        <h2 className="section-title-solution">{t("title")}</h2>
        <article className="article-card-solution">
            {services.map((servicio: Servicio, index: number ) => (
                <main className="card-solution" key={index}>
                  <div className="info-card-up">
                    <i className={servicio.icon}></i>
                    <h4>{servicio.servicio}</h4>
                    <p>{servicio.descripcion}</p>
                  </div>
                  <details className="details-benefics">
                    <summary className="details-summary-benefics">
                      {t("viewMore")}
                    </summary>
                    <div className="info-card-down">
                      <h3>{t("benefitsTitle")}</h3>
                      <ul>
                        {servicio.beneficios.map((beneficio, i) => (
                          <li key={i}>{beneficio}</li>
                        ))}
                      </ul>
                      <a href={servicio.enlace}>{servicio.enlaceName}</a>
                    </div>
                  </details>
                </main>
            ))}
        </article>
      </section>
    </>
  );
};

export default Solution;
