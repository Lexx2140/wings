import React from "react";
import { NavLink } from "react-router-dom";
import css from "./Footer.module.scss";

import Login from "../../components/pop-ups/Login";
import Registration from "../../components/pop-ups/Registration";
import Social from "../../components/social/Social";

import icon from "../../assets/img/logo_big.png";
import Support from "../../components/pop-ups/Support";
import { ButtonSupport } from "../../components/button-support/SupportButton";

const Footer = ({ logIn, registration, support, menu, ...props }) => {
  const pagesNav = menu[1]?.menuItems?.edges.map((item) => {
    return {
      title: item.node.label,
      uri: item.node.uri,
    };
  });

  console.log(pagesNav);

  return (
    <>
      <footer className={css.footer}>
        <div className={css.left_column}>
          <NavLink to={"/"} className={css.logo}>
            <img src={icon} alt="" />
            {/* <LogoSvg /> */}
          </NavLink>

          <div className={css.column}>
            <nav className={css.links}>
              {pagesNav &&
                pagesNav.map((page, idx) => (
                  <div key={idx} className={css.link}>
                    <NavLink className={"link"} to={page.uri}>
                      {page.title}
                    </NavLink>
                  </div>
                ))}
            </nav>
            <div className={css.all_right}>
              <p>©2018 All right reserved</p>
            </div>
          </div>
        </div>
        <div className={css.center_column}>
          <div className={css.address}>
            <div className={css.column}>
              <div className={`${css.title}`}>Адреса</div>

              <div className="">
                <p>м. Львів. вул Городоцька 16.</p>
                <a href="">volonter.lviv@gmail.com6.</a>
              </div>
            </div>
            <div className={css.column}>
              <div className={`${css.title}`}>Адреса</div>

              <div className="">
                <p>
                  Нова Пошта м. Львів, відділення 5, БФ “КРИЛА НАДІЇ”,
                  тел.:0503709002.
                </p>
              </div>
            </div>
          </div>
          <div className={css.link}>
            <NavLink className={`link ${css.link}`} to={"/contact-us"}>
              Terms and conditions
            </NavLink>
          </div>
        </div>
        <div className={css.right_column}>
          <h5 className={css.title}>
            Готовий нам <br /> допомогти?
          </h5>
          <ButtonSupport title="Підтримати" />
        </div>

        <div className={css.socials}>
          <Social class={css.s} icon="facebook" link="dfsdfsdfdsf.dfdf" />
          <Social class={css.s} icon="instagram" link="dfsdfsdfdsf.dfdf" />
          <Social class={css.s} icon="twitter" link="dfsdfsdfdsf.dfdf" />
        </div>
      </footer>
      <Login isOpened={logIn} popups={props.popups} />
      <Registration isOpened={registration} popups={props.popups} />
      <Support isOpened={support} popups={props.popups} />
    </>
  );
};

export default Footer;
