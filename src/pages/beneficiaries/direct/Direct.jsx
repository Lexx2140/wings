import React from "react";

import icon from "../../../assets/img/temp/home_icon.png";

import css from "./Direct.module.scss";

const array = ["", "", "", "", "", "", "", ""];

const Direct = (props) => {
  return (
    <section className={css.direct_help}>
    <div className={css.text_content}>
      <h1 className={`small ${css.title}`}>Адресна допомога</h1>
      <h3 className={css.subtitle}>
        Для того, аби фонд розглянув ваш випадок нам необхідні наступні
        документи
      </h3>
    </div>

    <div className={css.grid}>
      {array.map((t, idx) => (
        <h4 key={idx} className={css.list}>
          Ксерокопія ідентифікаційного номера батьків (чи опікунів) дитини
        </h4>
      ))}
    </div>
  </section>
  );
};

export default Direct;
