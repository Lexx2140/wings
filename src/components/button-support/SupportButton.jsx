import React from "react";
import { Button } from "../button/Button";
import store, { openSupport } from "../../redux/state";

const ButtonSupport = ({ title, ...props }) => {
  const toggleSupport = () => store.togglePopUps(openSupport());

  return (
    <Button
      title={title ? title : "Підтримати фонд"}
      callBack={toggleSupport}
      class={props.class ? props.class : "yellow_button"}
    />
  );
};
export { ButtonSupport };
