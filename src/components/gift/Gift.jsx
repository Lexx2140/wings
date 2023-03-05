import React from "react";
import { LinkNav } from "../button/Button";
import css from "./Gift.module.scss";

const Gift = (props) => {
  return (
    <>
      <div className={css.gift + " " + props.class}>
        <div className={css.icon}>
          <img src={props.icon} alt="" />
        </div>
        <div className={css.information}>
          <h4 className={css.title}>{props.title}</h4>
          <div className={css.buttons}>
            <LinkNav link={props.link} title="Подарувати" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Gift;
