import React from "react";
import { LinkNav, Button } from "../../../components/button/Button";
import icon from "../../../assets/img/temp/home_icon.png";

import css from "./Welcome.module.scss";

import Arrow from "../../../assets/img/arrow.svg";

import Help from "../../../components/need-help/Help";

const Welcome = (props) => {
  const array = ["", "", "", "", "", "", "", ""];

  return (
    <section className={css.shares}>
      <div className={css.text_content}>
        <h1 className={`${css.title}`}>
          Кому <br /> допомогти
        </h1>
        <div className={css.tags}>
          <button className={`link ${css.tag} ${css.active}`}>Усі</button>
          <button className={`link ${css.tag}`}>Активні</button>
          <button className={`link ${css.tag}`}>Завершені</button>
        </div>
      </div>

      <div className={css.grid}>
        {array.map((t, idx) => (
          <Help
            title="Допоможемо медикам рятувати дитячі серця!"
            subtitle="Кирил чекає на день, коли лікарі дозволять йому знову ганяти на самокаті. "
            icon={icon}
            key={`bklock-${idx}`}
            link=""
            more=""
            class={css.grid_icon}
          ></Help>
        ))}
      </div>

      <Button title="Показати більше" class={`${css.load_more}`}>
        <span className={css.arrow}>
          <Arrow></Arrow>
        </span>
      </Button>
    </section>
  );
};

export default Welcome;
