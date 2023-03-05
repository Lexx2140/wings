import React from "react";
import css from "../General.module.scss";
import { Button } from "../../button/Button";

import FB from "../../../assets/img/icon/socials/facebook2.svg";

const Facebook = (props) => {
  return (
    <button className={`${css.enter_button} link`}>
      <span className={css.i}>
        <FB></FB>
      </span>
      <span className={css.text}>Увійти з Facebook</span>
    </button>
  );
};

export default Facebook;
