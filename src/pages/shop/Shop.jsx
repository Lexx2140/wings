import React, { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { LinkNav, Button } from "../../components/button/Button";
import css from "./Shop.module.scss";

import icon from "../../assets/img/temp/home_icon.png";
import Arrow from "../../assets/img/arrow.svg";

import Gift from "../../components/gift/Gift";

const ShopPage = (props) => {
  const array = ["", "", "", "", "", "", "", ""];

  return (
    <>
      <section className={css.shop}>
        <div className={css.text_content}>
          <h1 className={`${css.title}`}>Благодійний магазин</h1>
          <p className={css.subtitle}>
            Усе починалось у далекому 2005 році. Коли Ліпська Наталя
            “озброївшись” пензликами та фарбами, переступила поріг відділення
            дитячої гематології
          </p>
        </div>

        <div className={css.grid}>
          {array.map((t, idx) => (
            <Gift
              title="Допоможемо медикам рятувати дитячі серця!"
              icon={icon}
              key={`bklock-${idx}`}
              link=""
              class={css.grid_icon}
            ></Gift>
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

export default ShopPage;
