import React from "react";
import { LinkNav } from "../../../components/button/Button";
import icon from "../../../assets/img/temp/home_icon.png";

import css from "./Welcome.module.scss";

const Welcome = (props) => {
  return (
    <section className={css.welcome}>
      <div className={css.text_content}>
        <span className={css.line}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="59"
            height="169"
            viewBox="0 0 59 169"
            fill="none"
          >
            <path
              opacity="0.4"
              d="M13.6431 0.999999C8.48157 10.9907 2.80386 31.7407 21.3855 34.8148C44.6125 38.6574 17.5142 -5.14815 4.35225 45.5741C-8.80972 96.2963 20.6112 127.806 26.805 136.259C31.7601 143.022 48.9996 159.571 57 167M57 167L34.5472 163.157M57 167C53.9031 161.877 47.5544 149.324 46.935 140.102"
              stroke="#C0CAD2"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </span>

        <h1 className={css.title}>
          Про благодійний фонд <br /> Крила надії
        </h1>

        <div className={css.subtitle}>
          <p>
            В умовах повномасштабної війни, ми працюємо на перемогу, але і
            надалі опікуємося важкохворими дітьми.
          </p>
          <p>
            Завдяки Вам ми не припиняємо дбати аби украінські діти мали усе
            необхідне для якісного і комфортного лікування вдома.
          </p>
        </div>

        <LinkNav
          link="/contact-us"
          title="Підтримати"
          class={`yellow_button ${css.link}`}
        />
      </div>
      <div className={css.gallery}>
        <div className={css.icon}>
          <img src={icon} alt="" />
        </div>
        <div className={css.icon}>
          <img src={icon} alt="" />
        </div>
        <div className={css.icon}>
          <img src={icon} alt="" />
        </div>
        <div className={css.icon}>
          <img src={icon} alt="" />
        </div>
        <div className={css.icon}>
          <img src={icon} alt="" />
        </div>
      </div>

      <div className={css.description}>
        <p>
          Ми створюємо гідні умови для лікування, підтримки і соціалізації
          важкохворих дітей, змінюємо законодавство в їх інтересах, а також
          формуємо культуру конструктивної благодійності та волонтерства.
          <br />
          БФ “Крила надії” почав свою діяльність у 2005 році і з того часу щодня
          надає допомогу важкохворим дітям Західної України. За цей час втілено
          десятки великих і малих проектів. Допомогу отримали сотні дітей, а в
          час пандемії — і значна кількість медпрацівників і дорослих.
          <br />
          <br />
          БФ “Крила надії” почав свою діяльність у 2005 році і з того часу щодня
          надає допомогу важкохворим дітям Західної України. За цей час втілено
          десятки великих і малих проектів. Допомогу отримали сотні дітей, а в
          час пандемії — і значна кількість медпрацівників і дорослих.
        </p>
      </div>
    </section>
  );
};

export default Welcome;
