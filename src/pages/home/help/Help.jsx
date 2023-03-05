import React from "react";

import { ButtonSupport } from "../../../components/button-support/SupportButton";

import SwiperCore, { FreeMode, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([FreeMode, Scrollbar]);
import "swiper/css";

import icon from "../../../assets/img/temp/home_icon.png";
import HelpSlide from "../../../components/need-help/Help";

import css from "./Help.module.scss";

const array = ["", "", "", "", "", "", "", ""];

const Help = (props) => {
  return (
    <section className={css.need_help}>
      <div className={css.text_content}>
        <h1 className={`small ${css.title}`}>Кому допомогти</h1>
        <ButtonSupport title="Підтримати" class={`yellow_button ${css.link}`} />
      </div>

      <div className={css.projects}>
        <Swiper
          className={`slider_projects ${css.projects_slider}`}
          scrollbar={true}
          slidesPerView={"auto"}
          freeMode={true}
          grabCursor={true}
        >
          <SwiperSlide className={css.project_slide}>
            {array.map((t, idx) => (
              <HelpSlide
                key={`bklock-${idx}`}
                title={`Допоможемо медикам рятувати дитячі серця! ${idx}`}
                subtitle="Кирил чекає на день, коли лікарі дозволять йому знову ганяти на самокаті. "
                icon={icon}
                link=""
                more=""
              ></HelpSlide>
            ))}
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Help;
