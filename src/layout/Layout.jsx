import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import SideBar from "./aside/Aside";
import getMenu from "../utils/getMenu";

const Layout = (props) => {
  const menus = getMenu(props?.siteData?.menus?.nodes);

  return (
    <>
      <Header {...props} popups={props.popups} menu={menus.header} />
      <SideBar />
      <main>
        <Outlet />
      </main>
      <Footer {...props} popups={props.popups} menu={menus.footer} />
    </>
  );
};

export default Layout;
