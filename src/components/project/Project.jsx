import React from "react";
import { NavLink } from "react-router-dom";
import { LinkNav } from "../button/Button";
import css from "./Project.module.scss";

import Arrow from "../../assets/img/arrow.svg";

const Project = (props) => {
  return (
    <>
      <div className={css.project + " " + props.class}>
        <NavLink to={"/projects/project-last"}>
          <div className={css.icon}>
            <img src={props.icon} alt="" />
          </div>
        </NavLink>

        <div className={css.information}>
          <h4 className={css.title}>{props.title}</h4>
          <div className={css.buttons}>
            <LinkNav link={props.link} title="Підтримати" class={css.help} />
            <NavLink
              to={"/projects/project-last"}
              className={`link ${css.link_more}`}
            >
              Більше
              <span>
                <Arrow />
              </span>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
