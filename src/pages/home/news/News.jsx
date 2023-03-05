import React from "react";
import { LinkNav } from "../../../components/button/Button";

import SwiperCore, { FreeMode, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([FreeMode, Scrollbar]);
import "swiper/css";

import New from "../../../components/new/New";

import icon from "../../../assets/img/temp/home_icon.png";

import css from "./News.module.scss";

const array = ["", "", ""];

const News = (props) => {
  return (
    <section className={css.news}>
      <div className={css.text_content}>
        <h1 className={`small ${css.title}`}>Новини</h1>
        <LinkNav
          link="/contact-us"
          title="Більше новин"
          class={`yellow_button ${css.link}`}
        />
      </div>

      <Swiper
        className={`slider_projects ${css.news_column}`}
        scrollbar={true}
        slidesPerView={"auto"}
        freeMode={true}
        grabCursor={true}
      >
        <SwiperSlide className={css.news_slide}>
          {array.map((t, idx) => (
            <New
              key={idx}
              class={css.new_icon}
              title="Допоможемо медикам рятувати дитячі серця!"
              subtitle="Кирил чекає на день, коли лікарі дозволять йому знову ганяти на самокаті. "
              icon={icon}
              link=""
              more=""
            ></New>
          ))}
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default News;
