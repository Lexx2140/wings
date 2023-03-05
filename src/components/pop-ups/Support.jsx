import React, { useEffect, useState } from "react";
import css from "./PopUp.module.scss";
import { Button } from "../button/Button";
import { closePopUps } from "../../redux/state";
import QuickDonation from "./type-of-donate/QuickDonation";
import Requisites from "./type-of-donate/Requisites";
import Additionally from "./type-of-donate/Additionally";

const Support = (props) => {
  const closeSupport = () => props.popups(closePopUps());
  const [typeOfDonate, setType] = useState("quick");

  const donate = {
    quick: <QuickDonation close={closeSupport} />,
    requisites: <Requisites />,
    additionally: <Additionally />,
  };
  const donateType = [
    {
      title: "Швидкий донат",
      key: "quick",
    },
    {
      title: "Реквізити",
      key: "requisites",
    },
    {
      title: "Додатково",
      key: "additionally",
    },
  ];

  return (
    <div
      className={`${css.pop_up} ${css.pop_up__support} ${
        props.isOpened ? css.active : ""
      }`}
    >
      <div className={css.column}>
        <div className={css.content__scroll}>
          <div className={css.side_left}>
            <div className={css.buttons}>
              {donateType.map((type, idx) => (
                <button
                  key={idx}
                  onClick={(e) => setType(type.key)}
                  className={`${css.button} ${
                    typeOfDonate == type.key ? css.active : ""
                  }`}
                >
                  {type.title}
                </button>
              ))}
            </div>
            <div className={css.bottom}>
              <p className={css.title}>
                Просимо звернути увагу на те, що при переказі коштів, ви
                автоматично погоджуєтеся з правилами нашого фонду:
              </p>
              <p className={css.subtitle}>
                При переказі коштів на розрахунковий рахунок благодійного фонду
                "Крила надії" для конкретної дитини, при неможливості
                використання коштів згідно цільового призначення ( завершення
                дитиною основного курсу лікування, відмова батьків від допомоги
                фонду, інші суттєві обставини) я даю дозвіл на використання
                залишку коштів на потреби інших дітей, що знаходяться під опікою
                фонду.
              </p>
              <Button title="Увійти" class={"light_button"} />
            </div>
          </div>
          <div className={css.side_right}>{donate[typeOfDonate]}</div>
        </div>
        <button className={css.close} onClick={closeSupport}>
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

export default Support;
