import React from "react";
import { LinkNav } from "../button/Button";
import Goal from "../goal/Goal";
import css from "./Support.module.scss";
import { ButtonSupport } from "../button-support/SupportButton";



const Support = (props) => {
  return (
    <section className={css.support}>
      <div className={css.text_content}>
        <h1 className={css.title}>Як підтримати ?</h1>
        <ButtonSupport
          title="Підтримати"
          class={`yellow_button ${css.link}`}
        />
      </div>

      <Goal class_grid={css.grid} class_icon={css.icon}></Goal>
    </section>
  );
};

export default Support;
