import React from "react";
import css from "./Button.module.scss";
import { NavLink } from "react-router-dom";

const Title = (props) => {
  return <span className={css.taxt}>{props.title}</span>;
};

const Button = (props) => {

  const callBackFn = () =>{
    if(!props.callBack) return;
     return props.callBack();
  }
  return (
    <button onClick={callBackFn} className={`link ${css.button} ${props.class ? props.class : ""}`}>
      {props.title && <Title title={props.title} />}
      {props.children}
    </button>
  );
};
const LinkCuston = (props) => {
  return (
    <a href={props.link} className={`link ${css.button} ${props.class ? props.class : ""}`}>
      <Title title={props.title} />
    </a>
  );
};
const LinkNav = (props) => {
  return (
    <NavLink to={props.link} className={`link ${css.button} ${props.class ? props.class : ""}`}>
      <Title title={props.title} />
    </NavLink>
  );
};

export { Button, LinkCuston, LinkNav };
