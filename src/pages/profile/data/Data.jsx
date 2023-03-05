import React, { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import css from "./Data.module.scss";
import { LinkNav, Button } from "../../../components/button/Button";
import icon from "../../../assets/img/temp/home_icon.png";
import fs from "../../../components/form/Form.module.scss";

const PersonalData = (props) => {
  const array = ["", "", "", "", "", "", "", ""];

  return (
    <>
      <div className={css.content}>
        <div className={css.avatar}>
          <div className={css.icon}>
            <img src={icon} alt="" />
          </div>
          <div className={css.buttons}>
            <Button class={css.remove}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M5 2C5 1.46957 5.21071 0.960859 5.58579 0.585786C5.96086 0.210714 6.46957 0 7 0H13C13.5304 0 14.0391 0.210714 14.4142 0.585786C14.7893 0.960859 15 1.46957 15 2V4H19C19.2652 4 19.5196 4.10536 19.7071 4.29289C19.8946 4.48043 20 4.73478 20 5C20 5.26522 19.8946 5.51957 19.7071 5.70711C19.5196 5.89464 19.2652 6 19 6H17.931L17.064 18.142C17.0281 18.6466 16.8023 19.1188 16.4321 19.4636C16.0619 19.8083 15.5749 20 15.069 20H4.93C4.42414 20 3.93707 19.8083 3.56688 19.4636C3.1967 19.1188 2.97092 18.6466 2.935 18.142L2.07 6H1C0.734784 6 0.48043 5.89464 0.292893 5.70711C0.105357 5.51957 0 5.26522 0 5C0 4.73478 0.105357 4.48043 0.292893 4.29289C0.48043 4.10536 0.734784 4 1 4H5V2ZM7 4H13V2H7V4ZM4.074 6L4.931 18H15.07L15.927 6H4.074ZM8 8C8.26522 8 8.51957 8.10536 8.70711 8.29289C8.89464 8.48043 9 8.73478 9 9V15C9 15.2652 8.89464 15.5196 8.70711 15.7071C8.51957 15.8946 8.26522 16 8 16C7.73478 16 7.48043 15.8946 7.29289 15.7071C7.10536 15.5196 7 15.2652 7 15V9C7 8.73478 7.10536 8.48043 7.29289 8.29289C7.48043 8.10536 7.73478 8 8 8ZM12 8C12.2652 8 12.5196 8.10536 12.7071 8.29289C12.8946 8.48043 13 8.73478 13 9V15C13 15.2652 12.8946 15.5196 12.7071 15.7071C12.5196 15.8946 12.2652 16 12 16C11.7348 16 11.4804 15.8946 11.2929 15.7071C11.1054 15.5196 11 15.2652 11 15V9C11 8.73478 11.1054 8.48043 11.2929 8.29289C11.4804 8.10536 11.7348 8 12 8Z"
                  fill="#0D0D0D"
                />
              </svg>
            </Button>
            <Button class={css.change} title={"Змінити фото"}></Button>
          </div>
        </div>

        <div className={css.labels}>
          <label htmlFor="first-name" className={fs.form_row}>
            <span className={fs.placeholder}>Ім’я</span>
            <input
              type="text"
              name="first-name"
              placeholder="Введіть ваше ім’я"
            />
          </label>
          <label htmlFor="last-name" className={fs.form_row}>
            <span className={fs.placeholder}>Прізвище</span>
            <input
              type="text"
              name="last-name"
              placeholder="Введіть ваше прізвище"
            />
          </label>
          <label htmlFor="mail" className={fs.form_row}>
            <span className={fs.placeholder}>E-mail </span>
            <input type="text" name="mail" placeholder="Введіть ваш e-mail" />
          </label>
          <label htmlFor="tell" className={fs.form_row}>
            <span className={fs.placeholder}>Телефон</span>
            <input type="tel" name="tell" placeholder="+380" />
          </label>
          <Button class={css.save} title={"Зберегти дані"}></Button>
        </div>
      </div>
    </>
  );
};

export default PersonalData;
