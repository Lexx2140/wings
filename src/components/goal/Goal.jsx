import React from "react";
import css from "./Goal.module.scss";

import G1 from "../../assets/img/icon/goal/goal_1.svg";
import G2 from "../../assets/img/icon/goal/goal_2.svg";
import G3 from "../../assets/img/icon/goal/goal_3.svg";

const Goal = (props) => {
  return (
    <>
      <div className={`${css.goal_grid} ${props.class_grid}`}>
        <div className={`${props.class_icon}  ${css.column}`}>
          <div className={css.icon}>
          <G1></G1>
          </div>
          <div className={css.description}>
            <h3 className={css.title}>Tracking Goals</h3>
            <p >
              Проєкт, аналітика, команда,оптимально, інструмент, координатор
            </p>
          </div>
        </div>
        <div className={`${props.class_icon}  ${css.column}`}>
          <div className={css.icon}>
          <G2></G2>
          </div>
          <div className={css.description}>
            <h3 className={css.title}>Tracking Goals</h3>
            <p >
              Проєкт, аналітика, команда,оптимально, інструмент, координатор
            </p>
          </div>
        </div>
        <div className={`${props.class_icon}  ${css.column}`}>
          <div className={css.icon}>
          <G3></G3>
          </div>
          <div className={css.description}>
            <h3 className={css.title}>Tracking Goals</h3>
            <p >
              Проєкт, аналітика, команда,оптимально, інструмент, координатор
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Goal;
