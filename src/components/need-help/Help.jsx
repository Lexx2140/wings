import React from "react";
import { NavLink } from "react-router-dom";
import { LinkNav } from "../button/Button";
import css from "./Help.module.scss";

import Arrow from "../../assets/img/arrow.svg";

const HelpSlide = (props) => {
  return (
    <>
      <div className={css.help_icon + " " + props.class}>
        <NavLink to={"/shares/share-last"}>
          <div className={css.icon} data-icon>
            <img src={props.icon} alt="" />
          </div>
        </NavLink>

        <div className={css.information}>
          <div className={css.money}>
            <div className={css.now}>120 302 грн</div>
            <div className={css.all}>з 200 000 грн</div>
          </div>
          <div className={css.progress}>
            <div className={css.line}></div>
          </div>
          <h4 className={css.title}>{props.title}</h4>
          <p className={css.subtitle}>{props.subtitle}</p>
          <div className={css.buttons}>
            <LinkNav link={props.link} class={css.help} title="Підтримати" />
            <NavLink
              to={"/shares/share-last"}
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

export default HelpSlide;
