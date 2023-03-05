import React from "react";
import css from "../General.module.scss";

import GG from "../../../assets/img/icon/socials/google.svg";

const Google = (props) => {
  return (
    <button className={`${css.enter_button} link`}>
      <span className={css.i}>
        <GG></GG>
      </span>
      <span className={css.text}>Увійти з Google</span>
    </button>
  );
};

export default Google;
