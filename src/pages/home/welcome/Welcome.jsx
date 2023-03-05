import React from "react";

import icon from "../../../assets/img/temp/heroes.png";

import css from "./Welcome.module.scss";

import { ButtonSupport } from "../../../components/button-support/SupportButton";

const Welcome = (props) => {
  return (
    <section className={css.welcome}>
      <div className={css.animation}>
        <img src={icon} alt="" />
      </div>
      <div className={css.text_content}>
        <div>
          <h1 className={css.title}>
            Герой стає героєм,
            <br />
            Коли з’являється монстр
          </h1>
          <ButtonSupport />
        </div>

        <div className={css.subtitle}>
          <p>
            Ми мріємо і робимо все можливе аби кожна дитина мала доступ до
            якісного лікування і можливість залишатися при цьому дитиною.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
