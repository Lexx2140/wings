import React from "react";
import css from "./New.module.scss";
import { NavLink } from "react-router-dom";

const New = (props) => {
  return (
    <>
      <NavLink
        to={"/news/new-last"}
        className={`${css.new} ${props.class ? props.class : ""} `}
      >
        <div className={css.icon} data-icon={true}>
          <img src={props.icon} alt="" />
        </div>
        <div className={css.information}>
          <div className={css.tags}>
            <div className={`link ${css.tag}`}>Події</div>
            <div className={`link ${css.tag}`}>Події</div>
            <div className={`link ${css.tag}`}>Події</div>
          </div>
          <div className={css.date}>24 Березня 2022</div>
          <h4 className={css.title}>{props.title}</h4>
          <p className={css.subtitle}>{props.subtitle}</p>
        </div>
      </NavLink>
    </>
  );
};

export default New;
