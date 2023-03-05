import React from "react";
import { LinkNav } from "../../../components/button/Button";

import SwiperCore, { FreeMode, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([FreeMode, Scrollbar]);
import "swiper/css";

import Project from "../../../components/project/Project";
import icon from "../../../assets/img/temp/home_icon.png";

import css from "./Projects.module.scss";

const array = ["", "", "", "", "", "", "", ""];

const Projects = (props) => {
  return (
    <section className={css.fond_project}>
      <div className={css.text_content}>
        <h1 className={`small ${css.title}`}>Проекти фонду</h1>
        <LinkNav
          link="/projects"
          title="Підтримати"
          class={`yellow_button ${css.link}`}
        />
      </div>

      <div className={css.projects}>
        <Swiper
          className={`slider_projects ${css.projects_slider}`}
          scrollbar={true}
          // slidesPerView={3}
          slidesPerView={"auto"}
          // spaceBetween={40}
          freeMode={true}
          grabCursor={true}
        >
          <SwiperSlide className={css.project_slide}>
            {array.map((t, idx) => (
              <Project
                title="Допоможемо медикам рятувати дитячі серця!"
                icon={icon}
                key={`bklock-${idx}`}
                link=""
                more=""
              ></Project>
            ))}
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;
