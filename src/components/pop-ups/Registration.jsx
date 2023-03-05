import React, { useRef, useState, useEffect } from "react";
import { useContext } from 'react';
import AuthContext from "../../context/AuthProvider";
import css from "./PopUp.module.scss";
import fs from "./../form/Form.module.scss";
import { Button } from "../button/Button";
import { openLogIn, closePopUps } from "../../redux/state";

import { fetchREST } from "../../api/fetchAPI";

import Google from "./enter-buttons/Google";
import Facebook from "./enter-buttons/Facebook";

const labelsReg = [
  {
    title: "Ім’я",
    type: "text",
    name: "first_name",
    placeholder: "Введіть ваше ім’я",
  },
  {
    title: "Прізвище",
    type: "text",
    name: "last_name",
    placeholder: "Введіть ваше прізвище",
  },
  {
    title: "E-mail",
    type: "email",
    name: "user_email",
    placeholder: "Введіть ваш e-mail",
  },
  {
    title: "Телефон",
    type: "text",
    name: "user_phone",
    placeholder: "+380",
  },
  {
    title: "Придумайте пароль*",
    type: "password",
    name: "user_pass",
    placeholder: "Введіть ваш пароль",
  },
  {
    title: "Повторіть пароль*",
    type: "password",
    name: "user_pass_repeat",
    placeholder: "Повторіть пароль",
  },
];

const Registration = (props) => {
  const { setAuth } = useContext(AuthContext);

  const formRef = useRef(null);
  const [isRemember, setRemember] = useState(false);
  const [invalidLabels, setInvalid] = useState({});

  const toggleLogIn = () => props.popups(openLogIn());
  const toggleRegistration = () => props.popups(closePopUps());

  async function submitForm() {
    setInvalid({});

    const data = new FormData(formRef.current);

    const response = await fetchREST("wings/v1/user/create", data);

    switch (response.code) {
      case "validation_error":
        setInvalid(response.data.fields);
        break;
      case "success":
        setInvalid({});
        toggleRegistration();
        break;

      default:
        break;
    }

    console.log(response);
  }

  const onInput = (e) => {
    if (!invalidLabels[e.target.name]) return;

    let i = invalidLabels;
    delete i[e.target.name];
    setInvalid({ ...i });
  };

  // useEffect(() => {
  //   console.log(invalidLabels);
  // }, [invalidLabels]);

  return (
    <div
      className={`${css.pop_up} ${css.pop_up__login} ${
        props.isOpened ? css.active : ""
      }`}
    >
      <div className={css.content}>
        <div className={css.content__scroll}>
          <h5 className={css.title}>Зареєструватися</h5>
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
              <form className={css.form_content} ref={formRef}>
                {labelsReg.map((label, idx) => (
                  <label
                    key={idx}
                    htmlFor={label.name}
                    className={`${fs.form_row} ${
                      invalidLabels[label.name] ? fs.error : ""
                    }`}
                    onInput={onInput}
                  >
                    <span className={fs.placeholder}>
                      {invalidLabels[label.name]
                        ? invalidLabels[label.name]
                        : label.title}
                    </span>
                    <input
                      type={label.type}
                      name={label.name}
                      placeholder={label.placeholder}
                    />
                  </label>
                ))}
              </form>

              <div className={css.remember}>
                <label htmlFor="check_remember" className={css.checkbox}>
                  <input
                    type="checkbox"
                    id="check_remember"
                    name="check_remember"
                    defaultChecked={isRemember}
                    onChange={(e) => setRemember(!isRemember)}
                  />
                  <span className={css.checked}></span>
                  <span className={`link`}>Запам`ятати мене</span>
                </label>
              </div>
              <Button
                callBack={submitForm}
                class={`yellow_button ${css.submit}`}
                title={"Зареєструватися"}
              />

              <div className={css.lines}>
                <span className={css.line}></span>
                <span className={css.text}>Уже зареєстровані ?</span>
                <span className={css.line}></span>
              </div>
              <Button
                class={`light_button ${css.submit}`}
                callBack={toggleLogIn}
                title={"Увійти"}
              />
            </div>
          </div>
        </div>
        <button className={css.close} onClick={toggleRegistration}>
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

export default Registration;
