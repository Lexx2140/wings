import React from "react";
import { LinkNav } from "../../../components/button/Button";
import icon from "../../../assets/img/temp/home_icon.png";

import css from "./Welcome.module.scss";

const Welcome = (props) => {
  return (
    <section className={css.welcome}>
      <div className={css.text_content}>
        <h1 className={css.title}>Потребуєте допомоги ?</h1>
        <p className={css.subtitle}>
          Ми прагнемо, аби кожна дитина мала доступ до якісного лікування і
          можливість залишатися при цьому дитиною
        </p>
        <LinkNav
          link="/contact-us"
          title="Підтримати"
          class={`dark_button ${css.link}`}
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
      </div>
    </section>
  );
};

export default Welcome;
