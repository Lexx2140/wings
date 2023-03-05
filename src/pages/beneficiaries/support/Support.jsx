import React from "react";

import icon from "../../../assets/img/temp/home_icon.png";

import css from "./Support.module.scss";

const Support = (props) => {
  return (
    <section className={css.we_help}>
      <div className={`${css.grid}`}>
        <div className={`${css.column}`}>
          <div className={css.icon}>
            <img src={icon} alt="" />
          </div>

          <div className={css.information}>
            <div className={css.text_content}>
              <h1 className={css.title}>
                Кому ми <br /> допомагаємо
              </h1>
            </div>
            <h2 className={css.title}>
              Лікарням із придбанням необхідного обладнання
            </h2>
            <p className={css.description}>
              Усе починалось у далекому 2005 році. Коли Ліпська Наталя
              “озброївшись” пензликами та фарбами, переступила поріг відділення.
              Усе починалось у далекому 2005 році. Коли Ліпська Наталя
              “озброївшись” пензликами та фарбами, переступила поріг відділення
            </p>
          </div>
        </div>
        <div className={`${css.column}`}>
          <div className={css.icon}>
            <img src={icon} alt="" />
          </div>

          <div className={css.information}>
            <h2 className={css.title}>
              Лікарням із придбанням необхідного обладнання
            </h2>
            <p className={css.description}>
              Усе починалось у далекому 2005 році. Коли Ліпська Наталя
              “озброївшись” пензликами та фарбами, переступила поріг відділення.
              Усе починалось у далекому 2005 році. Коли Ліпська Наталя
              “озброївшись” пензликами та фарбами, переступила поріг відділення
            </p>
          </div>
        </div>
        <div className={`${css.column}`}>
          <div className={css.icon}>
            <img src={icon} alt="" />
          </div>

          <div className={css.information}>
            <h2 className={css.title}>
              Лікарням із придбанням необхідного обладнання
            </h2>
            <p className={css.description}>
              Усе починалось у далекому 2005 році. Коли Ліпська Наталя
              “озброївшись” пензликами та фарбами, переступила поріг відділення.
              Усе починалось у далекому 2005 році. Коли Ліпська Наталя
              “озброївшись” пензликами та фарбами, переступила поріг відділення
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
