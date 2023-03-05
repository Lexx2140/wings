import React, { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { LinkNav, Button } from "../../components/button/Button";
import css from "./News.module.scss";

import icon from "../../assets/img/temp/home_icon.png";
import Arrow from "../../assets/img/arrow.svg";

import Support from "../../components/support/Support";
import New from "../../components/new/New";

const NewsPage = (props) => {
  const array = ["Події", "Аукціони", "День в історії", "Преса", "Решта"];

  return (
    <>
      <section className={css.shares}>
        <div className={css.text_content}>
          <div>
            <h1 className={`${css.title}`}>Новини</h1>
            <div className={css.tags}>
              <button className={`link ${css.tag} ${css.active}`}>Усі</button>

              {array.map((t, idx) => (
                <button key={idx} className={`link ${css.tag}`}>
                  {t}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className={css.grid}>
          {array.map((t, idx) => (
            <New
              title="Допоможемо медикам рятувати дитячі серця!"
              subtitle="Кирил чекає на день, коли лікарі дозволять йому знову ганяти на самокаті. "
              icon={icon}
              key={`bklock-${idx}`}
              link=""
              more=""
              class={css.grid_icon}
            ></New>
          ))}
        </div>

        <Button title="Показати більше" class={`${css.load_more}`}>
          <span className={css.arrow}>
            <Arrow></Arrow>
          </span>
        </Button>
      </section>

      <Support />
    </>
  );
};

export default NewsPage;
