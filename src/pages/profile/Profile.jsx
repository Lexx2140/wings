import React, { useEffect, useState, useRef } from "react";
import { NavLink, Routes, Route, useMatch, useParams } from "react-router-dom";
import { LinkNav, Button } from "../../components/button/Button";

import css from "./Profile.module.scss";

import PersonalData from "./data/Data";
import Password from "./password/Password";
import History from "./history/History";
import Shares from "./shares/Shares";
import Subscriptions from "./subscriptions/Subscriptions";

const Profile = (props) => {
  const navs = [
    {
      to: "data",
      name: "Особисті дані",
    },
    {
      to: "password",
      name: "Змінити",
    },
    {
      to: "history",
      name: "Історія внесків",
    },
    {
      to: "shares",
      name: "Мої акції",
    },
    {
      to: "subscriptions",
      name: "Мої підписки",
    },
  ];

  const createNavs = () =>
    navs.map((nav, idx) => (
      <NavLink key={idx} to={nav.to} className={`link ${css.nav_btn}`}>
        {nav.name}
      </NavLink>
    ));

  return (
    <>
      <section className={css.profile}>
        <div className={css.text_content}>
          <h1 className={`small ${css.title}`}>Профіль</h1>
        </div>

        <div className={css.profile_content}>
          <div className={css.profile_content__nav}>
            <nav>{createNavs()}</nav>

            <div className={css.buttons}>
              <LinkNav link={"/"} title="Вийти" class={css.exit} />
              <Button title="Видалити профіль" class={css.delete} />
            </div>
          </div>
          <div className={css.profile_content__data}>
            <Routes>
              <Route path="/*" element={<PersonalData {...props} />} />
              <Route path="password" element={<Password {...props} />} />
              <Route path="history" element={<History {...props} />} />
              <Route path="shares" element={<Shares {...props} />} />
              <Route path="subscriptions" element={<Subscriptions {...props} />}
              />
            </Routes>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
