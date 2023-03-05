import React from "react";

import css from "./Values.module.scss";

import Goal from "../../../components/goal/Goal";


const Values = (props) => {
  return (
    <section className={css.values}>
    <div className={css.values_grid}>
      <Goal class_grid={css.grid} class_icon={css.icon}></Goal>

      <div className={css.text_content}>
        <span className={css.line}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 168 97"
            fill="none"
          >
            <path
              opacity="0.5"
              d="M60.5807 1.32387C19.6746 28.53 -41.704 84.5609 48.8234 93.4559C161.983 104.575 188.239 30.8696 151.182 16.3125C121.536 4.66683 61.3755 15.4062 42.5842 26.3822"
              stroke="#C0CAD2"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </span>
        <h1 className={`small ` + css.title}>
          Наші
          <br />
          цінності
        </h1>
        <p className={css.subtitle}>
          Усе починалось у далекому 2005 році. Коли Ліпська Наталя
          “озброївшись” пензликами та фарбами, переступила поріг відділення
        </p>
      </div>
    </div>
  </section>
  );
};

export default Values;
