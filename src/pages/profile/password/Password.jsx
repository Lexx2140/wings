import React, { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { LinkNav, Button } from "../../../components/button/Button";
import css from "./Password.module.scss";
import fs from "../../../components/form/Form.module.scss";
import icon from "../../../assets/img/temp/home_icon.png";

const Password = (props) => {
  const array = ["", "", "", "", "", "", "", ""];

  return (
    <>
      <div className={css.content}>
        <h3 className={css.title}>Змінити пароль</h3>
        <label htmlFor="old_pass" className={fs.form_row}>
          <span className={fs.placeholder}>Старий пароль*</span>
          <input
            type="password"
            name="old_pass"
            placeholder="Введіть ваш старий пароль"
          />
        </label>
        <label htmlFor="new_pass" className={fs.form_row}>
          <span className={fs.placeholder}>Новий пароль*</span>
          <input
            type="password"
            name="new_pass"
            placeholder="Введіть ваш новий пароль"
          />
        </label>
        <label htmlFor="repeat_pass" className={fs.form_row}>
          <span className={fs.placeholder}>Повторіть новий пароль* </span>
          <input
            type="text"
            name="repeat_pass"
            placeholder="Введіть ваш новий пароль"
          />
        </label>

        <p className={css.description}>
          Пароль повинен складатися з не менш ніж 6 символів, містити цифри та
          латинські літери, у тому числі великі і не повинен збігатися з ім’ям
          та ел. поштою
        </p>
        <Button class={css.save} title={"Зберегти дані"}></Button>
      </div>
    </>
  );
};

export default Password;
