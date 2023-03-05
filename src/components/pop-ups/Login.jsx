import React, { useState } from "react";
import css from "./PopUp.module.scss";
import fs from "./../form/Form.module.scss";
import { Button, LinkNav } from "../button/Button";
import { openReg, closePopUps } from "../../redux/state";

import Google from "./enter-buttons/Google";
import Facebook from "./enter-buttons/Facebook";

import Eye from "../../assets/img/icon/eye.svg";

const Login = (props) => {
  const [showPassword, setPassword] = useState(false);
  const toggleLogIn = () => props.popups(closePopUps());
  const toggleRegistration = () => props.popups(openReg());

  return (
    <div
      className={`${css.pop_up} ${css.pop_up__login} ${
        props.isOpened ? css.active : ""
      }`}
    >
      <div className={css.content}>
        <div className={css.content__scroll}>
          <h5 className={css.title}>Вхід</h5>
          <div className={css.column}>
            <div className={css.login_type}>
              <Google />
              <Facebook />
            </div>
            <div className={css.lines}>
              <span className={css.line}></span>
              <span className={css.text}>або</span>
              <span className={css.line}></span>
            </div>
            <div className={css.form_content}>
              <label htmlFor="mail" className={fs.form_row}>
                <span className={fs.placeholder}>E-mail або телефон*</span>
                <input
                  type="text"
                  name="mail"
                  placeholder="Ваш e-mail або телефон"
                />
              </label>
              {/* <label htmlFor="date" className={fs.form_row}>
                <input
                  type="date"
                  name="date"
                  placeholder="Ваш e-mail або телефон"
                  onClick={(e) => e.target.showPicker()}
                />
              </label> */}
              <label htmlFor="password" className={fs.form_row}>
                <span className={fs.placeholder}>Пароль*</span>
                <div className={css.pass_row}>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Введіть ваш пароль"
                  />
                  <span
                    className={`${css.eye}  ${showPassword ? css.active : " "}`}
                    onClick={(e) => setPassword(!showPassword)}
                  >
                    <Eye />
                  </span>
                </div>
              </label>

              <div className={css.remember}>
                <label htmlFor="check" className={css.checkbox}>
                  <input type="checkbox" id="check" name="check" />
                  <span className={css.checked}></span>
                  <span className={`link`}>Запам`ятати мене</span>
                </label>
                <a href="" className={`link ${css.forgot}`}>
                  Забули пароль ?
                </a>
              </div>
              <Button class={`yellow_button ${css.submit}`} title={"Увійти"} />
              <div className={css.lines}>
                <span className={css.line}></span>
                <span className={css.text}>Не зареєстровані ?</span>
                <span className={css.line}></span>
              </div>
              <Button
                callBack={toggleRegistration}
                class={`light_button ${css.submit}`}
                title={"Зареєструватися"}
              />
            </div>
          </div>
        </div>
        <button className={css.close} onClick={toggleLogIn}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M3.6845 3.68562L20.6551 20.6562M20.6551 3.68562L3.6845 20.6562"
              stroke="#FD9E3A"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M3.6845 3.68562L20.6551 20.6562M20.6551 3.68562L3.6845 20.6562"
              stroke="#FAC500"
              strokeOpacity="0.6"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Login;
