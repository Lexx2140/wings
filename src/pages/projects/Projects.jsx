import React, { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { LinkNav, Button } from "../../components/button/Button";
import Project from "../../components/project/Project";
import css from "./Projects.module.scss";
import icon from "../../assets/img/temp/home_icon.png";

import Arrow from "../../assets/img/arrow.svg";

const ProjectsPage = (props) => {
  const array = ["", "", "", "", "", "", "", ""];

  return (
    <>
      <section className={css.projects}>
        <div className={css.text_content}>
          <h1 className={`${css.title}`}>
            Проекти <br /> фонду
          </h1>
          <LinkNav
            link="/contact-us"
            title="Підтримати всі"
            class={`yellow_button ${css.link}`}
          />
        </div>

        <div className={css.grid}>
          {array.map((t, idx) => (
            <Project
              title="Допоможемо медикам рятувати дитячі серця!"
              icon={icon}
              key={`bklock-${idx}`}
              link=""
              more=""
              class={css.grid_icon}
            ></Project>
          ))}
        </div>

        <Button title="Показати більше" class={`${css.load_more}`}>
          <span className={css.arrow}>
            <Arrow></Arrow>
          </span>
        </Button>
      </section>
    </>
  );
};

export default ProjectsPage;
