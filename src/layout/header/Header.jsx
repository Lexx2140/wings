import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import css from "./Header.module.scss";
import IconEnter from "../../assets/img/icon/enter.svg";
import IconProfile from "../../assets/img/icon/profile.svg";

import { LinkNav, Button } from "../../components/button/Button";
import Logo from "../../components/logo/Logo";
import { openLogIn } from "../../redux/state";
import { ButtonSupport } from "../../components/button-support/SupportButton";
ButtonSupport;

const Header = ({ popups, options, menu }) => {
  const pagesNav = menu[0]?.menuItems?.edges.map((item) => {
    return {
      title: item.node.label,
      uri: item.node.uri,
    };
  });

  const toggleLogIn = () => popups(openLogIn());

  return (
    <header className={css.header}>
      <div className={css.left}>
        <div className={css.logo}>
          <Logo></Logo>
        </div>
        <div className={css.language}>
          <h3 className={css.l}>EN</h3>
        </div>
        <nav className={css.links}>
          {pagesNav &&
            pagesNav.map((page, idx) => (
              <NavLink key={idx} className={`link`} to={page.uri}>
                {page.title}
              </NavLink>
            ))}
        </nav>
      </div>

      <div className={css.right}>
        <div className={css.buttons}>
          <Button title="Отримати підтримку" class={"light_button"} />
          <ButtonSupport title="Підтримати фонд" />

          <button className={"link " + css.enter} onClick={toggleLogIn}>
            <span className={css.i}>{<IconEnter />}</span>
            Увійти
            <span className={css.p}>{<IconProfile />}</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
