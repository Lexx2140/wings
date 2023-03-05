import React, { useEffect, useState, useRef } from "react";

import css from "./Reports.module.scss";

import { Button } from "../../components/button/Button";
import Arrow from "../../assets/img/arrow.svg";

const array = ["", "", ""];

const ReportsPage = (props) => {
  return (
    <>
      <section className={css.reports}>
        <div className={css.text_content}>
          <h1 className={css.title}>Наші звіти</h1>
          <p className={css.subtitle}>
            Усе починалось у далекому 2005 році. Коли Ліпська Наталя
            “озброївшись” пензликами та фарбами, переступила поріг відділення
            дитячої гематології
          </p>
        </div>

        <div className={css.documents}>
          {array.map((t, idx) => (
            <div key={idx} className={css.year}>
              <h3 className={css.num}>{2022 - idx}</h3>

              {array.map((t, idx) => (
                <div key={idx} className={css.document}>
                  <h4 className={css.title}>Загальний звіт. Лютий 2022</h4>
                  <div className={css.info}>
                    <div className={`${css.date} ${css.column}`}>
                      <span className={css.t}>Додано</span>
                      <span className={css.d}>02 Бер 2022</span>
                    </div>
                    <div className={`${css.momey} ${css.column}`}>
                      <span className={css.t}>Зібрано</span>
                      <span className={css.d}>25,210 грн</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        <Button title="Показати більше" class={`${css.load_more}`}>
          <span className={css.arrow}>
            <Arrow></Arrow>
          </span>
        </Button>
      </section>
    </>
  );
};

export default ReportsPage;
