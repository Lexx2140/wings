import React from "react";

import icon from "../../../assets/img/temp/home_icon.png";

import css from "./Dream.module.scss";

const Dream = (props) => {
  return (
    <section className={css.about_dream}>
      <div className={css.text_content}>
        <h1 className={`small ` + css.title}>
          <mark>Ми мріємо</mark>
          <br />
          <mark>та робимо </mark>
          <br />
          <mark>все можливе</mark>
        </h1>

        <div className={css.description}>
          <p>
            аби кожна дитина мала доступ до якісного лікування і можливість
            залишатися при цьому дитиною.
          </p>
          <p>
            Ми створюємо гідні умови для лікування, підтримки і соціалізації
            важкохворих дітей, змінюємо законодавство в їх інтересах, а також
            формуємо культуру конструктивної благодійності та волонтерства.
          </p>
        </div>
      </div>
      <div className={`${css.grid}`}>
        <div className={`${css.column}`}>
          <div className={css.icon}>
            <img src={icon} alt="" />
          </div>
          <div className={css.description}>
            <h3 className={css.title}>Tracking Goals</h3>
            <p>
              Проєкт, аналітика, команда,оптимально, інструмент, координатор
            </p>
          </div>
        </div>
        <div className={`${css.column}`}>
          <div className={css.icon}>
            <img src={icon} alt="" />
          </div>
          <div className={css.description}>
            <h3 className={css.title}>Tracking Goals</h3>
            <p>
              Проєкт, аналітика, команда,оптимально, інструмент, координатор
            </p>
          </div>
        </div>
        <div className={`${css.column}`}>
          <div className={css.icon}>
            <img src={icon} alt="" />
          </div>
          <div className={css.description}>
            <h3 className={css.title}>Tracking Goals</h3>
            <p>
              Проєкт, аналітика, команда,оптимально, інструмент, координатор
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dream;
