import React from "react";

import Welcome from "./welcome/Welcome";
import Values from "./values/Values";
import Dream from "./dream/Dream";
import Volunteers from "./volunteers/Volunteers";
import Support from "../../components/support/Support";

const FondPage = (props) => {
  return (
    <>
      <Welcome />
      <Values />
      <Dream />
      <Volunteers />
      <Support></Support>
    </>
  );
};

export default FondPage;
