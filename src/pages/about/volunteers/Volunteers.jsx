import React from "react";
import { LinkNav } from "../../../components/button/Button";

import SwiperCore, { FreeMode, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([FreeMode, Scrollbar]);
import "swiper/css";

import icon from "../../../assets/img/temp/home_icon.png";

import css from "./Volunteers.module.scss";

const array = ["", "", "", "", "", "", "", ""];


const Volunteers = (props) => {
  return (
    <section className={css.volunteers}>
        <div className={css.text_content}>
          <h1 className={`small ${css.title}`}>Команда волонтерів</h1>
          <LinkNav
            link="/projects"
            title="Доєднатись до команди"
            class={`yellow_button ${css.link}`}
          />
        </div>

        <div className={css.volunteers_grid}>
          <Swiper
            className={`slider_projects ${css.volunteers_slider}`}
            scrollbar={true}
            slidesPerView={"auto"}
            freeMode={true}
            grabCursor={true}
          >
            <SwiperSlide className={css.volunteers_slide}>
              {array.map((t, idx) => (
                <div key={idx} className={css.volunteer}>
                  <div className={css.icon}>
                    <img src={icon} alt="" />
                  </div>
                  <div className={css.information}>
                    <h4 className={css.title}>Maрта Долайчук</h4>
                    <p className={css.position}>СЕО “Крила Надії”, Волонтер</p>
                  </div>
                </div>
              ))}
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
  );
};

export default Volunteers;
